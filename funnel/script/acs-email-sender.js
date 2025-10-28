/**
 * Azure Communication Services Email Sender
 * 
 * This script sends emails using Azure Communication Services
 * It reads recipients from a CSV file and sends personalized emails
 * 
 * Setup:
 * 1. Install dependencies: npm install @azure/communication-email axios dotenv csv-parser
 * 2. Create a .env file with your ACS credentials
 * 3. Prepare a CSV file with 'Name' and 'Email' columns
 * 4. Run: node acs-email-sender.js --csv=recipients.csv
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { EmailClient } = require("@azure/communication-email");

// ============================================================================
// CONFIGURATION
// ============================================================================

const ACS_CONNECTION_STRING = process.env.ACS_CONNECTION_STRING;
const FROM_EMAIL = process.env.FROM_EMAIL || 'DoNotReply@bolgini.com';
const FROM_NAME = process.env.FROM_NAME || 'Haiba Enterprises';
const DELAY_BETWEEN_EMAILS = parseInt(process.env.DELAY_BETWEEN_EMAILS || '1000'); // milliseconds
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '10'); // emails per batch

// Parse command line arguments
const args = process.argv.slice(2);
const csvFile = args.find(arg => arg.startsWith('--csv='))?.split('=')[1];
const templateFile = args.find(arg => arg.startsWith('--template='))?.split('=')[1] || 'email-combined.html';

// Template directory
const TEMPLATE_DIR = path.join(__dirname, '../email-templates');

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Sleep for specified milliseconds
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Read CSV file and extract recipient data
 */
async function readCSVFile(filePath) {
  return new Promise((resolve, reject) => {
    const recipients = [];
    
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        if (row.Email && row.Name) {
          recipients.push({
            name: row.Name.trim(),
            email: row.Email.trim()
          });
        }
      })
      .on('end', () => {
        resolve(recipients);
      })
      .on('error', reject);
  });
}

/**
 * Load HTML template from file and personalize it with the recipient's name
 */
function loadEmailTemplate(templateFileName, recipientName) {
  try {
    const templatePath = path.join(TEMPLATE_DIR, templateFileName);
    
    // Check if template file exists
    if (!fs.existsSync(templatePath)) {
      console.warn(`⚠️  Template not found: ${templatePath}. Using default.`);
      return getDefaultEmailHTML(recipientName);
    }

    // Read template file
    let htmlContent = fs.readFileSync(templatePath, 'utf-8');
    
    // Replace placeholder with recipient name if it exists
    // Support multiple placeholder formats: {{NAME}}, {{name}}, {NAME}, {name}
    htmlContent = htmlContent.replace(/\{\{?NAME\}?\}/gi, recipientName);
    htmlContent = htmlContent.replace(/\{\{?name\}?\}/gi, recipientName);
    
    return htmlContent;
  } catch (error) {
    console.warn(`⚠️  Error loading template: ${error.message}. Using default.`);
    return getDefaultEmailHTML(recipientName);
  }
}

/**
 * Default fallback HTML email body
 * Simple minimal template used when template file cannot be loaded
 */
function getDefaultEmailHTML(name) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message from Haiba</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 30px;">
        <h1 style="color: #1e40af; margin-top: 0;">Hello ${name},</h1>
        <p style="color: #475569; line-height: 1.6;">
            Thank you for your interest in Haiba Enterprises. Please check back soon for an exciting message!
        </p>
        <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
            <strong>This is a fallback template.</strong> Please ensure your email template is available.
        </p>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 12px; color: #64748b;">
            <p style="margin: 5px 0;">© 2025 Haiba Enterprises</p>
            <p style="margin: 5px 0;"><a href="https://haiba.co" style="color: #1e40af; text-decoration: none;">Visit our website</a></p>
        </div>
    </div>
