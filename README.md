# Personal Portfolio - Next.js 14

A modern, responsive personal portfolio website built with Next.js 14, React 18, TypeScript, and TailwindCSS. Features a dark theme with custom color palette and smooth tab navigation.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio-site/
├── app/
│   ├── globals.css          # Global styles, animations, fonts
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage with tab management
├── components/
│   ├── Hero.tsx             # Hero section with avatar
│   ├── TabNav.tsx           # Tab navigation component
│   ├── Footer.tsx           # Footer component
│   ├── ProjectCard.tsx      # Reusable project card
│   └── tabs/
│       ├── ResumeTab.tsx    # Resume/CV content
│       ├── AcademicProjectsTab.tsx
│       ├── LiveProjectsTab.tsx
│       └── PortfolioShowcaseTab.tsx
├── data/
│   ├── site-config.json     # Site metadata
│   ├── academic-projects.json
│   ├── live-projects.json
│   └── portfolio-showcase.json
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Design System

### Color Palette (Palette B)
- **Primary Dark**: #1B3C53
- **Primary Main**: #234C6A
- **Primary Light**: #456882
- **Accent**: #D2C1B6
- **White**: #FFFFFF

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

## 📝 Customization

### Update Site Info
Edit `data/site-config.json` to change name, email, and social links.

### Update Content
- Resume: `components/tabs/ResumeTab.tsx`
- Academic Projects: `data/academic-projects.json`
- Live Projects: `data/live-projects.json`
- Portfolio Showcase: `data/portfolio-showcase.json`

### Modify Colors
Edit `tailwind.config.ts` theme colors section.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

- **Next.js** 14.1.0
- **React** 18.3.1
- **TypeScript** 5.3.3
- **TailwindCSS** 3.4.1

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Vercel auto-deploys on push

### Deploy Manually
```bash
npm run build
npm start
```

## 📞 Contact

For inquiries, reach out via the contact information in the footer or social links.

## 📄 License

This project is open source and available under the MIT License.
