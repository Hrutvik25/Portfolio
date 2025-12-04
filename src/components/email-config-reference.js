/**
 * EmailJS Configuration Reference
 * 
 * QUICK SETUP CHECKLIST:
 * 
 * □ 1. Sign up at https://www.emailjs.com/
 * □ 2. Add Email Service (Gmail/Outlook/etc.) and get Service ID
 * □ 3. Create Template: template_p218hue (notification to you)
 * □ 4. Create Template: template_g8wia26 (auto-reply to sender)
 * □ 5. Get your Public Key from Account settings
 * □ 6. Update the values below in Contact.jsx
 * 
 * PASTE YOUR CREDENTIALS HERE:
 */

// 📝 Replace these with your actual EmailJS credentials:
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_a0j4prl',      // Example: 'service_abc123'
  PUBLIC_KEY: 'Q-kMa7snFxZfaVYR7',      // Example: 'xyzABC123_your_key'
  TEMPLATE_TO_ME: 'template_p218hue', // ✅ Already set
  TEMPLATE_AUTO_REPLY: 'template_g8wia26' // ✅ Already set
};

/**
 * TEMPLATE VARIABLES MAPPING:
 * 
 * Template 1 (Notification to you - template_p218hue):
 * -------------------------------------------------------
 * {{name}}     → formData.name     → Sender's name
 * {{email}}    → formData.email    → Sender's email
 * {{subject}}  → formData.subject  → Message subject
 * {{message}}  → formData.message  → Message content
 * 
 * To Email: hrutvikwayase@gmail.com
 * Reply To: {{email}} (sender's email)
 * 
 * 
 * Template 2 (Auto-reply - template_g8wia26):
 * -------------------------------------------------------
 * {{to_name}}  → formData.name     → Recipient's name
 * {{to_email}} → formData.email    → Recipient's email
 * 
 * To Email: {{to_email}} (sender's email)
 * Reply To: hrutvikwayase@gmail.com
 * 
 * 
 * HOW IT WORKS:
 * 1. User fills form → submits
 * 2. Email #1 sent to YOU (template_p218hue)
 * 3. Email #2 sent to SENDER as auto-reply (template_g8wia26)
 * 4. Success message shown to user
 * 
 * 
 * TESTING:
 * - Use a real email address in the form
 * - Check both your inbox and the sender's inbox
 * - Check EmailJS dashboard for delivery status
 */
