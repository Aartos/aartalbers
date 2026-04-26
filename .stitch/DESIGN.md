---
name: Executive Editorial Rounded
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#404848'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#707978'
  outline-variant: '#bfc8c8'
  surface-tint: '#2e6767'
  primary: '#003535'
  on-primary: '#ffffff'
  primary-container: '#0d4d4d'
  on-primary-container: '#85bdbc'
  inverse-primary: '#98d1d0'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#2d2f2c'
  on-tertiary: '#ffffff'
  tertiary-container: '#434542'
  on-tertiary-container: '#b2b3ae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4edec'
  primary-fixed-dim: '#98d1d0'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#104f4f'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Noto Serif
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Noto Serif
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  margin-page: 48px
  gutter-grid: 24px
  padding-card: 32px
  stack-gap: 16px
---

## Brand & Style

This design system embodies a "Soft Authority" aesthetic. It balances the intellectual rigor of a prestige publication with a welcoming, modern tactility. The brand personality is sophisticated, curated, and deeply human. By merging high-end editorial typography with hyper-rounded, organic shapes, the UI moves away from the coldness of traditional enterprise software toward a more inviting, "editorial-concierge" experience.

The design style is a hybrid of **Minimalism** and **Tactile Modernism**. It prioritizes vast whitespace and intentional hierarchy but uses generous corner radii to create a sense of approachability and comfort. The resulting emotional response should be one of calm confidence and high-value curation.

## Colors

The palette is anchored by a deep, scholarly **Teal** (#0D4D4D) which serves as the primary brand color for critical actions and navigational headers. This is contrasted by a warm, vibrant **Ochre** (#D97706) used sparingly for accents, highlights, and secondary interactions to provide heat and energy.

The background uses a **Soft Bone** (#F5F5F0) rather than pure white, reducing eye strain and reinforcing the "premium paper" feel. Text is set in a slightly softened **Ink Black** (#1A1A1A) to maintain high legibility while avoiding the harshness of hex #000.

## Typography

This design system exclusively utilizes **Noto Serif** to establish a consistent, authoritative voice across all information densities. Headlines leverage the heavier weights with tighter letter spacing for a dramatic, newspaper-front-page effect. 

Body text is optimized for long-form reading with a generous 1.6 line height. Labels and small metadata should be set in semi-bold uppercase with increased letter spacing to provide a structural contrast to the fluid nature of the serif headlines.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop (12 columns, 1200px max-width) to ensure content remains centered and focused, mimicking the layout of a physical magazine. On smaller viewports, it transitions to a fluid model with generous side margins.

A 4px base unit governs all spatial relationships. Elements are grouped using significant "white blocks"—intentionally empty space that guides the eye toward the primary editorial content. Padding within containers (cards, modals) is deliberately oversized (32px+) to complement the generous corner radii.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** rather than heavy shadows. Components sit on the Soft Bone background with subtle, extra-diffused ambient shadows (40px blur, 4% opacity of the Teal primary color) to provide a soft "lift" without creating a digital-only look.

Borders are rarely used for containment; instead, slight color shifts between the background and container surfaces define boundaries. When a border is necessary, it should be a low-contrast 1px solid line in a tinted version of the background color.

## Shapes

The defining characteristic of this design system is its **hyper-rounded geometry**. We avoid sharp corners entirely to maintain a friendly, fluid aesthetic.

- **Buttons & Chips:** Use a full pill-shape (`rounded-full`).
- **Cards & Primary Containers:** Use a 24px to 32px radius (`rounded-xl` or `rounded-2xl`).
- **Input Fields:** Use a 16px radius to balance the internal text padding.
- **Selection Indicators:** Use circular or pill-shaped indicators to reinforce the soft language.

## Components

### Buttons
Primary buttons are pill-shaped with the Teal background and Bone text. Hover states should transition the background to a slightly lighter teal. Secondary buttons use the Ochre color for high-visibility calls to action (e.g., "Subscribe" or "Download Report").

### Cards
Cards must have a minimum border-radius of 24px. They should feature generous internal padding (32px) and use the Ochre accent for small UI elements like category tags or "New" indicators.

### Inputs & Forms
Form fields are pill-shaped with a subtle 1px border. Focus states should utilize a 2px Teal ring with a small offset to maintain the rounded silhouette. Labels sit above the field in uppercase Noto Serif.

### Chips & Tags
Chips are small, fully rounded elements. For editorial categories, use a light tint of the Teal background with dark Teal text.

### Navigation
The top navigation should feel like a masthead. Use high-contrast Noto Serif for menu items. Active states are indicated by a small Ochre dot beneath the text rather than an underline, preserving the clean typography.