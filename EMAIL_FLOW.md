# 📧 Email Flow Diagram

## How the Contact Form Email System Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    VISITOR FILLS CONTACT FORM                   │
│                                                                 │
│  Name:     John Doe                                            │
│  Email:    john@example.com                                    │
│  Subject:  Project Inquiry                                     │
│  Message:  Hi, I'd like to discuss...                          │
│                                                                 │
│                     [Send Message] ←── Click                   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
         ┌───────────────────────────────────────┐
         │   Form Submission via EmailJS         │
         │   (handleSubmit function triggers)    │
         └───────────┬───────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌──────────────────┐      ┌──────────────────┐
│   EMAIL #1       │      │   EMAIL #2       │
│   (To You)       │      │   (Auto-Reply)   │
└──────────────────┘      └──────────────────┘
        │                         │
        ▼                         ▼
┌──────────────────────────────────────────────┐
│ Template: template_p218hue                   │
│ To: hrutvikwayase@gmail.com                  │
│ Subject: New Contact Message from John Doe   │
│                                              │
│ Content:                                     │
│ ┌────────────────────────────────────┐      │
│ │ 👤 John Doe                        │      │
│ │    john@example.com                │      │
│ │                                    │      │
│ │ Subject: Project Inquiry           │      │
│ │ Hi, I'd like to discuss...         │      │
│ └────────────────────────────────────┘      │
│                                              │
│ 📩 This message was received via your        │
│    portfolio contact form.                   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ Template: template_g8wia26                   │
│ To: john@example.com                         │
│ Subject: Thank You for Contacting Hrutvik    │
│                                              │
│ Content:                                     │
│ Hi John Doe,                                 │
│                                              │
│ Thank you for reaching out to me.            │
│ I've received your message and appreciate    │
│ you taking the time to get in touch.         │
│                                              │
│ I will review your message and respond       │
│ to you as soon as possible.                  │
│                                              │
│ Looking forward to connecting with you.      │
│                                              │
│ Best regards,                                │
│ Hrutvik Wayase                               │
│ hrutvikwayase@gmail.com                      │
│ LinkedIn Profile                             │
└──────────────────────────────────────────────┘
        │                         │
        ▼                         ▼
┌────────────────┐      ┌────────────────┐
│ YOUR INBOX     │      │ SENDER'S INBOX │
│ ✅ Notification│      │ ✅ Auto-reply  │
└────────────────┘      └────────────────┘
                 │
                 ▼
         ┌───────────────────┐
         │  Success Message  │
         │  shown to visitor │
         │                   │
         │  ✅ "Thank you    │
         │  for your         │
         │  message!"        │
         └───────────────────┘
```

## 🔄 Complete Flow Summary

1. **Visitor submits form** with their details
2. **EmailJS processes** two separate email sends:
   - **Email to you** (template_p218hue) - Notification of new message
   - **Email to sender** (template_g8wia26) - Auto-acknowledgment
3. **Both emails delivered** simultaneously
4. **Success message** appears on screen
5. **Form resets** for next submission

## 📊 What Each Person Receives

### You Receive:
✉️ **Subject:** New Contact Message from [Name]  
📧 **From:** Portfolio Contact Form  
💬 **Contains:** Full message details with sender's contact info  
↩️ **Reply To:** Sender's email (click reply to respond directly)

### Sender Receives:
✉️ **Subject:** Thank You for Contacting Hrutvik Wayase  
📧 **From:** Hrutvik Wayase  
💬 **Contains:** Professional auto-acknowledgment  
↩️ **Reply To:** Your email (hrutvikwayase@gmail.com)

## ⚙️ Technical Details

### Variables Passed to Template #1 (template_p218hue):
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  subject: "Project Inquiry",
  message: "Hi, I'd like to discuss..."
}
```

### Variables Passed to Template #2 (template_g8wia26):
```javascript
{
  to_name: "John Doe",
  to_email: "john@example.com",
  reply_to: "john@example.com"
}
```

## 🎯 Benefits

✅ **Instant notification** when someone contacts you  
✅ **Professional auto-reply** acknowledges the sender  
✅ **No backend required** - fully client-side with EmailJS  
✅ **Free tier** supports 200 emails/month  
✅ **Reliable delivery** through EmailJS infrastructure  
✅ **Easy to reply** - just hit reply on the notification email

## 🔐 Security & Privacy

- ✅ No sensitive data stored in frontend
- ✅ Public key is safe to expose
- ✅ All emails sent through EmailJS secure servers
- ✅ GDPR compliant service