</body>
</html>`;
}

/**
 * Send email via Azure Communication Services
 */
async function sendEmailViaACS(client, recipient, templateFileName) {
  const subject = `${recipient.name}, Build Your Idea Into Reality — At ZERO Cost!`;
  const htmlBody = loadEmailTemplate(templateFileName, recipient.name);

  try {
    const message = {
      senderAddress: FROM_EMAIL,
      content: {
        subject: subject,
        html: htmlBody
      },
      recipients: {
        to: [
          {
            address: recipient.email,
            displayName: recipient.name
          }
        ]
      }
    };

    // Use beginSend with poller (official API)
    const poller = await client.beginSend(message);
    const response = await poller.pollUntilDone();
    
    return {
      success: true,
      messageId: response.id || response.messageId || 'sent',
      recipient: recipient.email
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      recipient: recipient.email
    };
  }
}

/**
 * Main function to send emails from CSV
 */
async function main() {
  // Validate configuration
  if (!ACS_CONNECTION_STRING) {
    console.error('❌ Error: ACS_CONNECTION_STRING not set in .env file');
    process.exit(1);
  }

  if (!csvFile) {
    console.error('❌ Error: Please provide CSV file path');
    console.log('Usage: node acs-email-sender.js --csv=recipients.csv [--template=email-template.html]');
    console.log('\nAvailable templates:');
    console.log('  - email-01-founder.html');
    console.log('  - email-02-intrapreneur.html');
    console.log('  - email-combined.html (default)');
    console.log('  - email-template-light.html');
    console.log('  - email-template-dark.html');
    process.exit(1);
  }

  // Check if template file exists in templates directory
  const templatePath = path.join(TEMPLATE_DIR, templateFile);
  if (!fs.existsSync(templatePath)) {
    console.warn(`⚠️  Warning: Template file not found: ${templatePath}`);
    console.log('Using default template: email-combined.html');
  }

  // Check if CSV file exists
  if (!fs.existsSync(csvFile)) {
    console.error(`❌ Error: CSV file not found: ${csvFile}`);
    process.exit(1);
  }

  try {
    console.log('📧 Azure Communication Services Email Sender');
    console.log('='.repeat(50));
    
    // Initialize ACS client
    const client = new EmailClient(ACS_CONNECTION_STRING);
    console.log('✅ Connected to Azure Communication Services');
    console.log(`📄 Using template: ${templateFile}`);

    // Read CSV file
    console.log(`📁 Reading CSV file: ${csvFile}`);
    const recipients = await readCSVFile(csvFile);
    console.log(`📋 Found ${recipients.length} recipients`);
    console.log('='.repeat(50));

    if (recipients.length === 0) {
      console.warn('⚠️  No recipients found in CSV file');
      process.exit(0);
    }

    // Send emails with batching and delays
    let successCount = 0;
    let failureCount = 0;
    const failedRecipients = [];

    for (let i = 0; i < recipients.length; i++) {
      const recipient = recipients[i];
      const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
      const positionInBatch = (i % BATCH_SIZE) + 1;

      console.log(
        `[Batch ${batchNumber}/${Math.ceil(recipients.length / BATCH_SIZE)}] ` +
        `(${positionInBatch}/${Math.min(BATCH_SIZE, recipients.length - (batchNumber - 1) * BATCH_SIZE)}) ` +
        `Sending to ${recipient.email}...`
      );

      const result = await sendEmailViaACS(client, recipient, templateFile);

      if (result.success) {
        console.log(`✅ Email sent to ${result.recipient} (Message ID: ${result.messageId})`);
        successCount++;
      } else {
        console.log(`❌ Failed to send to ${result.recipient}: ${result.error}`);
        failureCount++;
        failedRecipients.push(recipient);
      }

      // Add delay between emails (but not after the last one)
      if (i < recipients.length - 1) {
        await sleep(DELAY_BETWEEN_EMAILS);
      }
    }

    // Summary
    console.log('='.repeat(50));
    console.log('📊 Email Campaign Summary');
    console.log('='.repeat(50));
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${failureCount}`);
    console.log(`📈 Success Rate: ${((successCount / recipients.length) * 100).toFixed(2)}%`);

    if (failedRecipients.length > 0) {
      console.log('\n⚠️  Failed Recipients:');
      failedRecipients.forEach(r => {
        console.log(`   - ${r.name} (${r.email})`);
      });
    }

    console.log('='.repeat(50));
  } catch (error) {
    console.error('❌ Fatal Error:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { sendEmailViaACS, readCSVFile, loadEmailTemplate, getDefaultEmailHTML };
