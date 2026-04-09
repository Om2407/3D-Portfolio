# Om Gupta — 3D Portfolio

A modern, interactive 3D portfolio website built with Next.js, Three.js, and Framer Motion.

🌐 **Live:** [omgupta-portfolio-six.vercel.app](https://omgupta-portfolio-six.vercel.app)
📁 **Repo:** [github.com/Om2407/3D-Portfolio](https://github.com/Om2407/3D-Portfolio)

---

## Tech Stack

- **Next.js 16** — React framework
- **Three.js + React Three Fiber** — 3D graphics
- **Framer Motion** — Animations
- **Tailwind CSS** — Styling
- **EmailJS** — Contact form
- **GSAP** — Advanced animations

---

## Features

- 3D Earth canvas on contact section
- Animated hero section with typewriter effect
- Project showcase with live + GitHub links
- Responsive navbar with GitHub, LinkedIn & Resume
- Smooth scroll with section detection
- Contact form with email integration

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Om2407/3D-Portfolio.git

# Go to project directory
cd 3D-Portfolio/Portfolio

# Install dependencies
npm install

# Run locally
npm run dev
```

## Environment Variables

Create a `.env.local` file in the `Portfolio/` directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Project Structure


Portfolio/
├── src/
│   ├── app/          # Next.js app router
│   ├── assets/       # Images and icons
│   ├── components/   # React components
│   ├── constants/    # Data and constants
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
├── public/
├── .env.local        # Environment variables (not committed)
└── package.json




Made with ❤️ by [Om Gupta](https://github.com/Om2407)