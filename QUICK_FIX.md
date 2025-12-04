# ⚡ QUICK FIX - EmailJS Template Variables

## 🚨 The Problem
Your templates show literal text like `name`, `email`, `to_name` instead of actual values.

## ✅ The Solution
Add `{{` before and `}}` after each variable name in your EmailJS templates.

---

## 🔧 Template 1: template_p218hue

### In EmailJS Dashboard, Change This:

**❌ WRONG:**
```html
<strong>name</strong>
<div>email</div>
<p><strong>Subject:</strong> subject</p>
<p>message</p>
```

**✅ CORRECT:**
```html
<strong>{{name}}</strong>
<div>{{email}}</div>
<p><strong>Subject:</strong> {{subject}}</p>
<p>{{message}}</p>
```

---

## 🔧 Template 2: template_g8wia26

### In EmailJS Dashboard, Change This:

**❌ WRONG:**
```html
<p>Hi to_name,</p>
```

**✅ CORRECT:**
```html
<p>Hi {{to_name}},</p>
```

---

## 📋 Template Settings

### Template 1 (template_p218hue) Settings:
```
To Email: hrutvikwayase@gmail.com
From Name: Portfolio Contact Form
Reply To: {{email}}
Subject: New Contact Message from {{name}}
```

### Template 2 (template_g8wia26) Settings:
```
To Email: {{to_email}}
From Name: Hrutvik Wayase
Reply To: hrutvikwayase@gmail.com
Subject: Thank You for Contacting Hrutvik Wayase
```

---

## 🎯 What to Do Right Now

1. **Go to:** https://dashboard.emailjs.com/admin/templates
2. **Click:** template_p218hue
3. **Replace ALL instances:**
   - `name` → `{{name}}`
   - `email` → `{{email}}`
   - `subject` → `{{subject}}`
   - `message` → `{{message}}`
4. **Save** the template
5. **Click:** template_g8wia26
6. **Replace:**
   - `to_name` → `{{to_name}}`
7. **Update "To Email" field to:** `{{to_email}}`
8. **Save** the template
9. **Test** your contact form

---

## ✅ After Fix, You'll See:

**Email to You:**
```
👤 John Doe          ← Real name (not "name")
   john@example.com  ← Real email (not "email")
   
Subject: Project Inquiry  ← Real subject (not "subject")
Hello, I need help...     ← Real message (not "message")
```

**Email to Sender:**
```
Hi John Doe,  ← Real name (not "to_name")

Thank you for reaching out...
```

---

**That's it! Just add `{{` and `}}` around your variables in the EmailJS dashboard.** 🎉
