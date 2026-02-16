# KORP Software Website

A modern, corporate website for KORP Software built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

The website is running at: **http://localhost:3000**

## 📋 Features

### Design
- ✅ Dark theme Hero section (top half) + Light theme content sections (bottom half)
- ✅ Animated bull and bear illustrations in Hero section
- ✅ Responsive design for all devices
- ✅ Smooth animations with Framer Motion
- ✅ Professional corporate styling matching Rupeeseed reference

### Sections
1. **Header** - Fixed navigation with logo, dropdown menus, phone number, Contact Us button
2. **Hero** - Dark gradient background with bull/bear imagery, statistics, CTAs
3. **Services** - 6 service cards (Capital Market, F&O, Currency, Commodity, Mutual Fund, Risk Management)
4. **About** - Company info, statistics, office locations (Ghaziabad & Mumbai)
5. **Events** - Upcoming webinars and workshops
6. **Careers** - Job listings with benefits
7. **Contact** - Contact form + contact information
8. **Book Demo CTA** - Final call-to-action section
9. **Footer** - Navigation links, contact info, social links

### Tech Stack
- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts (ready for stock data integration)

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static build will be in the 'dist' folder
```

## 📁 Project Structure

```
korp-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Footer component
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section with bull/bear
│   │   │   ├── Services.tsx    # Services grid
│   │   │   ├── About.tsx       # About company
│   │   │   ├── Events.tsx      # Events & webinars
│   │   │   ├── Careers.tsx     # Job listings
│   │   │   ├── Contact.tsx     # Contact form
│   │   │   └── BookDemo.tsx    # Demo CTA section
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main page
│   └── ...
├── public/
│   └── images/                  # Placeholder for your images
├── dist/                        # Production build output
└── package.json
```

## 🎨 Customization

### Replace Bull & Bear Image
1. Add your bull/bear image to `public/images/`
2. Update the Hero.tsx component:
   - Replace the SVG illustrations (lines 200-270) with an `<Image>` component
   - Example: `<Image src="/images/bull-bear.jpg" alt="Bull and Bear" fill />`

### Replace Logo
1. Add your KORP logo to `public/images/`
2. Update Header.tsx and Footer.tsx:
   - Replace the SVG logo with an `<Image>` component

### Update Colors
Edit `src/app/globals.css` to change the color scheme:
- `--korp-blue`: Primary brand color
- `--korp-green`: Success/accent color
- `--korp-orange`: Highlight color

### Add Real Stock Data
The website is ready for stock data integration:
- Install additional API client (e.g., `npm install axios`)
- Create a hook in `src/app/hooks/useStockData.ts`
- Connect to Alpha Vantage, Yahoo Finance, or your preferred API
- Replace simulated data in components with real API data

## 📱 Contact Information

**KORP Software Pvt. Ltd.**

- **Corporate Office:** 1F-CS-20 Ansal Plaza, Sector 1, Vaishali, Ghaziabad-201010
- **Mumbai Office:** B-201, Kemp Plaza, MindSpace, Off Link Road, Malad West Mumbai-400064
- **Phone:** 0120-4330960, 9315539970, 8178884659
- **Email:** kuldeep@korpsoft.com, dixit@korpsoft.com

## 📝 Content from KorpSoft.com

The website content is based on information from https://korpsoft.com/:
- 25+ years of market experience
- Complete back-office management solution
- Services: Capital Market, F&O, Currency, Commodity, Mutual Fund, Risk Management
- NSDL & CDSL Depositories support

## 🔧 Next Steps

1. **Add your images:**
   - Bull & bear image for Hero section
   - KORP Software logo (SVG preferred)
   - Team photos for About section

2. **Connect real APIs:**
   - Stock market data API
   - Contact form backend
   - Job application system

3. **SEO Optimization:**
   - Add meta tags for each page
   - Create sitemap.xml
   - Add structured data

4. **Performance:**
   - Optimize images
   - Enable CDN
   - Add caching strategies

## 📄 License

© 2025 KORP SOFTWARE PVT. LTD. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
