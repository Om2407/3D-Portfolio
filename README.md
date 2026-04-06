# 🚀 Om Gupta — Portfolio

A modern, interactive developer portfolio built with **Next.js 14**, **Three.js**, and **Tailwind CSS** — featuring 3D animations, smooth transitions, and a fully functional contact form.

🌐 **Live:** [om-gupta-portfolio.vercel.app](https://om-gupta-portfolio.vercel.app)

---

## ✨ Features

- 🎨 **3D Interactive Elements** — Three.js powered Earth canvas and particle animations
- 💌 **Contact Form** — EmailJS integration with real-time toast notifications
- 📱 **Fully Responsive** — Mobile-first design, works on all screen sizes
- ⚡ **Performance Optimized** — Next.js App Router with lazy loading & code splitting
- 🌙 **Dark Theme** — Sleek dark UI with purple gradient accents
- 🔗 **Social Links** — GitHub, LinkedIn, and Resume directly in navbar
- 🎭 **Smooth Animations** — Framer Motion powered transitions throughout

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| 3D Graphics | Three.js |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Email | EmailJS |
| Icons | React Icons |
| Notifications | React Hot Toast |
| Language | JavaScript (JSX) |

---

## 📁 Project Structure
Portfolio/
├── public/
│   ├── rocket.png
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   └── page.js
│   ├── assets/
│   ├── components/
│   │   ├── canvas/
│   │   ├── hoc/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── constants.js
│   ├── styles/
│   │   └── index.js
│   └── utils/
│       └── motion.js
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.js
└── package.json

---

## 🚀 Getting Started
```bash
git clone https://github.com/Om2407/Portfolio.git
cd Portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔑 Environment Variables

Create `.env.local` in root:
```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ Never commit `.env.local` to GitHub — already in `.gitignore`

---

## 📬 EmailJS Template Variables

| Variable | Description |
|---|---|
| `{{from_name}}` | Sender's name |
| `{{from_email}}` | Sender's email |
| `{{to_name}}` | Om Gupta |
| `{{to_email}}` | Your email |
| `{{message}}` | Message content |
| `{{time}}` | Submission timestamp (IST) |

---

## 🎨 Customization

All content managed from `src/constants/constants.js`

| What | Variable |
|---|---|
| Name | `initialLetterIcon`, `remainingLetters` |
| Nav links | `navLinks` |
| Social links | `socialLinks` |
| Skills | `technologies` |
| Projects | `projects` |
| Experience | `experiences` |

---

## 🌐 Deployment
```bash
npm install -g vercel
vercel
```

Add all `NEXT_PUBLIC_` variables in Vercel Dashboard → Settings → Environment Variables

---

## 📊 Projects

| Project | Tech | Live |
|---|---|---|
| AI-Powered LMS | React, Node.js, MongoDB, Gemini AI | [Live](https://ai-lms-website-omfr.onrender.com/) |
| AI Website Generator | React, TypeScript, Three.js, Gemini API | [Live](https://ai-website-builder-1yj3.onrender.com) |
| Remote Interview Platform | React, Node.js, Stream, Clerk | [Live](https://interview-frontend-r67t.onrender.com) |
| Golf Charity Platform | React, Node.js, MongoDB, Razorpay | [Live](https://digitalheroes-omega.vercel.app/) |

---

## 🤝 Connect

<p align="left">
  <a href="https://github.com/Om2407"><img src="https://img.shields.io/badge/GitHub-Om2407-181717?style=for-the-badge&logo=github" /></a>
  <a href="https://www.linkedin.com/in/om-gupta-2407/"><img src="https://img.shields.io/badge/LinkedIn-om--gupta--2407-0A66C2?style=for-the-badge&logo=linkedin" /></a>
  <a href="mailto:guptaom203@gmail.com"><img src="https://img.shields.io/badge/Email-guptaom203@gmail.com-EA4335?style=for-the-badge&logo=gmail" /></a>
</p>

---

## 📄 License

MIT License — feel free to use this as a template.

---

<p align="center">Made with ❤️ by <strong>Om Gupta</strong><br/>⭐ Star this repo if you found it helpful!</p>