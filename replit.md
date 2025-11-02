# Plantology USA - E-commerce Plant Shop

## Overview

Plantology USA is a modern e-commerce web application for selling premium indoor and outdoor plants. Built with React, TypeScript, and Vite, the application provides a complete shopping experience with product browsing, detailed product pages, shopping cart functionality, and informational pages about the company. The site is optimized for deployment to GitHub Pages and includes Google AdSense integration for monetization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for GitHub Pages deployment
- **React Router** for client-side routing with a catch-all 404 handler
- Base path configured as "/" for root directory deployment

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component aliases configured for clean imports (@/components, @/lib, @/hooks)
- Comprehensive UI component set including forms, dialogs, navigation, and data display components

**State Management**
- **React Context API** for global cart state management (CartContext)
- **TanStack Query (React Query)** for server state management and data fetching
- Local storage persistence for shopping cart data

**Design System**
- HSL-based color system with semantic naming (primary, secondary, accent, muted, etc.)
- Custom CSS variables for gradients, shadows, and transitions
- Responsive breakpoints with mobile-first approach
- Dark mode support via next-themes (though primarily configured for light mode)

### Page Structure

**Public Pages**
- **Home (/)** - Hero section, featured products, value propositions
- **Products (/products)** - Complete product catalog grid
- **Collections (/collections)** - Curated plant collections
- **About (/about)** - Company story and values
- **Contact (/contact)** - Contact form and business information
- **Cart (/cart)** - Shopping cart with quantity management
- **Product Detail (/product/:id)** - Individual product pages with detailed information
- **404 (/*)** - Catch-all error page for non-existent routes

### Data Architecture

**Product Data Structure**
- Products defined as TypeScript interfaces with comprehensive attributes:
  - Basic info: id, name, price, image, description
  - Extended details: detailedDescription, rating, reviews
  - Care information: careLevel, size, light requirements, water needs
- Product data stored in static TypeScript file (src/data/products.ts)
- 8 different plant varieties with detailed descriptions and care instructions
- Utility functions for product retrieval (getProductById, getFeaturedProducts)
- Each product includes complete metadata for rich product detail pages

**Cart Management**
- **CartContext** provides global cart state with React Context API
- **localStorage persistence** with defensive try/catch error handling for reliability
- CartItem extends Product with quantity field
- Cart operations: add, remove, update quantity, clear, get totals, get count
- Real-time cart badge updates in navigation
- Toast notifications for user feedback on cart actions
- Comprehensive error handling for storage failures

### Routing Strategy

**Client-Side Routing**
- Hash-free URLs using BrowserRouter
- All custom routes defined before the catch-all 404 route to prevent conflicts
- Dynamic product detail routes using URL parameters
- Navigation component provides consistent site-wide navigation

### External Dependencies

**UI & Styling**
- Radix UI primitives for accessible component foundations
- Tailwind CSS with PostCSS for styling
- class-variance-authority for component variant management
- Lucide React for icon system
- Embla Carousel for image carousels
- Sonner for toast notifications

**Form Handling**
- React Hook Form for form state management
- Zod resolver for form validation schemas

**Development Tools**
- TypeScript with strict mode disabled for flexibility
- ESLint with React-specific rules
- Vite SWC plugin for fast compilation
- Lovable component tagger for development mode

**Third-Party Services**
- **Google AdSense** - Integrated in index.html for ad monetization (Publisher ID: ca-pub-1513685525112423)
- Configured with ads.txt in public directory for verification

### Build & Deployment

**Build Configuration**
- Production builds output to /dist directory
- Base URL set to "/" for GitHub Pages root deployment
- **GitHub Actions workflow** (.github/workflows/deploy.yml) configured for automatic deployment on main branch pushes
- Development server runs on port 5000 with 0.0.0.0 host for Replit compatibility
- Complete setup documentation available in GITHUB_PAGES_SETUP.md

**GitHub Pages Deployment**
- Automated workflow triggers on push to main branch
- Manual deployment trigger available via GitHub Actions
- Requires repository permissions: contents:read, pages:write, id-token:write
- Documentation in Indonesian for easy setup

**SEO & Meta**
- Open Graph tags for social media sharing
- Twitter Card support
- Descriptive meta tags for search engines
- robots.txt configured to allow all crawlers

### Code Organization

**Directory Structure**
- `/src/components` - Reusable React components
- `/src/components/ui` - shadcn/ui component library
- `/src/pages` - Page-level components
- `/src/contexts` - React Context providers
- `/src/data` - Static data and configuration
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions
- `/public` - Static assets and configuration files

**Type Safety**
- TypeScript configuration with relaxed strictness for rapid development
- Explicit type definitions for core data structures (Product, CartItem)
- Component prop types defined using TypeScript interfaces

**Testing & Quality Assurance**
- Comprehensive data-testid attributes on all interactive elements
- Follows pattern: `{action}-{target}` for buttons/inputs, `{type}-{content}` for display
- Dynamic elements include unique identifiers: `{type}-{description}-{id}`
- Ready for automated testing and QA validation

## Recent Updates (November 2, 2025)

### Shopping Cart Implementation
- ✅ Full cart functionality with localStorage persistence
- ✅ Add to cart from product cards and detail pages
- ✅ Cart page with quantity management (increase/decrease)
- ✅ Remove individual items or clear entire cart
- ✅ Real-time cart count badge in navigation
- ✅ Cart total calculation with shipping logic (free over $75)
- ✅ Empty cart state with call-to-action
- ✅ Toast notifications for all cart actions

### Product Catalog Enhancement
- ✅ 8 different plant varieties with detailed information
- ✅ Comprehensive product details including care instructions
- ✅ Product ratings and review counts
- ✅ Care level indicators (Easy, Moderate, etc.)
- ✅ Light and water requirements displayed
- ✅ Detailed description tabs (Description, Care Guide, Shipping)

### GitHub Pages Configuration
- ✅ Vite configured for root directory deployment (base: "/")
- ✅ GitHub Actions workflow for automatic deployment
- ✅ Complete setup documentation in GITHUB_PAGES_SETUP.md
- ✅ Development server optimized for Replit (host: 0.0.0.0, port: 5000)

### Code Quality Improvements
- ✅ Defensive error handling for localStorage operations
- ✅ Complete data-testid coverage for test automation
- ✅ Production-ready cart implementation reviewed and approved
- ✅ Clean, maintainable code structure