# SastaElectronics Setup Guide

## Email Notifications Setup (Order Alerts)

Jab koi customer order place karega, to aapki email pe notification jayegi. Iske liye EmailJS use kar rahe hain.

### Step 1: EmailJS Account Banayein
1. https://www.emailjs.com/ pe jayein
2. "Sign Up for Free" pe click karein
3. Free plan mein 200 emails/month milte hain

### Step 2: Email Service Add Karein
1. Dashboard mein "Email Services" pe click karein
2. "Add New Service" pe click karein
3. Gmail/Outlook/Yahoo choose karein
4. Apna email connect karein
5. Service ID note karein (jaise "service_abc123")

### Step 3: Email Template Banayein
1. "Email Templates" pe click karein
2. "Create New Template" pe click karein
3. Template mein ye variables use karein:

**Subject:**
```
New Order #{{order_id}} from SastaElectronics
```

**Content:**
```
New Order Received!

Order ID: {{order_id}}
Customer: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Address: {{address}}

Items:
{{items}}

Subtotal: {{subtotal}}
Shipping: {{shipping_cost}}
Total: {{total}}
Payment Method: {{payment}}

---
SastaElectronics Order System
```

4. "To Email" field mein apna email daalein
5. Template ID note karein (jaise "template_xyz789")

### Step 4: Public Key Copy Karein
1. "Account" > "General" mein jayein
2. "Public Key" copy karein

### Step 5: Config File Update Karein
`js/email-config.js` file kholein aur ye values daalein:

```javascript
const EMAILJS_PUBLIC_KEY = 'aapki_public_key_yahan';
const EMAILJS_SERVICE_ID = 'aapki_service_id_yahan';
const EMAILJS_TEMPLATE_ID = 'aapki_template_id_yahan';
const STORE_OWNER_EMAIL = 'aapki_email@example.com';
```

### Step 6: Test Karein
1. Website pe koi product cart mein daalein
2. Checkout karein with test details
3. Order place karein
4. Aapki email pe notification aajayegi!

---

## Supabase Setup (Already Connected)

Agar Supabase already connected hai, to koi action zarurat nahi. Bas ensure karein ke:
- Products table mein data hai
- Orders table automatically create ho rahi hai

---

## Theme Colors

Light Premium Theme:
- Primary (Mustard Gold): #C8982E
- Secondary (Dark Navy): #1E293B
- Accent (Green): #0F9D58
- Background: #FDFBF7 (Warm White)
- Cards: #FFFFFF (Pure White)

Agar colors change karne hain to `css/styles.css` mein :root variables edit karein.

---

## File Structure

```
SastaElectronics/
├── index.html          (Homepage)
├── shop.html           (Shop with filters)
├── categories.html     (All categories)
├── product.html        (Product details)
├── cart.html           (Shopping cart)
├── checkout.html       (Checkout + email notification)
├── orders.html         (Order tracking)
├── wishlist.html       (Wishlist)
├── login.html          (Login)
├── signup.html         (Signup)
├── dashboard.html      (User dashboard)
├── profile.html        (User profile)
├── about.html          (About us)
├── contact.html        (Contact form)
├── faq.html            (FAQ)
├── privacy.html        (Privacy policy)
├── terms.html          (Terms & conditions)
├── 404.html            (404 page)
├── css/                (Stylesheets)
├── js/                 (JavaScript modules)
├── assets/             (Logo, favicon)
└── SETUP_GUIDE.md      (This file)
```

---

## Support

Koi issue ho to:
- Email: info@sastaelectronics.pk
- Phone: +92 300 1234567
