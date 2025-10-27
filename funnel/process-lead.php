<?php
/**
 * HAIBA LEADS - Form Processing & Mailerlite Integration
 * This script processes lead capture forms and integrates with Mailerlite API
 */

// Enable error handling
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get JSON data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'company', 'industry', 'challenge'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// Sanitize input
$lead = [
    'name' => sanitize($input['name']),
    'email' => filter_var($input['email'], FILTER_VALIDATE_EMAIL),
    'company' => sanitize($input['company']),
    'industry' => sanitize($input['industry']),
    'challenge' => sanitize($input['challenge']),
    'phone' => sanitize($input['phone'] ?? ''),
    'timestamp' => date('Y-m-d H:i:s'),
    'source' => $input['source'] ?? 'landing_page',
];

// Validate email
if (!$lead['email']) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Log the lead locally (for backup)
log_lead($lead);

// Send to Mailerlite
$mailerlite_response = send_to_mailerlite($lead);

// Store in database (if you have one)
// store_lead_in_db($lead);

// Send confirmation email
send_confirmation_email($lead);

// Track funnel event
track_funnel_event('lead_captured', $lead['email']);

// Return success
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Lead captured successfully',
    'lead_id' => uniqid('LEAD_'),
    'email' => $lead['email']
]);

// ============ HELPER FUNCTIONS ============

/**
 * Sanitize input string
 */
function sanitize($input) {
    return trim(htmlspecialchars($input, ENT_QUOTES, 'UTF-8'));
}

/**
 * Send lead to Mailerlite via API
 */
function send_to_mailerlite($lead) {
    // Replace with your Mailerlite API key
    $api_key = getenv('MAILERLITE_API_KEY') ?: 'YOUR_API_KEY_HERE';
    $group_id = getenv('MAILERLITE_GROUP_ID') ?: 'YOUR_GROUP_ID_HERE';
    
    if ($api_key === 'YOUR_API_KEY_HERE') {
        return false; // Skip if not configured
    }
    
    $mailerlite_data = [
        'email' => $lead['email'],
        'name' => $lead['name'],
        'fields' => [
            'company' => $lead['company'],
            'industry' => $lead['industry'],
            'challenge' => $lead['challenge'],
            'phone' => $lead['phone'],
            'source' => $lead['source'],
            'funnel_stage' => 'lead_capture'
        ],
        'groups' => [$group_id]
    ];
    
    $ch = curl_init('https://api.mailerlite.com/v2/subscribers');
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'X-MailerLite-ApiKey: ' . $api_key
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($mailerlite_data));
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code === 200 || $http_code === 201) {
        return true;
    }
    
    return false;
}

/**
 * Log lead to local file (backup)
 */
function log_lead($lead) {
    $log_dir = __DIR__ . '/leads_log/';
    if (!is_dir($log_dir)) {
        mkdir($log_dir, 0755, true);
    }
    
    $log_file = $log_dir . date('Y-m-d') . '.csv';
    $file_exists = file_exists($log_file);
    
    $fh = fopen($log_file, 'a');
    
    // Add header if file is new
    if (!$file_exists) {
        fputcsv($fh, ['Timestamp', 'Name', 'Email', 'Company', 'Industry', 'Challenge', 'Phone', 'Source']);
    }
    
    fputcsv($fh, [
        $lead['timestamp'],
        $lead['name'],
        $lead['email'],
        $lead['company'],
        $lead['industry'],
        $lead['challenge'],
        $lead['phone'],
        $lead['source']
    ]);
    
    fclose($fh);
}

/**
 * Send confirmation email to lead
 */
function send_confirmation_email($lead) {
    $to = $lead['email'];
    $subject = "Your Personalized Haiba Plan is Being Prepared! 🚀";
    
    $html_body = <<<HTML
    <html>
      <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0154a0 0%, #0891b2 100%); color: white; padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">Thank You for Your Interest! 🎉</h1>
            <p style="margin: 0.5rem 0 0 0; opacity: 0.95;">We're preparing your personalized transformation plan</p>
          </div>
          
          <div style="background: #f8fafc; padding: 2rem; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #0154a0; margin-bottom: 1rem;">Hi {$lead['name']},</h2>
            
            <p>Thank you for completing your assessment! We're excited to help {$lead['company']} transform operations in the <strong>{$lead['industry']}</strong> sector.</p>
            
            <p>Based on your input regarding <strong>{$lead['challenge']}</strong>, our team is creating a personalized plan that includes:</p>
            
            <ul style="color: #666;">
              <li>✓ Industry-specific AI solutions tailored to your challenges</li>
              <li>✓ Implementation timeline and quick wins</li>
              <li>✓ Expected ROI and efficiency improvements</li>
              <li>✓ Next steps for your transformation journey</li>
            </ul>
            
            <div style="background: #e0f7ff; border-left: 4px solid #0891b2; padding: 1.5rem; margin: 1.5rem 0; border-radius: 4px;">
              <strong style="color: #0154a0;">What's Next?</strong>
              <p style="margin-top: 0.5rem; margin-bottom: 0;">You'll receive your personalized plan within 24-48 hours. Our team will also reach out to schedule an initial consultation call.</p>
            </div>
            
            <p style="margin-top: 2rem;">If you have any questions or want to discuss sooner, feel free to reach out:</p>
            
            <p>
              📞 <a href="tel:+97333185642" style="color: #0891b2; text-decoration: none;">+973-33185642</a><br>
              📧 <a href="mailto:enquiry@haiba.co" style="color: #0891b2; text-decoration: none;">enquiry@haiba.co</a>
            </p>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 2rem 0;">
            
            <p style="font-size: 0.9rem; color: #999;">
              This is an automated confirmation. Our team is now reviewing your assessment and will follow up shortly.<br>
              <a href="https://haiba.co/solutions.html" style="color: #0891b2; text-decoration: none;">Browse our solutions</a> in the meantime.
            </p>
          </div>
        </div>
      </body>
    </html>
    HTML;
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Haiba Enterprises <noreply@haiba.co>\r\n";
    
    mail($to, $subject, $html_body, $headers);
}

/**
 * Track funnel event for analytics
 */
function track_funnel_event($event_name, $identifier) {
    $events_log = __DIR__ . '/funnel_events.log';
    
    $event_data = json_encode([
        'timestamp' => date('Y-m-d H:i:s'),
        'event' => $event_name,
        'identifier' => $identifier,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? ''
    ]);
    
    error_log($event_data . "\n", 3, $events_log);
}

/**
 * Store lead in database (optional - implement based on your DB)
 */
function store_lead_in_db($lead) {
    // Example: Using PDO with MySQL
    /*
    try {
        $db = new PDO('mysql:host=localhost;dbname=haiba', 'user', 'password');
        $stmt = $db->prepare('INSERT INTO leads (name, email, company, industry, challenge, phone, source, captured_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())');
        $stmt->execute([
            $lead['name'],
            $lead['email'],
            $lead['company'],
            $lead['industry'],
            $lead['challenge'],
            $lead['phone'],
            $lead['source']
        ]);
    } catch (PDOException $e) {
        error_log('Database error: ' . $e->getMessage());
    }
    */
}
?>
