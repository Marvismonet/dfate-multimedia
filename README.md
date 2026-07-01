# DFATE Multimedia Studio - Premium Photography Portfolio

A luxury, production-ready photography portfolio website for DFATE Multimedia Studio built with modern web technologies.

## 🎨 Design Philosophy

- **Luxury & Premium**: Dark mode with gold accents inspired by Apple, Porsche, and high-end brands
- **Modern UI/UX**: Smooth animations, glassmorphism effects, and responsive design
- **Performance**: 95+ Lighthouse score, optimized images, lazy loading
- **Accessibility**: Full keyboard navigation, semantic HTML, ARIA labels

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion & GSAP
- **State Management**: Zustand
- **Backend Services**: Firebase & Supabase
- **Media**: Cloudinary for image optimization
- **Forms**: React Hook Form with Zod validation
- **Payment**: Flutterwave, Paystack, Stripe integration

## 📦 Features

### Core Features
- ✅ Cinematic hero section with image slideshow
- ✅ Sticky navigation with smooth scrolling
- ✅ About section with statistics
- ✅ Services showcase (Photography, Videography, Graphic Design)
- ✅ Portfolio masonry grid with filtering
- ✅ Pricing tiers (Starter, Premium, Luxury)
- ✅ Client testimonials carousel
- ✅ Blog section
- ✅ Contact form with Google Maps
- ✅ Newsletter subscription

### Advanced Features
- ✅ Booking system with calendar
- ✅ Payment integration
- ✅ Admin CMS panel
- ✅ Instagram & TikTok feed
- ✅ SEO optimization
- ✅ PWA support
- ✅ Dark/Light mode toggle

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Marvismonet/dfate-multimedia.git
   cd dfate-multimedia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Firebase, Supabase, Cloudinary, and payment provider credentials.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

## 📋 Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Payment Providers
NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=...
FLUTTERWAVE_SECRET_KEY=...
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=...
PAYSTACK_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...

# Other
NEXT_PUBLIC_CONTACT_EMAIL=contact@dfatemultimedia.com
NEXT_PUBLIC_WHATSAPP_BUSINESS_PHONE=234XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
NEXT_PUBLIC_SITE_URL=https://dfatemultimedia.com
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── admin/               # Admin dashboard
│   └── blog/                # Blog pages
├── components/              # Reusable components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/                     # Utility functions
│   ├── firebase.ts
│   ├── supabase.ts
│   ├── cloudinary.ts
│   └── animations.ts
├── types/                   # TypeScript types
│   └── index.ts
└── store/                   # Zustand store
    └── index.ts
```

## 🎯 Key Sections

### Hero Section
- Full-screen cinematic background with image slideshow
- Mouse movement parallax effects
- Floating particles animation
- Scroll indicator

### Navigation
- Sticky header that becomes solid on scroll
- Responsive mobile menu
- Smooth scroll to sections
- Book Now CTA button

### Portfolio
- Masonry grid layout
- Category filtering (Birthday, Wedding, Portrait, etc.)
- Hover zoom effect with dark overlay
- Lightbox gallery view

### Pricing
- Three-tier pricing (Starter, Premium, Luxury)
- Feature comparison
- Payment integration

### Booking System
- Calendar date picker
- Service selection
- Photographer assignment
- Real-time availability
- Payment processing
- Email & WhatsApp notifications

### Admin Panel
- Portfolio upload & management
- Pricing configuration
- Blog creation & editing
- Testimonial management
- Booking calendar
- Analytics dashboard

## 🎨 Color Scheme

- **Primary**: Deep Black (#090909)
- **Accent**: Gold (#D4AF37)
- **Secondary**: White (#FFFFFF)
- **Success**: #00C853

## 🔤 Typography

- **Headings**: Playfair Display
- **Body**: Poppins
- **Buttons**: Montserrat SemiBold

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interactions
- Optimized mobile navigation

## ⚡ Performance

- **Image Optimization**: Cloudinary CDN with automatic format selection
- **Code Splitting**: Automatic Next.js code splitting
- **Lazy Loading**: Intersection Observer for images
- **Minification**: Automatic via Next.js/Tailwind

## 🔍 SEO

- Meta tags optimization
- Open Graph tags
- Sitemap generation
- Schema markup
- robots.txt
- Mobile-friendly
- Fast loading times

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

```bash
npm run build
```

### Docker

```bash
docker build -t dfate-multimedia .
docker run -p 3000:3000 dfate-multimedia
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔐 Security

- Environment variables protected
- Firebase security rules
- CORS properly configured
- Rate limiting on APIs
- Input validation with Zod

## 📄 License

This project is proprietary to DFATE Multimedia Studio.

## 👤 Author

**DFATE Multimedia Studio**
- Location: Ore, Ondo State, Nigeria
- Email: contact@dfatemultimedia.com

## 🤝 Support

For support, email contact@dfatemultimedia.com or create an issue in the repository.

---

**Built with ❤️ for DFATE Multimedia Studio**
