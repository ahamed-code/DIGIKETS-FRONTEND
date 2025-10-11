# Digikets Marketing - Design Guidelines

## Design Approach
**Reference-Based Creative Agency Aesthetic** - Drawing inspiration from modern creative agencies and portfolio sites with bold animations, vibrant colors, and immersive experiences. The design celebrates creativity, innovation, and digital expertise with memorable interactive elements.

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- **Background Base**: 240 25% 8% (deep navy-purple)
- **Background Elevated**: 240 20% 12% (slightly lighter purple-dark)
- **Primary Purple**: 270 85% 65% (vibrant purple)
- **Primary Blue**: 215 90% 60% (electric blue)
- **Accent Gradient**: Linear gradient from purple to blue (270 85% 65% → 215 90% 60%)
- **Text Primary**: 0 0% 98% (off-white)
- **Text Secondary**: 240 10% 70% (muted purple-gray)
- **Success/WhatsApp**: 142 76% 36% (WhatsApp green)

**Light Mode (Secondary)**
- **Background Base**: 240 30% 98% (light purple-white)
- **Background Elevated**: 0 0% 100% (pure white)
- **Primary Purple**: 270 75% 55%
- **Primary Blue**: 215 85% 50%
- **Text Primary**: 240 25% 8%
- **Text Secondary**: 240 15% 40%

### B. Typography

**Font Stack**
- **Primary**: 'Poppins' (Google Fonts) - Modern, geometric, professional
- **Accent/Display**: 'Space Grotesk' (Google Fonts) - Tech-forward, distinctive for headings
- **Mono/Code**: 'JetBrains Mono' (for any technical displays)

**Scale**
- **Hero Heading**: text-6xl to text-8xl (60-96px), font-bold, Space Grotesk
- **Section Headings**: text-4xl to text-5xl (36-48px), font-bold
- **Subheadings**: text-2xl to text-3xl (24-30px), font-semibold
- **Body**: text-base to text-lg (16-18px), Poppins
- **Small/Caption**: text-sm (14px)

### C. Layout System

**Spacing Primitives**: Consistent use of Tailwind units: **4, 8, 12, 16, 20, 24, 32** (p-4, p-8, gap-12, etc.)

**Container Strategy**
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Section vertical padding: `py-20 lg:py-32` for main sections
- Component spacing: `space-y-16 lg:space-y-24` between major elements

**Grid Patterns**
- Projects: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Features: `grid-cols-1 lg:grid-cols-2 gap-12`
- Stats/Numbers: `grid-cols-2 lg:grid-cols-4 gap-8`

### D. Component Library

**Navigation**
- Sticky header with blur backdrop (backdrop-blur-xl bg-purple-dark/80)
- Logo on left, nav items centered, CTA button on right
- Smooth scroll behavior with active section indicators
- Mobile: Hamburger menu with slide-in panel

**Welcome Animation Sequence**
1. **Balloon/Party Effects**: Canvas-based floating balloons with confetti burst
2. **Multi-Language Carousel**: Text fades in/out with slide animation - "Welcome" → "Vanakkam" → "Namaste" → "Swagatam" → "Suswagatam" → "Nomoshkar" → "Salaam" (2-3 seconds total)
3. **Logo Reveal**: Digikets Marketing logo scales in with glow effect
4. **Transition**: Smooth fade to main site with particle background

**Particle Background**
- Interactive particle system with purple/blue gradient particles
- Responds to mouse movement (parallax effect)
- Denser on hero, subtle on other sections
- Use particles.js or tsparticles library via CDN

**Hero Section (Company)**
- Large hero with gradient overlay on background image/video
- Headline: "Elevating Brands Through Digital Excellence"
- Subheadline about Digikets Marketing's mission
- Primary CTA: "View Our Work" + Secondary: "Get in Touch"
- Animated stats bar: "500+ Projects Delivered | 200+ Happy Clients | 10+ Years Experience"

**Services Cards (Company Section)**
- Glass-morphism cards (backdrop-blur-md bg-white/10 border border-white/20)
- Icon + Title + Description + "Learn More" link
- Hover: Lift effect (transform scale-105) with subtle glow
- Services: SEO, Social Media Marketing, Content Creation, Brand Strategy, Web Development, Analytics

**Projects/Portfolio Section**
- Masonry-style grid showcasing client work
- Each project card: Client logo, project type, brief description, results/metrics
- Hover overlay reveals: View Case Study button
- Filter tabs: All | Branding | Digital | Social Media | Web

**About CEO Section**
- Two-column layout: CEO photo on left, story on right (desktop)
- Professional headshot with purple-blue gradient border/glow
- Journey narrative: Background, vision, achievements
- Quote highlight in large decorative text
- Social proof: Awards, certifications, speaking engagements

**Contact Section (Approach Me)**
- Split layout: Form on left, contact info + map on right
- **Form Fields**: Name, Email, Phone, Service Interest (dropdown), Message
- **Contact Cards**: 
  - WhatsApp: Direct chat button with "Chat on WhatsApp" + phone number
  - Email: Display email with copy button
  - Phone: Click-to-call number
  - Office Hours: Availability information
- **Submit Button**: Gradient purple-to-blue with loading state
- Success message with animation after submission

**Footer**
- Three-column: About snippet | Quick Links | Social Media
- Newsletter signup: "Stay Updated on Digital Trends"
- Social icons with hover glow effects
- Copyright + "Made with 💜 by Digikets Marketing"

### E. Animations & Effects

**Use Sparingly but Impactfully**
- Welcome sequence: 3-4 second multi-language animation
- Section reveals: Fade-up on scroll (Intersection Observer)
- Card hovers: Transform scale + glow (duration-300)
- Button interactions: Gradient shift on hover
- Particle system: Continuous ambient animation
- Balloon effects: Initial page load only

**No Animations**
- Page transitions (use instant navigation)
- Excessive scroll-triggered animations
- Auto-playing carousels (user-controlled only)

---

## Images

**Hero Section**: Large hero image showing a creative workspace or digital marketing team collaboration - vibrant, energetic, modern office setting with purple/blue color grading overlay.

**About CEO Section**: Professional headshot of the founder - well-lit, confident pose, neutral background with subtle purple accent lighting.

**Projects Section**: Client work screenshots/mockups - 6-8 project thumbnails showing websites, social media campaigns, branding materials.

**Company Section**: Abstract digital marketing illustrations - team collaboration, analytics dashboards, social media icons in purple/blue theme.

---

## Technical Specifications

**Particle System**: Use tsparticles library with purple/blue gradient particles, interactive mouse tracking, 50-100 particles density.

**Animation Library**: Framer Motion or GSAP for welcome sequence and scroll animations.

**Icons**: Heroicons for UI elements, Font Awesome for social media icons.

**Contact Integration**: Form with Replit Mail or SendGrid for SMTP, WhatsApp API link (wa.me/[number]), tel: links for phone.

**Performance**: Lazy load images, optimize particle count for mobile, preload welcome animation assets.