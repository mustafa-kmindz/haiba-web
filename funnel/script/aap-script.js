/**
 * Copyright 2024 Peter Horner
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This script was created by Peter Horner.
 * Check out my YouTube channel for more Apps Script tutorials:
 * https://www.youtube.com/@PeterHornerGoogleTech 
 */

const COUNT      = 1;
const FROM_EMAIL = 'mustafa@kmindz.in' // Change to actual sender email
const FROM_NAME = 'Huzaifa Daudi'
const SLEEP_TIME = 1 // 1sec


/**
 * Adds a custom menu to the spreadsheet when it is opened.
 */
function onOpen(){
  // Get the user interface of the spreadsheet.
  const ui = SpreadsheetApp.getUi()
  // Create a new menu called "Send Mail".
  ui.createMenu('Send Mail')
    // Add an item to the menu that will call the "kMindzNewsletter" function when clicked.
    .addItem('Send emails', 'kMindzNewsletter')
    // Add the menu to the user interface.
    .addToUi()
}

// /**
//  * Sends a newsletter email to each recipient listed in the "Emails" sheet.
//  */
// function kMindzNewsletter() {
//   // Get the active spreadsheet.
//   const ss = SpreadsheetApp.getActiveSpreadsheet()
//   // Get the "Emails" sheet.
//   const sheet = ss.getSheetByName('Emails')
//   // Get all the data from the sheet, with the first row being the headers.
//   const [head,...data] = sheet.getDataRange().getValues()

//   // Log the data to the console (for debugging).
//   console.log(data)

//   // Loop through each row of data.
//   data.forEach((row,i) => {
//     // Get the name, email, and status from the current row.
//     const name = row[head.indexOf('Name')]
//     const email = row[head.indexOf('Email')]
//     const status = row[head.indexOf('Status')]
//     // If the status is not set, send the email and update the status.
//     if (!status) {
//       console.log('send email to '+email)
//       sendMail(email,name)
//       sheet.getRange(i+2,head.indexOf('Status')+1).setValue('Email sent')
//     }
//   })
// }

/**
 * Sends a newsletter email to each recipient listed in the "Emails" sheet.
 * Limits to 50 emails per execution and adds a delay of 5 seconds between each email.
 */
function kMindzNewsletter() {
  // Get the active spreadsheet.
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // Get the "Emails" sheet.
  const sheet = ss.getSheetByName('Emails');
  // Get all the data from the sheet, with the first row being the headers.
  const [head, ...data] = sheet.getDataRange().getValues();

  // Log the data to the console (for debugging).
  // console.log(data);

  // Set a counter to track how many emails have been sent
  let emailsSent = 0;

  // Loop through each row of data.
  for (let i = 0; i < data.length; i++) {
    // Get the name, email, and status from the current row.
    const name = data[i][head.indexOf('Name')];
    const email = data[i][head.indexOf('Email')];
    const status = data[i][head.indexOf('Status')];

    // If the status is not set, send the email and update the status.
    if (!status) {
      console.log('Sending email to ' + email);
      sendMail(email, name);
      SpreadsheetApp.flush();
      sheet.getRange(i + 2, head.indexOf('Status') + 1).setValue('Email sent');
      SpreadsheetApp.flush();

      Logger.log(`Row: ${i + 2}, Column: ${head.indexOf('Status') + 1}`);

      emailsSent++;
      // Check if 50 emails have been sent
      if (emailsSent >= COUNT) {
        console.log('Reached the limit of 50 emails. Stopping.');
        break; // Exit the loop after 50 emails
      }

      // Add a delay of 5 seconds before sending the next email
      // Utilities.sleep(SLEEP_TIME * 1000); // 5000 milliseconds = 5 seconds
    } 
  }
}


/**
 * Sends an email with the Hogwarts newsletter.
 *
 * @param {string} email The email address of the recipient.
 * @param {string} name The name of the recipient.
 */
