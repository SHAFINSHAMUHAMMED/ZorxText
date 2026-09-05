# ZORX — Digital Marketing Agency

A modern, premium one-page digital marketing agency website created for **ZORX — Digital Marketing Agency, Dubai**.

The project focuses heavily on smooth scrolling, scroll-triggered animations, interactive elements, responsive design, and a clean agency-style user experience.

## ✨ Features

- Premium modern digital-agency UI
- Fully responsive design
- Smooth one-page navigation
- Creative page-loading animation
- Scroll-triggered reveal animations
- Text reveal animations
- Image reveal animations
- Parallax scrolling effects
- Animated service cards
- Portfolio hover animations
- Scroll progress indicator
- Mobile navigation menu
- Interactive CTA sections
- Reusable React components
- Tailwind CSS styling
- Framer Motion animations
- Performance-conscious image loading

## 🧩 Sections

### 1. Hero

- ZORX branding
- Dubai digital marketing positioning
- Primary CTA
- Secondary CTA
- Animated statistics
- Background image with parallax effect

### 2. About ZORX

- Agency introduction
- Dubai-based positioning
- Animated image reveal
- Floating information badge
- Scroll-based parallax effect

### 3. Services

Services showcased:

- Digital Marketing
- Social Media Marketing
- Branding & Graphic Design
- Website Development
- SEO
- Video Production

Each service card includes animated hover interactions.

### 4. Why ZORX

Highlights:

- Creative Approach
- Results-Driven Marketing
- Modern Technology
- Experienced Team

Includes scroll-triggered animations and an animated progress indicator.

### 5. Portfolio

Animated project cards featuring:

- Branding
- Social Media
- Digital Marketing
- Video Production
- Web Development
- SEO

Portfolio cards include image hover scaling, overlays, and interactive transitions.

### 6. CTA

A dedicated conversion section:

> Let's Grow Your Brand

Includes a primary project CTA and contact email.

### 7. Footer

Includes:

- ZORX branding
- Dubai location
- Contact information
- Social links
- Copyright information

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript / JSX**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **clsx**
- **tailwind-merge**
- **Yarn**

## 📁 Project Structure

```text
zorxAnimation-website/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollProgress.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── WhyZorx.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── CTA.jsx
│   │   │   ├── Marquee.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── ScrollReveal.jsx
│   │
│   ├── utils/
│   │   └── cn.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── README.md
└── vite.config.js
````

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js 20+
* Yarn

Check your versions:

```bash
node -v
yarn -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/zorxAnimation-website.git
```

Move into the project:

```bash
cd zorxAnimation-website
```

Install dependencies:

```bash
yarn install
```

### Run Development Server

```bash
yarn dev
```

The application will be available at:

```text
http://localhost:5173
```

### Build for Production

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

---

## 🎨 Animation System

The project uses **Framer Motion** for interactive animations.

Reusable animation components include:

### ScrollReveal

Triggers animations when an element enters the viewport.

Supported directions:

* Up
* Down
* Left
* Right
* Scale

### TextReveal

Animates individual words when text enters the viewport.

### ImageReveal

Creates a layered image reveal effect using:

* Scale animation
* Overlay transition
* Scroll detection

### StaggerContainer

Controls staggered animations for groups of elements such as service cards and portfolio items.

---

## 📱 Responsive Design

The website is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

Tailwind responsive breakpoints are used throughout the application to adapt layouts, typography, spacing, navigation, and components.

---

## ⚡ Performance

Performance considerations include:

* Lazy loading portfolio images
* Optimized animation properties
* Reusable animation components
* Minimal JavaScript dependencies
* CSS-based visual effects where possible
* Responsive image sizing
* Avoiding unnecessary component re-renders

---

## 🎯 Test Objective

This project was developed as a **Web Developer Test Task for ZORX — Digital Marketing Agency, Dubai**.

The primary focus was:

* Frontend development
* UI/UX
* Scroll animations
* React component architecture
* Responsive design
* Interaction design
* Performance
* Attention to visual detail

---

## 📸 Preview

Add screenshots or a demo GIF here after deploying the project.

```md
![ZORX Website Preview](./public/preview.png)
```

## 🌐 Live Demo

**Live Website:**
Add your deployed URL here.

```text
https://your-live-demo-url.com
```

## 📦 Deployment

The project can be deployed using platforms such as:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages

Build command:

```bash
yarn build
```

Output directory:

```text
dist
```

---

## 👨‍💻 Developer

Developed as part of the ZORX Web Developer Test Task.

**Developer:** Shafin K

---

## 📄 License

This project was created for evaluation purposes as part of a web development test task.
