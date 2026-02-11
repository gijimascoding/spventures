# SP Ventures - Portfolio Website

## Project Overview

SP Ventures is an institutional real estate investment firm specializing in multi-family residential and boutique student housing assets across North America. This website serves as the company's digital portfolio, showcasing their properties, leadership team, investment approach, and market presence.

**Company:** SP Ventures
**Website Type:** Corporate Portfolio & Institutional Marketing
**Primary Markets:** Canada (Toronto, Ottawa, Halifax, Regina) & United States (Seattle, Austin)
**Asset Classes:** Multi-Family Residential, Student Housing
**Total Portfolio:** 14 properties (8 principal properties showcased on website)

## Project Structure

### Core Files

- **index.html** - Main HTML structure with all page sections
- **styles.css** - Complete CSS styling with responsive design
- **script.js** - Interactive functionality and animations
- **headshot/** - Leadership team photos (4 members)
- **Properties/** - Property images (8 principal assets)

### Key Sections

1. **Hero Section** - Light background with terracotta accent, company introduction
2. **About Section** - Company overview and key metrics
3. **Approach Section** - Investment strategy and methodology
4. **Leadership Section** - Team members with photos and bios
5. **Portfolio Section** - Featured properties with filtering
6. **Investment Thesis** - Strategic rationale
7. **Markets Section** - Geographic presence
8. **Contact Section** - Contact form (FormSubmit.co integration)

## Design System

### Color Palette

- **Primary:** Deep Slate (#1E293B, #2C3E50)
- **Accent:** Terracotta (#C0785C)
- **Backgrounds:** White (#FFFFFF), Light Slate (#F8FAFC, #F1F5F9)
- **Text:** Primary (#1A1A2E), Secondary (#555770), Muted (#94A3B8)

### Typography

- **Serif:** Playfair Display (headings, emphasis)
- **Sans-serif:** Source Sans 3 (body text, UI elements)

### Design Philosophy

This design intentionally differs from typical dark, modern real estate sites. It uses:
- Light, airy hero section (vs. dark overlays)
- Serif typography for elegance and trust
- Terracotta accents for warmth and sophistication
- Clean, institutional aesthetic

## Featured Properties (8 Principal Assets)

### Property Name Mapping

| Old Name | New Name | Location |
|----------|----------|----------|
| 550 Wilbrod | The Riverflow | Ottawa, ON |
| Court Residences | Yorkville Manor | Toronto, ON |
| Dartmouth Residences | Dartmouth Residences | Halifax, NS |
| 3810 Robinson St | The Robinson | Regina, SK |
| 1108 Nueces | Capitol Quarters | Austin, TX |
| 901 6th Ave | The Dover | Seattle, WA |
| 608 W Emerson St | Emerson Quarters | Seattle, WA |
| The Linden | The Linden | Toronto, ON |

**Note:** Company owns 14 total properties, but only these 8 principal assets are displayed publicly.

## Leadership Team

### Hierarchy & Roles

1. **Nick Lee** - Chairman
   Top executive, strategic direction

2. **Edi Nisenbaum** - Managing Director & Asset Manager
   Operations leadership, asset management oversight

3. **Vincent Slawski** - Asset Coordinator
   Property coordination and management support

4. **Ruhul Chowdhury** - Construction Manager
   Capital improvements and renovation projects

## Technical Implementation

### Dependencies

- **Fonts:** Google Fonts (Inter, DM Sans)
- **Form:** FormSubmit.co (mailto:info@spventures.co)
- **Icons:** Inline SVG (no external icon libraries)

### JavaScript Features

- Navbar scroll behavior (transparency → solid)
- Mobile navigation toggle
- Smooth scroll for anchor links
- Portfolio filtering (All, Multi-Family, Student Housing, Canada, US)
- Scroll-triggered reveal animations (IntersectionObserver)
- Contact form handling with fallback to mailto:

### Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px
- Small Mobile: < 480px

## Development Guidelines

### Code Style

- **HTML:** Semantic markup, BEM-inspired class naming
- **CSS:** Custom properties (CSS variables), mobile-first approach
- **JavaScript:** Vanilla JS (no frameworks), ES6+ syntax, event delegation

### File Naming

- Use kebab-case for CSS classes (e.g., `.portfolio-card`)
- Use camelCase for JavaScript variables (e.g., `portfolioCards`)
- Keep image filenames descriptive (e.g., `Nick Lee - Chairman.png`)

### Image Guidelines

- **Leadership photos:** Square aspect ratio (1:1), professional headshots
- **Property photos:** High-quality exterior/building shots
- **Format:** PNG preferred for quality
- **Optimization:** Consider compression for web performance

### Interactive Features

- Hover effects should be subtle and professional
- Transitions: 0.2s - 0.3s for UI elements
- Animations: Use `IntersectionObserver` for scroll-triggered reveals
- Click interactions should have visual feedback

## Content Management

### Updating Properties

To add/update properties:
1. Add image to `Properties/` folder
2. Update portfolio grid in `index.html` (line ~200)
3. Include proper data attributes: `data-type` and `data-country`
4. Maintain consistent card structure

### Adding Team Members

To add/update team members:
1. Add headshot to `headshot/` folder
2. Update leadership grid in `index.html`
3. Follow hierarchy: Chairman → Managing Director → Coordinators → Managers
4. Keep bios concise (2-3 sentences)

### Form Configuration

Contact form sends to: **info@spventures.co**
- Primary: FormSubmit.co service
- Fallback: Direct mailto: link with pre-filled subject/body

## Deployment

### Static Hosting

This is a static website (HTML/CSS/JS only) suitable for:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

### Docker Deployment (Optional)

Includes:
- `Dockerfile` - nginx-based container
- `nginx.conf` - server configuration
- Run: `docker build -t sp-ventures . && docker run -p 80:80 sp-ventures`

### CORS Considerations

If serving from different domain than form endpoint:
- FormSubmit.co handles CORS automatically
- `cors_server.py` included for local testing if needed

## SEO & Meta

- Title: "SP Ventures | Institutional Real Estate Investment"
- Description: Set in meta tags (line 7)
- Favicon: SVG logo embedded in HTML
- Semantic HTML for accessibility
- Mobile-optimized (viewport meta tag)

## Brand Guidelines

### Tone & Voice

- **Professional & Institutional:** Target audience is investors and institutional partners
- **Confident & Established:** Emphasize track record and expertise
- **Data-Driven:** Use specific metrics (13 buildings, 440K+ sq ft, 6 markets)
- **Sophisticated:** Avoid overly casual language

### Visual Identity

- **Logo:** "SP" monogram + "SP Ventures" wordmark
- **Color Usage:**
  - Slate for trust and professionalism
  - Terracotta for differentiation and warmth
  - White space for clarity
- **Photography:** Professional building exteriors, team headshots

## Future Enhancements

### Potential Features

- [ ] Property detail pages (currently just preview cards)
- [ ] Team member detail modals or pages
- [ ] Investment performance metrics/charts
- [ ] News/insights blog section
- [ ] Investor login portal
- [ ] Property search/filter by criteria
- [ ] Interactive market map
- [ ] Case studies for value-add success stories

### Performance Optimization

- [ ] Image lazy loading for properties
- [ ] WebP format with PNG fallback
- [ ] CSS/JS minification for production
- [ ] Critical CSS inlining
- [ ] Service worker for offline capability

## Important Notes

### Content Restrictions

- **Privacy:** Do not display all 14 properties - only the 8 principal assets
- **Confidentiality:** No detailed financial information
- **Professional Standard:** All content must maintain institutional credibility

### Maintenance

- Regularly update property portfolio as acquisitions/dispositions occur
- Keep team member information current
- Test contact form monthly
- Monitor for broken links
- Update copyright year annually

## Contact & Support

**Primary Contact:** info@spventures.co
**Website Purpose:** Lead generation, brand credibility, investor relations
**Target Audience:** Institutional investors, capital allocators, property sellers

---

## Quick Reference Commands

```bash
# Extract images
unzip -o headshot.zip
unzip -o Properties.zip

# Run local server (Python)
python -m http.server 8000

# Run with Docker
docker build -t sp-ventures .
docker run -p 80:80 sp-ventures

# Clean up macOS artifacts
find . -name "._*" -delete
find . -name "__MACOSX" -type d -exec rm -rf {} +
```

---

**Last Updated:** February 11, 2026
**Version:** 1.0
**Status:** Production Ready
