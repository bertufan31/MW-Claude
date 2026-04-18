
The user wants me to fix all the readability and mobile usability issues I identified in the previous audit. Let me lay out a concise plan.

## Plan: Fix Mobile Readability & Usability Issues

### 1. Typography overhaul (`tailwind.config.ts` + `index.html`)
- Replace `Gowun Batang` (display) with **Fraunces** — a modern serif with proper Latin support, great for headings
- Replace `Mohave` (body) with **Inter** — industry-standard, highly legible UI font
- Remove unused font imports: Poppins, Merriweather, JetBrains Mono
- Update Google Fonts `<link>` in `index.html` accordingly

### 2. WCAG AA contrast fixes
- **`HeroSection.tsx`**: Strengthen `text-primary-foreground/80` → `/95` for the body paragraph; bump trust-indicator text from `/70` → `/90`; replace gold-on-light "$79.99" inside the bundle card with a darker gold or `text-foreground` (gold on cream fails AA)
- **`Newsletter.tsx`**: Increase `/80` → `/95` body, `/60` → `/85` footer line; raise input placeholder opacity from `/50` → `/75`
- **`ProductCard.tsx`**: Replace undefined `text-lavender` with `text-primary` (defined token) for both the title hover and price

### 3. Mobile UX fixes
- **`Header.tsx`**: 
  - Reduce mobile header height (`h-20` → `h-16`) so the centered "Manifesting Works" logo stops crowding the menu/cart icons
  - Shrink mobile logo from `text-lg` → `text-base` and constrain max-width to prevent overlap
  - Increase mobile nav link tap targets to `min-h-[44px]` with `py-3`
- **`ProductCard.tsx`**: Make "Add to Cart" button always visible on mobile (hover-only fails on touch). Use `lg:opacity-0 lg:group-hover:opacity-100` so it's persistent on small screens, hover-reveal only on desktop

### 4. Footer mobile collapsibility (`Footer.tsx`)
- On mobile, wrap each of the 4 link columns in a `Collapsible` accordion (using existing `@/components/ui/collapsible`) so users don't scroll through a long stacked list
- Keep the desktop 4-column grid unchanged via `lg:` breakpoint

### Files to edit
1. `tailwind.config.ts` — font family swap
2. `index.html` — Google Fonts link update
3. `src/components/home/HeroSection.tsx` — contrast fixes
4. `src/components/home/Newsletter.tsx` — contrast fixes
5. `src/components/products/ProductCard.tsx` — fix lavender + always-visible CTA on mobile
6. `src/components/layout/Header.tsx` — mobile height + tap targets + logo sizing
7. `src/components/layout/Footer.tsx` — mobile accordion (need to view first to confirm structure)

### Verification approach
After implementation, the user should test on mobile (390x844): check hero readability, header doesn't overlap, tap "Add to Cart" without hover, expand footer accordions, submit newsletter.

<lov-actions>
<lov-suggestion message="Approve the plan and apply all the fixes.">Approve & apply all fixes</lov-suggestion>
<lov-suggestion message="Apply only the WCAG contrast fixes and the mobile header/ProductCard fixes — skip the typography swap and footer accordion for now.">Only contrast + header/CTA</lov-suggestion>
<lov-suggestion message="Apply the fixes, but use Playfair Display + DM Sans instead of Fraunces + Inter for the typography.">Use Playfair + DM Sans instead</lov-suggestion>
<lov-suggestion message="After the fixes are applied, test the site end-to-end on mobile (390x844): scroll the hero, tap Daily Card, browse products, add to cart, expand the footer, and submit the newsletter.">Test end-to-end on mobile after fixes</lov-suggestion>
</lov-actions>
