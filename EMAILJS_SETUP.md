# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to send emails from your contact form.

## 📧 EmailJS Configuration

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Templates

#### Template 1: Notification to You (template_p218hue)
1. Go to **Email Templates** → **Create New Template**
2. Set Template ID: `template_p218hue`
3. Use this HTML content:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50;">
  <p><strong>Subject:</strong> New Contact Message Received</p>

  <div style="margin-top: 20px; padding: 15px 0; border-top: 1px dashed #ccc; border-bottom: 1px dashed #ccc;">
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div style="padding: 6px 10px; margin: 0 10px; background-color: #e6f2ff; border-radius: 5px; font-size: 26px;">👤</div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px"><strong>{{name}}</strong></div>
          <div style="color: #7f8c8d; font-size: 13px">{{email}}</div>
          <p style="font-size: 16px; color: #34495e;"><strong>Subject:</strong> {{subject}}</p>
          <p style="font-size: 16px;">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>

  <p style="margin-top: 30px;">
    📩 This message was received via your portfolio contact form.
  </p>
</div>
```

**Template Settings:**
- **To Email:** Your email (hrutvikwayase@gmail.com)
- **From Name:** Portfolio Contact Form
- **Subject:** New Contact Message from {{name}}
- **Reply To:** {{email}}

#### Template 2: Auto-Reply to Sender (template_g8wia26)
1. Create another template with ID: `template_g8wia26`
2. Use this HTML content:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50;">
  <p><strong>Subject:</strong> Thank You for Contacting Hrutvik Wayase</p>

  <p>Hi {{to_name}},</p>

  <p>Thank you for reaching out to me. I've received your message and appreciate you taking the time to get in touch.</p>

  <p>I will review your message and respond to you as soon as possible.</p>

  <p>Looking forward to connecting with you.</p>

  <p style="margin-top: 30px;">
    Best regards,<br />
    <strong>Hrutvik Wayase</strong><br />
    <a href="mailto:hrutvikwayase@gmail.com" style="color: #3498db;">hrutvikwayase@gmail.com</a><br />
    <a href="https://www.linkedin.com/in/hrutvik-wayase-1288bb306/" target="_blank" style="color: #3498db;">LinkedIn Profile</a>
  </p>
</div>
```

**Template Settings:**
- **To Email:** {{to_email}}
- **From Name:** Hrutvik Wayase
- **Subject:** Thank You for Contacting Me
- **Reply To:** hrutvikwayase@gmail.com

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123XYZ`)
3. Copy it

### Step 5: Update Your Code
Open `src/components/Contact.jsx` and replace these lines:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

Example:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_PUBLIC_KEY = 'xyzABC123_your_public_key';
```

## ✅ Testing

1. Save all changes
2. Fill out the contact form on your website
3. Click "Send Message"
4. You should receive:
   - A notification email at your address (template_p218hue)
   - The sender receives an auto-reply (template_g8wia26)

## 🔧 Template Variables Used

### Template to You (template_p218hue):
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

### Auto-Reply Template (template_g8wia26):
- `{{to_name}}` - Sender's name
- `{{to_email}}` - Sender's email (set as recipient)

## 📊 Free Tier Limits
- **200 emails/month** on free plan
- Upgrade if you need more

## 🛡️ Security Notes
- Public key is safe to expose in frontend code
- Service ID and Template IDs are also safe
- Never expose your private key

## 🐛 Troubleshooting

### Emails not sending?
1. Check browser console for errors
2. Verify Service ID, Public Key, and Template IDs are correct
3. Ensure email service is connected and active
4. Check EmailJS dashboard for delivery status

### Wrong template variables?
- Make sure variable names in templates match those in the code
- Variables are case-sensitive: `{{to_name}}` ≠ `{{To_Name}}`

## 📞 Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Ready to go!** Once configured, your contact form will automatically send notification emails to you and auto-reply emails to your contacts. 🚀
