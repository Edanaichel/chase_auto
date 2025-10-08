# EmailJS Setup Instructions

This project uses EmailJS to handle contact form submissions. Follow these steps to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note down your Service ID

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Template ID:** `template_contact_form`

**Subject:** New Contact Form Submission - Chase Auto Body

**Content:**
```
From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Vehicle: {{vehicle}}
Service Type: {{inquiry_type}}

Message:
{{message}}

---
This message was sent from the Chase Auto Body website contact form.
Reply directly to this email to respond to the customer.
```

## 4. Update Configuration
1. Open `src/api/emailService.js`
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## 5. Get Your Public Key
1. In EmailJS dashboard, go to "Account" > "General"
2. Find your Public Key (User ID)
3. Copy it to the EMAILJS_PUBLIC_KEY variable

## 6. Test the Setup
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check your email to confirm the message was received

## EmailJS Limits (Free Plan)
- 200 emails per month
- Up to 2 email services
- Up to 2 email templates

## Troubleshooting
- Make sure all IDs are correct
- Check that your email service is connected
- Verify template variables match the code
- Check browser console for any errors
