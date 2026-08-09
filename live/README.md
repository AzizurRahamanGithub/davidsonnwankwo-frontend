# Athlete Path - Sports Website & Dashboard

A comprehensive sports platform connecting athletes with recruiters and scouts. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Project Overview

This project consists of two main applications built from the same codebase:

### 1. Marketing Website (Public)
Professional sports website featuring:
- Dynamic landing page with hero section, features, and statistics
- Sports directory showcasing 25+ sports categories
- Athletes showcase page with featured profiles
- Recruiters information and benefits page
- About page with mission, vision, and values
- Fully responsive design (mobile, tablet, desktop)

### 2. Dashboard (Private/Admin)
Feature-rich dashboard for recruiters and administrators:
- Overview page with real-time statistics and activity
- Athletes management with search and filtering
- Analytics dashboard with performance metrics
- Profile management for recruiters
- Comprehensive settings page
- Sidebar navigation and topbar with search

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter (primary), Geist Mono (code)

## Design System

### Colors
- **Primary:** Navy Blue (`oklch(0.35 0.12 250)`)
- **Secondary/Accent:** Orange (`oklch(0.68 0.18 35)`)
- **Background:** Off-white (`oklch(0.99 0 0)`)
- **Neutrals:** Grays and muted tones

### Typography
- **Headings:** Inter (Bold, 700)
- **Body:** Inter (Regular, 400)
- **Code:** Geist Mono

## Project Structure

```
├── app/
│   ├── (website)           # Public marketing website routes
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── sports/         # Sports directory
│   │   ├── athletes/       # Athletes showcase
│   │   └── recruiters/     # Recruiters page
│   ├── dashboard/          # Dashboard routes (private)
│   │   ├── page.tsx        # Dashboard overview
│   │   ├── athletes/       # Athletes management
│   │   ├── analytics/      # Analytics page
│   │   ├── profile/        # Profile management
│   │   └── settings/       # Settings page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── website/            # Website components
│   │   ├── navbar.tsx      # Website navigation
│   │   ├── footer.tsx      # Website footer
│   │   ├── hero.tsx        # Hero section
│   │   ├── features.tsx    # Features grid
│   │   ├── sports-grid.tsx # Sports showcase
│   │   └── cta-section.tsx # Call-to-action
│   ├── dashboard/          # Dashboard components
│   │   ├── sidebar.tsx     # Dashboard sidebar
│   │   ├── topbar.tsx      # Dashboard topbar
│   │   └── stats-card.tsx  # Statistics cards
│   └── ui/                 # Reusable UI components (shadcn)
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets (images)
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd athlete-path
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to:
   - **Website:** [http://localhost:3000](http://localhost:3000)
   - **Dashboard (Requires Login):** [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## API Integration

This project uses a centralized API system. All frontend data is fetched from the `/app/api/` routes which serve as a mock backend.

- **Authentication:** Managed via `app/api/auth/`
- **Players:** Managed via `app/api/players/`
- **Dashboard Data:** Managed via `app/api/dashboard/` (mocked in `lib/api-client.ts`)

To connect your own real backend:
1. Update `NEXT_PUBLIC_API_URL` in your `.env.local` file.
2. The `lib/api-client.ts` is already configured to use this base URL.

## Dashboard Access

The dashboard is accessible only after a successful login. 
- When a user logs in as a **player**, the website's "Login" button automatically changes to a "Dashboard" button.
- The dashboard is located at `/dashboard`.

## Features

### Website Features
- Responsive navbar with mobile menu
- Hero section with statistics and CTAs
- Feature cards highlighting platform benefits
- Sports directory with 12+ sports categories
- Featured athletes showcase with ratings
- Recruiter benefits and platform features
- Comprehensive footer with social links
- SEO-optimized pages

### Dashboard Features
- Real-time statistics and KPIs
- Athletes management with search and filters
- Profile cards with ratings and achievements
- Analytics dashboard with charts
- Monthly engagement tracking
- Top sports by views
- Profile management for recruiters
- Comprehensive settings (notifications, security, billing)
- Sidebar navigation with active states
- Topbar with search and notifications

## Routes

### Public Routes
- `/` - Homepage
- `/about` - About page
- `/sports` - Sports directory
- `/athletes` - Athletes showcase
- `/recruiters` - Recruiters information

### Dashboard Routes (Protected)
- `/dashboard` - Overview
- `/dashboard/athletes` - Athletes management
- `/dashboard/analytics` - Analytics dashboard
- `/dashboard/profile` - Profile management
- `/dashboard/settings` - Account settings

## Customization

### Colors
Edit `app/globals.css` to customize the color palette:
```css
:root {
  --primary: oklch(0.35 0.12 250);     /* Navy Blue */
  --secondary: oklch(0.68 0.18 35);    /* Orange */
  /* ... other colors */
}
```

### Typography
Modify fonts in `app/layout.tsx`:
```tsx
import { Inter, Geist_Mono } from 'next/font/google'
```

### Components
All components are built with shadcn/ui and can be customized in the `components/` directory.

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production
```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` file for environment-specific variables:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## Future Enhancements

- Authentication integration (Supabase/Auth.js)
- Database integration for real athlete data
- Real-time messaging system
- Video highlight uploads
- Advanced search filters
- Performance analytics charts
- Mobile app (React Native)
- Email notifications

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact:
- Email: support@athletepath.com
- Website: https://athletepath.com

---

Built with ❤️ using v0 by Vercel
