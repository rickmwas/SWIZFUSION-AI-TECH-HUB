# SwizFusion AI Tech Hub - MVP Development Plan

## Project Overview
Building a full-stack Next.js startup website for SwizFusion AI Tech Hub - an AI and robotics company with OpenAI clarity, Apple simplicity, and Tesla's bold tech vibe.

## Tech Stack
- Next.js 14 with App Router + TypeScript (using React template as base)
- Tailwind CSS with dark/light theme toggle
- Framer Motion for animations
- Responsive design, mobile-first
- SEO optimized

## File Structure & Implementation Plan

### 1. Core Setup Files
- `index.html` - Update title, meta tags, favicon for SwizFusion branding
- `src/App.tsx` - Main app component with routing
- `src/main.tsx` - Entry point
- `src/index.css` - Global styles with dark/light theme variables

### 2. Component Files (src/components/)
- `Navbar.tsx` - Navigation with theme toggle, smooth scroll links
- `Hero.tsx` - Main landing section with CTA and background
- `About.tsx` - Founder story and company mission
- `Services.tsx` - AI/Robotics services with animated cards
- `Products.tsx` - Product showcase grid
- `Pricing.tsx` - 3-tier pricing plans
- `Testimonials.tsx` - Client testimonials carousel
- `FAQ.tsx` - Expandable accordion FAQ section
- `ContactForm.tsx` - Contact form with validation
- `Footer.tsx` - Company footer with links

### 3. Main Page
- `src/pages/Index.tsx` - Homepage combining all sections

## MVP Features Priority
1. **Hero Section** - Compelling tagline, CTA button, background gradient
2. **About Section** - Founder story, global tech background
3. **Services Section** - Core AI/Robotics offerings
4. **Products Section** - Key product highlights
5. **Pricing Section** - Simple 3-tier structure
6. **Contact Section** - Basic contact form
7. **Navigation** - Smooth scroll, theme toggle
8. **Footer** - Essential links and info

## Design Principles
- Dark theme by default with light mode toggle
- Smooth animations with Framer Motion
- Mobile-first responsive design
- Clean, minimalist layout
- Bold gradients and modern typography
- Consistent spacing using Tailwind scale

## Dependencies to Add
- framer-motion (for animations)
- lucide-react (for icons)
- react-hook-form (for form handling)

## Implementation Notes
- Start with core layout and navigation
- Build sections incrementally
- Focus on functionality over perfection
- Ensure responsive design at each step
- Test theme toggle functionality