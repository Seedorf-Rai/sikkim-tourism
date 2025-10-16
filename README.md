# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Sikkim Tourism - Modular Tour Page System

A production-ready React/TypeScript application for building tour package pages with a modular, reusable component architecture.

## 🎯 Overview

This project provides a complete implementation of the Nathula Sharing Tour page from [sikkimdiaries.com](https://sikkimdiaries.com/sikkim_and_north_bengal_tour_package/nathula-sharing-tour-1d/), built with modular, scalable components that can be reused for any tour package.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

## 📚 Documentation

This project includes comprehensive documentation:

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Start here! Quick overview and reference guide
- **[COMPONENT_README.md](./COMPONENT_README.md)** - Detailed component documentation and features
- **[COMPONENT_USAGE.md](./COMPONENT_USAGE.md)** - Complete usage guide with examples
- **[SCALING_EXAMPLE.md](./SCALING_EXAMPLE.md)** - Examples for scaling to multiple tours

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Card)
│   └── tour/            # Tour-specific components (Hero, TourInfo, etc.)
├── data/                # Mock tour data
├── types/               # TypeScript interfaces
├── App.tsx              # Main app component
└── index.css            # Global styles
```

## 🎨 Components

### Common Components

- **Button** - Customizable button with variants and sizes
- **Card** - Container component with optional title

### Tour Components

- **Hero** - Full-width banner with title and CTA
- **TourInfo** - Grid showing price, duration, type, rating
- **Description** - Tour description with lists
- **Itinerary** - Day-by-day activities
- **Amenities** - Included/excluded amenities checklist
- **FAQAccordion** - Expandable FAQ section
- **Reviews** - Guest reviews with star ratings
- **NathulaTouren** - Main tour page component

## ✨ Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ TypeScript with full type safety
✅ Modular, reusable components
✅ Smooth animations and transitions
✅ Accessible (ARIA labels, semantic HTML)
✅ SEO-friendly structure
✅ No external UI frameworks (pure React & CSS)
✅ Well-documented code
✅ Easy to scale to multiple tours
✅ Production-ready

## 🎯 How to Add a New Tour

1. Create `src/data/newTourData.ts` with tour data
2. Create `src/components/tour/NewTour.tsx` component
3. Import in `App.tsx`

See [SCALING_EXAMPLE.md](./SCALING_EXAMPLE.md) for detailed examples.

## 🔗 Data Structure

All tours follow this TypeScript interface:

```typescript
interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  type: "Group Tour" | "Private Tour" | "Sharing Tour";
  rating: number;
  reviewCount: number;
  itinerary: TourItinerary[];
  amenities: Amenity[];
  faqs: FAQ[];
  locations: TourLocation[];
  reviews: Review[];
  inclusions: string[];
  exclusions: string[];
  requirements?: string[];
}
```

## 🎨 Customization

### Change Colors

Edit component CSS files and update color values:

```css
background-color: #007bff; /* Change to your color */
```

### Update Tour Information

Edit `src/data/nathulaToursData.ts` to modify tour content.

### Add More FAQs

Simply add to the `faqs` array in tour data:

```typescript
{
  id: 'faq-new',
  question: 'Your question?',
  answer: 'Your answer...'
}
```

## 🛠️ Technologies

- React 18
- TypeScript
- Vite (build tool)
- CSS3 (Grid, Flexbox, Animations)
- Tailwind CSS (optional)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint: 768px (mobile to tablet)
- Optimized for all screen sizes
- Touch-friendly on mobile devices

## 🔄 Integration

Ready to integrate with:

- Backend APIs
- Booking system
- Payment gateway (Stripe, Razorpay, etc.)
- Email service
- WhatsApp API
- Analytics

## 📊 Current Features

- Tour information display
- Day-by-day itinerary
- Amenities checklist
- 13+ FAQs with expandable accordion
- Guest reviews and ratings
- Booking CTA buttons
- WhatsApp contact integration
- Footer with contact info

## 🚀 Next Steps

1. Read [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
2. Explore component structure in `src/components/`
3. Review example data in `src/data/nathulaToursData.ts`
4. Create a new tour page following examples
5. Customize styling and colors
6. Integrate with your backend

## 📄 License

MIT License - Free to use and modify

## 📞 Support

For detailed documentation and examples, see:

- Component usage: [COMPONENT_USAGE.md](./COMPONENT_USAGE.md)
- Multiple tours example: [SCALING_EXAMPLE.md](./SCALING_EXAMPLE.md)

---

**Status**: ✅ Production Ready
**Version**: 1.0.0
**Last Updated**: October 2025

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
