# Lehlohonolo Mona - Full-Stack Developer Portfolio

A modern, responsive portfolio website showcasing my expertise as a full-stack developer. Built with Vue 3 and Vite, featuring a clean design and comprehensive sections highlighting my technical skills, architecture knowledge, and professional experience.

## 🚀 Features

- **Responsive Design** – Fully optimized for desktop, tablet, and mobile devices
- **Modern UI** – Built with Tailwind CSS for a sleek, professional appearance
- **Icon System** – Lucide Vue icons for consistent visual communication
- **Performance** – Fast load times with Vite's optimized build system
- **SFC Architecture** – Vue 3 `<script setup>` single-file components for cleaner code
- **Smooth Navigation** – Single-page application with section-based scrolling

## 📋 Sections

- **Hero** – Eye-catching introduction and call-to-action
- **About** – Professional background and personal story
- **Architecture** – System design principles and technical approach
  - API Layer design with REST conventions
  - Database schema and optimization strategies
  - Service architecture patterns
  - Scaling and performance considerations
- **Experience** – Professional work history and accomplishments
- **Skills** – Technical competencies and programming languages
- **Projects** – Portfolio of notable projects and work samples
- **Contact** – Ways to connect and get in touch
- **Footer** – Additional links and social connections

## 🛠️ Tech Stack

- **Frontend Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons**: [Lucide Vue Next](https://lucide.dev/)
- **Language**: JavaScript (ES modules)

## 💻 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lehlohonolomona-fullstack-developer
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The compiled assets will be in the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.vue          # Background and introduction
│   ├── Architecture.vue   # System design and technical approach
│   ├── Contact.vue        # Contact information and forms
│   ├── Experience.vue     # Work experience timeline
│   ├── Footer.vue         # Footer with links and social media
│   ├── Header.vue         # Navigation header
│   ├── Hero.vue           # Landing hero section
│   ├── Projects.vue       # Portfolio projects showcase
│   └── Skills.vue         # Technical skills and expertise
├── assets/
│   └── main.css           # Global styles and utilities
├── App.vue                # Root application component
├── main.js                # Application entry point
└── style.css              # Additional styling
```

## 🎨 Customization

### Colors & Styling

Modify colors and design tokens in:
- `tailwind.config.js` – Theme customization
- `src/style.css` – Global CSS variables
- Component files – Scoped Tailwind classes

### Content Updates

Edit content directly in component files:
- Update text, links, and descriptions in each `.vue` component
- Add new projects to the Projects component
- Update experience entries in the Experience component
- Modify skills and expertise in the Skills component

## 🔗 Links

- **Portfolio**: [Visit Live Site](#)
- **LinkedIn**: [Connect on LinkedIn](https://www.linkedin.com/in/lehlohonolo-mona-74832b18a)
- **Repository**: [View on GitHub](#)

## 📝 License

This project is personal and proprietary. All rights reserved.

## 🤝 Contact

For inquiries, collaborations, or questions, please reach out through the contact section on the portfolio or via LinkedIn.
