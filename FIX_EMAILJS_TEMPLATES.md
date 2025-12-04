# 🔧 Fix Your EmailJS Templates - Step by Step

## ⚠️ Problem
Your templates are showing variable names (like `name`, `email`, `to_name`) instead of actual values.

## ✅ Solution
You need to wrap variables with `{{` and `}}` in your EmailJS template editor.

---

## 📧 Template 1: Notification to You (template_p218hue)

### Step 1: Login to EmailJS Dashboard
Go to: https://dashboard.emailjs.com/admin/templates

### Step 2: Click on template `template_p218hue` to edit it

### Step 3: Update the Template Content

**IMPORTANT:** In the EmailJS template editor, paste this EXACT content:

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

### Step 4: Configure Template Settings

**Template Settings:**
- **Template Name:** Contact Form Notification
- **Template ID:** `template_p218hue` (don't change this)

**Email Settings in the right panel:**

**Subject:**
```
New Contact Message from {{name}}
```

**To Email:**
```
hrutvikwayase@gmail.com
```

**From Name:**
```
Portfolio Contact Form
```

**Reply To:**
```
{{email}}
```

**Note:** The `{{email}}` in Reply To means when you click reply, it will reply to the person who sent the message.

### Step 5: Save the Template

Click **Save** button.

---

## 📧 Template 2: Auto-Reply to Sender (template_g8wia26)

### Step 1: Click on template `template_g8wia26` to edit it

### Step 2: Update the Template Content

**IMPORTANT:** In the EmailJS template editor, paste this EXACT content:

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

### Step 3: Configure Template Settings

**Template Settings:**
- **Template Name:** Auto Reply to Contact
- **Template ID:** `template_g8wia26` (don't change this)

**Email Settings in the right panel:**

**Subject:**
```
Thank You for Contacting Hrutvik Wayase
```

**To Email:**
```
{{to_email}}
```

**From Name:**
```
Hrutvik Wayase
```

**Reply To:**
```
hrutvikwayase@gmail.com
```

**Note:** The `{{to_email}}` in To Email means the auto-reply will be sent to the person who filled out the form.

### Step 4: Save the Template

Click **Save** button.

---

## 🔍 Key Differences (What You Changed)

### Template 1 Changes:
❌ **BEFORE (Not working):**
```html
<strong>name</strong>
<div>email</div>
<strong>Subject:</strong> subject
<p>message</p>
```

✅ **AFTER (Working):**
```html
<strong>{{name}}</strong>
<div>{{email}}</div>
<strong>Subject:</strong> {{subject}}
<p>{{message}}</p>
```

### Template 2 Changes:
❌ **BEFORE (Not working):**
```html
<p>Hi to_name,</p>
```

✅ **AFTER (Working):**
```html
<p>Hi {{to_name}},</p>
```

---

## 🧪 Test Your Templates

### Method 1: Test in EmailJS Dashboard
1. In the template editor, click **Test it** button
2. Fill in sample values:
   - `name`: John Doe
   - `email`: john@example.com
   - `subject`: Test Subject
   - `message`: Test message
   - `to_name`: John Doe
   - `to_email`: your-test-email@gmail.com
3. Click **Send Test Email**
4. Check if variables are replaced correctly

### Method 2: Test from Your Website
1. Go to your portfolio website
2. Navigate to Contact page
3. Fill out the form with real information
4. Click Send Message
5. Check both inboxes:
   - ✉️ Your inbox (hrutvikwayase@gmail.com)
   - ✉️ Sender's inbox (the email you used in form)

---

## ✅ Verification Checklist

After updating templates, verify:

- [ ] Template 1 (`template_p218hue`):
  - [ ] Variables wrapped with `{{` and `}}`
  - [ ] To Email: `hrutvikwayase@gmail.com`
  - [ ] Reply To: `{{email}}`
  - [ ] Subject includes `{{name}}`

- [ ] Template 2 (`template_g8wia26`):
  - [ ] `{{to_name}}` is wrapped correctly
  - [ ] To Email: `{{to_email}}`
  - [ ] Reply To: `hrutvikwayase@gmail.com`

- [ ] Test both templates send successfully
- [ ] Variables show actual values (not variable names)
- [ ] Emails arrive in correct inboxes

---

## 📊 Variable Mapping Reference

### Template 1 receives these variables from your website:
```javascript
{
  name: "John Doe",        // User's name from form
  email: "john@example.com", // User's email from form
  subject: "Project Inquiry", // Subject from form
  message: "Hello, I want to..."  // Message from form
}
```

### Template 2 receives these variables from your website:
```javascript
{
  to_name: "John Doe",     // User's name from form
  to_email: "john@example.com", // User's email (recipient)
  reply_to: "john@example.com"  // Same as to_email
}
```

---

## 🆘 Still Having Issues?

If variables still show as plain text:

1. **Double-check syntax:** Variables MUST be wrapped with `{{` and `}}`
2. **Check spelling:** Variable names are case-sensitive
3. **Clear cache:** In EmailJS dashboard, save and refresh
4. **Test mode:** Use EmailJS test feature to verify
5. **Check console:** Open browser DevTools → Console for errors

---

## 📞 Need More Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

**Once you update both templates with the correct `{{variable}}` syntax, everything will work perfectly!** 🎉
