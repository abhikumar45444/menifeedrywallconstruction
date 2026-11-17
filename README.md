# Menifee Drywall Construction — Mobile-First Web App

A high-converting, mobile-first Web App transformed from [menifeedrywallconstruction.com](https://menifeedrywallconstruction.com/).

Built for **Menifee Drywall Construction** (President/Owner **Jessie Lisardo**), Riverside County's premier drywall contractor with over 20 years of verifiable craftsmanship.

---

## 🚀 Key Features & Mobile Architecture

### 1. Dual-Mode Responsive Chassis (`PhoneShell`)
- **Desktop (`md:` breakpoint):** Renders a realistic iPhone chassis with centered framing, physical side buttons (mute switch, volume up/down, power key), Dynamic Island pill, live iOS status bar (`9:41`, Wi-Fi, battery 100%), and bottom iOS Home Indicator bar. Includes a toggle to preview Fullscreen vs iPhone Frame.
- **Real Mobile Viewports (`< md`):** Automatically renders 100% native edge-to-edge (`w-full h-full h-[100dvh]`), hiding all simulated notches, bezels, and mock status bars for an authentic iOS/Android app experience.

### 2. Collapsible Top Header & Auto-Rotating Hero Carousel
- **Sticky Dynamic Header:** Transparent gradient scrim over hero when scrolled to top, smoothly transitioning into a frosted-glass solid header (`bg-white/95 backdrop-blur-md shadow-md`) as the user scrolls.
- **Hero Carousel:** Auto-advancing (every 3.5s) full-bleed banner with touch swipe support, progress dots, real company headlines, and instant quote CTA pills.

### 3. Floating Pill Bottom Navigation Bar
- Positioned as a floating pill (`sticky bottom-0 z-30 pointer-events-none px-3.5 pb-2 pt-1`).
- Inner pill (`pointer-events-auto max-w-[390px] mx-auto bg-white/95 backdrop-blur-md rounded-[28px] shadow-xl border border-slate-200/90 px-2 py-1.5 flex justify-around`).
- 4 Core Mobile Tabs:
  1. **Home:** Emergency escrow alert, founder story (Jessie Lisardo), service chips, real recent projects, and customer review spotlight.
  2. **Services:** Complete catalog of all 8 authentic services (Drywall Repair, Water Damage, Popcorn Removal, Texture Matching, Installation, Level 5 Smooth Wall, Demolition, Commercial) with search, filters, and tap-to-expand specifications.
  3. **Estimator:** Interactive 4-step damage diagnostic quiz & cost estimator calculating live low/high ranges and 1-tap SMS/call dispatch.
  4. **Reviews & Gallery:** Verified reviews (Jeff V., Jenny E., Andi Albright, Kristi Townsend, Natalie Valenzuela, Jen Milner) and job photos with full-screen lightbox.
- Content feeds feature `pb-28` to prevent bottom-nav obscuration.

### 4. High-Converting Micro-Flows & Modals
- **Service Detail Modal Sheet:** Swipe-down pop-up with specs, guarantees, and pricing.
- **Direct Tap-to-Call Modal:** 1-tap phone call, instant SMS with prefilled project note, or copy number.
- **Free Consultation Drawer:** Fast form with city picker (Menifee, Murrieta, Temecula, Corona, Riverside) and direct SMS dispatch.

---

## 🛠 Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom brand palette `#0284c7`, `#0369a1`, amber accents)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages ready (`base: './'`, GitHub Actions workflow in `.github/workflows/deploy.yml`)

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```
