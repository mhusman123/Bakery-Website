# Porto's Donuts Bakery — Quetta, Pakistan 🍩

A modern, visually stunning, frontend-only website for **Porto's Donuts Bakery** located in Quetta, Pakistan. Built using **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **Zustand**, and **Fuse.js**.

---

## 🌟 Key Features

1. **Gourmet Bakery Visual Design**: Warm bakery palette (rich chocolate brown `#2C1A0E`, golden donut amber `#E68A00`, soft berry pink accents), rounded typography (Fredoka + Inter), micro-animations, and high quality food photography.
2. **Quetta Delivery Guard**: Restricted exclusively to Quetta neighborhoods (`Jinnah Town`, `Satellite Town`, `Airport Road`, `Cantt Area`, `Samungli Road`, etc.) with PKR currency (`Rs. 150` flat delivery fee, free delivery over `Rs. 1,500`).
3. **Fuse.js Instant Search**: Live client-side instant search across all gourmet donuts, cakes, croissants, and beverages.
4. **Zustand Local State Store**: Persistent shopping cart drawer and full cart page with quantity adjustment, customization options (box of 6, box of 12, extra glazes), promo code discount calculation (`PORTO10`), and toast notifications.
5. **Interactive Product Customization**: Flavor selection, box quantity choices, dietary tags (Eggless, Halal, Bestseller), ingredient lists, and related item recommendations.
6. **Checkout & Mock Order Confirmation**: Quetta delivery address form, Cash on Delivery + JazzCash / EasyPaisa / Card payment options, and a mock order confirmation screen (`/checkout/success`) with an estimated delivery timer (~35-45 mins) and direct **WhatsApp tracking link**.
7. **Floating WhatsApp Button**: Instant order initiation via WhatsApp pre-filled messages tailored for local Pakistani business habits.
8. **Clean Abstraction Layer**: Data access functions isolated in `src/lib/data/*` so real APIs or databases (Prisma/PostgreSQL) can be plugged in later without altering component code.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: Zustand (persisted with `localStorage`)
- **Client Search**: Fuse.js
- **Icons**: Lucide React

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build & Linting
```bash
npm run build
npm run start
```

---

## 📁 Project Folder Structure

```
portos-donuts-bakery/
├── README.md
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx                     # Homepage
    │   ├── globals.css
    │   ├── menu/
    │   │   ├── page.tsx                 # Full menu listing with live Fuse.js search
    │   │   └── [category]/page.tsx      # Category filtered view
    │   ├── product/
    │   │   └── [slug]/page.tsx          # Product detail & option selector
    │   ├── cart/
    │   │   └── page.tsx                 # Cart management page
    │   ├── checkout/
    │   │   ├── page.tsx                 # Quetta delivery checkout form
    │   │   └── success/page.tsx         # Mock order confirmation screen
    │   ├── about/page.tsx               # Quetta story & heritage
    │   ├── contact/page.tsx             # Quetta store location, Map & contact form
    │   └── faq/page.tsx                 # Accordion FAQs
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── MobileNav.tsx
    │   │   └── WhatsAppButton.tsx
    │   ├── home/
    │   │   ├── Hero.tsx
    │   │   ├── FeaturedProducts.tsx
    │   │   ├── CategoryShowcase.tsx
    │   │   ├── AboutTeaser.tsx
    │   │   ├── Testimonials.tsx
    │   │   ├── InstagramFeed.tsx
    │   │   └── NewsletterSignup.tsx
    │   ├── menu/
    │   │   ├── ProductCard.tsx
    │   │   ├── ProductGrid.tsx
    │   │   ├── CategoryFilter.tsx
    │   │   └── SearchBar.tsx
    │   ├── product/
    │   │   └── ImageGallery.tsx
    │   ├── cart/
    │   │   ├── CartDrawer.tsx
    │   │   └── CartItem.tsx
    │   ├── checkout/
    │   │   ├── DeliveryZoneSelect.tsx    # Quetta neighborhoods dropdown
    │   │   └── PaymentMethod.tsx         # COD / JazzCash / Card UI
    │   └── ui/                           # Primitives
    │       ├── Button.tsx
    │       ├── Modal.tsx
    │       ├── Input.tsx
    │       ├── Badge.tsx
    │       ├── Toast.tsx
    │       └── Skeleton.tsx
    ├── lib/
    │   ├── deliveryZones.ts             # Quetta zones & bakery constants
    │   ├── data/                         # Isolated mock data layer
    │   │   ├── products.ts
    │   │   ├── testimonials.ts
    │   │   └── faq.ts
    │   └── utils.ts                     # PKR currency formatter & helpers
    ├── store/
    │   ├── cartStore.ts                  # Zustand cart state
    │   └── uiStore.ts                    # Drawer, nav & toast state
    ├── hooks/
    │   ├── useCart.ts
    │   └── useDebounce.ts
    ├── types/
    │   ├── product.ts
    │   └── order.ts
    └── data/
        └── seed-products.ts               # Static mock bakery products
```

---

## 🍪 Quetta Specific Notes

- Delivery coverage is limited strictly to Quetta neighborhoods.
- Currency display uses Pakistani Rupee (`Rs.` / `PKR`).
- All product prices, box offers, and delivery thresholds are optimized for the Quetta market.
