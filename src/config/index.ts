/**
 * DFATE Multimedia Studio - Configuration
 * Central configuration for the application
 */

export const config = {
  // Site Configuration
  site: {
    name: 'DFATE Multimedia Studio',
    description: 'Premium Photography, Videography & Creative Branding',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dfatemultimedia.com',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@dfatemultimedia.com',
    phone: process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_PHONE || '+234 XXX XXX XXXX',
    location: 'Ore, Ondo State, Nigeria',
  },

  // Theme Colors
  colors: {
    primary: '#090909',
    accent: '#D4AF37',
    secondary: '#FFFFFF',
    success: '#00C853',
    dark: '#0f0f0f',
    card: '#1a1a1a',
  },

  // Pricing
  pricing: {
    starter: {
      name: 'Starter',
      price: 25000,
      currency: '₦',
    },
    premium: {
      name: 'Premium',
      price: 45000,
      currency: '₦',
    },
    luxury: {
      name: 'Luxury',
      price: 80000,
      currency: '₦',
    },
  },

  // Social Media
  social: {
    instagram: 'https://instagram.com/dfatemultimedia',
    facebook: 'https://facebook.com/dfatemultimedia',
    twitter: 'https://twitter.com/dfatemultimedia',
    tiktok: 'https://tiktok.com/@dfatemultimedia',
    linkedin: 'https://linkedin.com/company/dfatemultimedia',
  },

  // Business Hours
  hours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 5:00 PM',
    sunday: 'Closed',
  },

  // Animation Settings
  animations: {
    duration: 0.5,
    delay: 0.1,
    stagger: 0.1,
  },

  // SEO Keywords
  keywords: [
    'photography',
    'videography',
    'Ore',
    'Ondo State',
    'wedding photography',
    'portrait photography',
    'graphic design',
    'multimedia studio',
  ],
};

export type Config = typeof config;