function sendMail(email,name) {

  // Set the subject of the email.
  // const subject = `${name}, 2025 the Year of AI Agents: Join the Revolution with Kryptomindz!`; 
  const subject = `${name}, Build Your Idea Into Reality — At ZERO Cost!`; 

  // Create the HTML body of the email.
  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Build Your Vision, Fast - Haiba</title>
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f8fafc;
            color: #1e293b;
        }
        
        .wrapper {
            max-width: 700px;
            margin: 30px auto;
            background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(15, 23, 42, 0.1);
            border: 1px solid #e2e8f0;
        }
        
        .hero {
            background: linear-gradient(135deg, #1e40af 0%, #059669 50%, #0891b2 100%);
            padding: 70px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: -30%;
            right: -20%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
            border-radius: 50%;
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
        }
        
        .hero-icon-large {
            font-size: 100px;
            line-height: 1;
            margin-bottom: 20px;
            animation: bounce-gentle 3s ease-in-out infinite;
        }
        
        @keyframes bounce-gentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        
        .hero-title {
            font-size: 44px;
            font-weight: 900;
            color: white;
            margin-bottom: 12px;
            line-height: 1.1;
            letter-spacing: -1px;
        }
        
        .hero-subtitle {
            font-size: 16px;
            color: rgba(255,255,255,0.95);
            font-weight: 400;
            letter-spacing: 0.5px;
        }
        
        .main {
            padding: 50px 45px;
        }
        
        .greeting {
            font-size: 26px;
            font-weight: 800;
            background: linear-gradient(135deg, #1e40af, #059669);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
        }
        
        .intro {
            font-size: 15px;
            line-height: 1.8;
            color: #475569;
            margin-bottom: 25px;
        }
        
        .intro strong {
            color: #1e40af;
            font-weight: 700;
        }
        
        /* Dual Persona Section */
        .personas-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 40px 0;
        }
        
        .persona-section {
            padding: 25px;
            border-radius: 12px;
            border: 2px solid #e2e8f0;
            transition: all 0.3s ease;
        }
        
        .persona-section:hover {
            border-color: #1e40af;
            box-shadow: 0 8px 20px rgba(30, 64, 175, 0.1);
        }
        
        .persona-founder {
            background: linear-gradient(135deg, #eff6ff 0%, #fef3c7 100%);
            border-color: #1e40af;
        }
        
        .persona-intrapreneur {
            background: linear-gradient(135deg, #ecfdf5 0%, #f3e8ff 100%);
            border-color: #059669;
        }
        
        .persona-label {
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }
        
        .persona-founder .persona-label {
            color: #1e40af;
        }
        
        .persona-intrapreneur .persona-label {
            color: #059669;
        }
        
        .persona-title {
            font-size: 16px;
            font-weight: 800;
            margin-bottom: 15px;
            color: #0f172a;
        }
        
        .persona-content {
            display: space-between;
            gap: 12px;
        }
        
        .thought-block {
            background: rgba(255, 255, 255, 0.6);
            padding: 12px;
            border-radius: 8px;
            border-left: 3px solid;
            margin-bottom: 12px;
        }
        
        .thought-block.problem {
            border-left-color: #ef4444;
        }
        
        .thought-block.solution {
            border-left-color: #10b981;
        }
        
        .thought-label {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        
        .thought-block.problem .thought-label {
            color: #ef4444;
        }
        
        .thought-block.solution .thought-label {
            color: #10b981;
        }
        
        .thought-text {
            font-size: 12px;
            line-height: 1.6;
            color: #334155;
            font-weight: 500;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(135deg, #1e40af, #059669);
            margin: 40px 0;
            opacity: 0.3;
        }
        
        .problem-solution {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 35px 0;
        }
        
        .problem-box, .solution-box {
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
        }
        
        .problem-box {
            background: rgba(239, 68, 68, 0.08);
            border-left: 4px solid #ef4444;
        }
        
        .solution-box {
            background: rgba(16, 185, 129, 0.08);
            border-left: 4px solid #10b981;
        }
        
        .box-title {
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .problem-box .box-title {
            color: #ef4444;
        }
        
        .solution-box .box-title {
            color: #10b981;
        }
        
        .box-content {
            font-size: 13px;
            line-height: 1.7;
            color: #475569;
            font-weight: 500;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin: 30px 0;
        }
        
        .feature {
            background: linear-gradient(135deg, #f0f7ff 0%, #ecfdf5 100%);
            padding: 22px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #d0f0ff;
            transition: all 0.3s ease;
        }
        
        .feature:hover {
            background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(30, 64, 175, 0.15);
        }
        
        .feature-icon {
            font-size: 36px;
            margin-bottom: 10px;
            display: block;
        }
        
        .feature-value {
            font-size: 22px;
            font-weight: 900;
            background: linear-gradient(135deg, #1e40af, #059669);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 4px;
        }
        
        .feature-label {
            font-size: 12px;
            color: #0c4a6e;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            font-weight: 700;
            line-height: 1.4;
        }
        
        .roadmap {
            background: linear-gradient(135deg, #e0f2fe 0%, #ecfdf5 100%);
            border: 1px solid #a7f3d0;
            border-radius: 10px;
            padding: 28px;
            margin: 30px 0;
        }
        
        .roadmap-title {
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #0c4a6e;
            margin-bottom: 18px;
        }
        
        .roadmap-steps {
            display: flex;
            gap: 12px;
            justify-content: space-between;
        }
        
        .step {
            flex: 1;
            text-align: center;
            font-size: 12px;
            color: #0c4a6e;
            font-weight: 500;
            line-height: 1.5;
        }
        
        .step-number {
            display: inline-block;
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #1e40af, #059669);
            color: white;
            border-radius: 50%;
            font-weight: 800;
            line-height: 32px;
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .step-label {
            display: block;
            margin-top: 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 700;
        }
        
        .trust-box {
            background: linear-gradient(135deg, #dcfce7 0%, #e0f2fe 100%);
            border: 1px solid #86efac;
            border-left: 4px solid #22c55e;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        
        .trust-title {
            font-size: 13px;
            font-weight: 800;
            color: #166534;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        
        .trust-content {
            font-size: 13px;
            line-height: 1.7;
            color: #166534;
            font-weight: 500;
        }
        
        .trust-content strong {
            color: #059669;
            font-weight: 700;
        }
        
        .cta-section {
            text-align: center;
            margin: 40px 0;
            padding: 35px 25px;
            background: linear-gradient(135deg, #e0f2fe 0%, #ecfdf5 100%);
            border: 2px dashed #1e40af;
            border-radius: 12px;
        }
        
        .cta-pre {
            font-size: 12px;
            color: #0c4a6e;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 700;
            margin-bottom: 18px;
        }
        
        .cta-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin: 18px 0;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #1e40af 0%, #0891b2 100%);
            color: #ffffff !important;
            padding: 16px 30px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 800;
            font-size: 13px;
            transition: all 0.3s ease;
            box-shadow: 0 15px 35px rgba(30, 64, 175, 0.25);
            border: none;
            cursor: pointer;
            letter-spacing: 0.5px;
        }
        
        .cta-button.intrapreneur {
            background: linear-gradient(135deg, #059669 0%, #0891b2 100%);
            box-shadow: 0 15px 35px rgba(5, 150, 105, 0.25);
            color: #ffffff !important;
        }
        
        .cta-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 45px rgba(30, 64, 175, 0.35);
        }
        
        .cta-button.intrapreneur:hover {
            box-shadow: 0 20px 45px rgba(5, 150, 105, 0.35);
        }
        
        .cta-post {
            font-size: 12px;
            color: #0c4a6e;
            margin-top: 15px;
            line-height: 1.6;
            font-weight: 500;
        }
        
        .footer {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            border-top: 2px solid #1e40af;
            padding: 40px;
            text-align: center;
            font-size: 12px;
        }
        
        .footer-title {
            color: #0c4a6e;
            font-weight: 800;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        
        .footer-text {
            color: #475569;
            margin-bottom: 15px;
            line-height: 1.7;
            font-weight: 500;
        }
        
        .footer-contact {
            margin: 12px 0;
        }
        
        .footer-contact a {
            color: #1e40af;
            text-decoration: none;
            font-weight: 700;
            margin: 0 3px;
        }
        
        .footer-divider {
            height: 1px;
            background: #cbd5e1;
            margin: 15px 0;
        }
        
        .footer-links {
            margin: 12px 0;
        }
        
        .footer-links a {
            color: #1e40af;
            text-decoration: none;
            margin: 0 5px;
            font-weight: 700;
        }
        
        .footer-bottom {
            margin-top: 15px;
            font-size: 11px;
            color: #64748b;
        }
        
        .footer-bottom a {
            color: #0ea5e9;
            text-decoration: none;
        }
        
        @media (max-width: 600px) {
            .main {
                padding: 30px 20px;
            }
            
            .hero {
                padding: 50px 20px;
            }
            
            .hero-title {
                font-size: 32px;
            }
            
            .hero-icon-large {
                font-size: 70px;
            }
            
            .personas-container, .problem-solution, .features-grid, .roadmap-steps, .cta-buttons {
                grid-template-columns: 1fr;
                gap: 15px;
            }
            
            .roadmap-steps {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="hero">
            <div class="hero-content">
                <div class="hero-icon-large">&#x1F680;</div>
                <h1 class="hero-title">From Vision to Action</h1>
                <p class="hero-subtitle">Idea to Success in 4 Weeks</p>
            </div>
        </div>
        
        <div class="main">
            <h2 class="greeting">You are a Visionary or an Intrapreneur?</h2>
            <p class="intro" style="text-align: center; font-size: 16px; font-weight: 600; margin-bottom: 30px;">
                <strong>We got you covered.</strong> You have that idea. You know it's brilliant. <strong>What's stopping you from building it?</strong>
            </p>
            <div class="personas-container">
                <!-- Founder Path -->
                <div class="persona-section persona-founder">
                    <div class="persona-label">&#x1F468;&#x200D;&#x1F4BC; The Founder Path</div>
                    <div class="persona-title">Build Your Startup</div>
                    
                    <div class="persona-content">
                        <div class="thought-block problem">
                            <div class="thought-label">&#x274C; The Trap</div>
                            <div class="thought-text">Ideas stay ideas. Your competitors aren't waiting. The window closes fast. Market moves on.</div>
                        </div>
                        <div class="thought-block solution">
                            <div class="thought-label">&#x2713; The Reality</div>
                            <div class="thought-text">Working product. Real code. Real validation. You own it all. Zero cost to you. Done in 4 weeks.</div>
                        </div>
                    </div>
                </div>
                
                <!-- Intrapreneur Path -->
                <div class="persona-section persona-intrapreneur">
                    <div class="persona-label">&#x1F3AF; The Intrapreneur Path</div>
                    <div class="persona-title">Get Management Approval</div>
                    
                    <div class="persona-content">
                        <div class="thought-block problem">
                            <div class="thought-label">&#x274C; The Trap</div>
                            <div class="thought-text">Great ideas get stuck in PowerPoints. "Prove it first" stalls progress. Budget cycle waits for nobody.</div>
                        </div>
                        <div class="thought-block solution">
                            <div class="thought-label">&#x2713; The Reality</div>
                            <div class="thought-text">Executive-ready proof. Real metrics. Working demo. Get budget approved. Fast-track in 4 weeks.</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="features-grid">
                <div class="feature">
                    <span class="feature-icon">&#x26A1;</span>
                    <div class="feature-value">4</div>
                    <div class="feature-label">Weeks to Launch</div>
                </div>
                <div class="feature">
                    <span class="feature-icon">&#x1F4B5;</span>
                    <div class="feature-value">$0</div>
                    <div class="feature-label">Cost to You</div>
                </div>
                <div class="feature">
                    <span class="feature-icon">&#x1F3AF;</span>
                    <div class="feature-value">100%</div>
                    <div class="feature-label">Your Ownership</div>
                </div>
                <div class="feature">
                    <span class="feature-icon">&#x1F512;</span>
                    <div class="feature-value">NDA</div>
                    <div class="feature-label">Confidential</div>
                </div>
            </div>
            
            <div class="roadmap">
                <div class="roadmap-title">&#x2713; Your 4-Week Journey</div>
                <div class="roadmap-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-label">Share</div>
                        <div>Your vision & goals</div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-label">Build</div>
                        <div>Production-ready MVP</div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-label">Validate</div>
                        <div>Real data & feedback</div>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <div class="step-label">Launch</div>
                        <div>Market or board ready</div>
                    </div>
                </div>
            </div>
            
            <div class="cta-section">
                <div class="cta-pre">Ready to Move From Idea to Reality?</div>
                <div class="cta-buttons">
                    <a href="https://haiba.co/funnel/landing.html?persona=founder" class="cta-button">
                        Build My MVP →
                    </a>
                    <a href="https://haiba.co/funnel/landing.html?persona=intrapreneur" class="cta-button intrapreneur">
                        Get Management Approval →
                    </a>
                </div>
                <div class="cta-post">
                    Confidential • NDA Protected • You Own Everything • Starts Next Week
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-title">&#x1F680; Haiba Enterprises</div>
            <div class="footer-text">
                Turning brilliant ideas into market reality. From startups to Fortune 500. Completely confidential.
            </div>
            
            <div class="footer-contact">
                <a href="tel:+97333185642">&#x1F4DE; +973-33185642</a> •
                <a href="mailto:enquiry@haiba.co">&#x1F4E7; enquiry@haiba.co</a>
            </div>
            
            <div class="footer-divider"></div>
            
            <div class="footer-links">
                <a href="https://haiba.co">Home</a> •
                <a href="https://haiba.co/solutions.html">Solutions</a> •
                <a href="https://haiba.co/funnel/poc.html">How It Works</a>
            </div>
            
            <div class="footer-bottom">
                &copy; 2025 Haiba Enterprises. All rights reserved.<br>
                <a href="#">Manage preferences</a> | <a href="#">Unsubscribe</a>
            </div>
        </div>
    </div>
</body>
</html>



  `;

  // Set the options for the email.
  const options = {
    name: FROM_NAME,
    htmlBody: htmlBody,
    replyTo: 'enquiry@haiba.co',
    cc: '',
    bcc: '',
    // Headers for better email deliverability
    inlineImages: {}
  };

  // Send the email.
  GmailApp.sendEmail(email, subject, "", options); 
  
}








