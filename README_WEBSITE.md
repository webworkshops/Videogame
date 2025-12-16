# Videogames Then & Now - Website Documentation

## Overview
A professional, conversion-focused website for Videogames Then & Now, a retro and modern video game store located in Harwood Heights, Illinois.

## Website Features

### Pages
1. **Homepage** (`/`)
   - Hero section with strong value proposition
   - Business rating and review count display
   - Category highlights (Retro, Modern, Accessories, Collectibles)
   - Customer testimonials
   - Multiple call-to-action sections

2. **About Us** (`/about`)
   - Store story and mission
   - Core values showcase
   - Expert guidance section
   - Community-focused messaging

3. **Inventory** (`/inventory`)
   - Four main categories with imagery
   - Important inventory notice
   - Quality guarantees and differentiators
   - Call-to-action for inquiries

4. **Reviews** (`/reviews`)
   - Customer testimonials grid
   - Star ratings and statistics
   - Common themes section
   - Social proof elements

5. **Contact/Visit Us** (`/contact`)
   - Google Maps integration
   - Business hours
   - Contact information (address, phone, email)
   - Directions and parking info

### Design Features
- **Color Scheme**: Yellow/gold (#F4C430) accent color inspired by store branding, with dark gray/charcoal base
- **Typography**: Modern, clean fonts with bold headings
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Navigation**: Sticky header with active states, mobile-friendly hamburger menu
- **Footer**: Comprehensive with quick links, contact info, and store hours
- **CTAs**: Multiple conversion points throughout (Call Now, Visit Store, Get Directions)

## Customization Guide

### Replacing Placeholder Images

All images are currently sourced from professional stock photography. To replace them with your actual store photos:

1. **Open** `/app/frontend/src/mock.js`

2. **Find the categories array** (around line 24):
```javascript
export const categories = [
  {
    id: 1,
    title: "Retro Consoles & Games",
    image: "https://images.unsplash.com/...", // <-- Replace this URL
    ...
  },
  ...
]
```

3. **Replace image URLs** with:
   - Your own hosted images
   - Local images in `/app/frontend/public/images/` folder
   - Example: `image: "/images/retro-section.jpg"`

### Images to Replace

**Homepage Categories (4 images needed)**:
- Retro Consoles & Games section
- Modern Games section  
- Accessories & Controllers section
- Rare & Collectible Items section

**About Page (2 images)**:
- Story section image (retro gaming setup)
- Expertise section image (store atmosphere)

**Recommended Image Sizes**:
- Category cards: 800x600px or 1200x900px
- Hero backgrounds: 1920x1080px
- About page: 1200x800px

### Updating Business Information

Edit `/app/frontend/src/mock.js`:

```javascript
export const businessInfo = {
  name: "Videogames Then & Now",
  phone: "(708) 867-5309", // <-- Update phone number
  email: "info@videogamesthennow.com", // <-- Update email
  address: { ... }, // <-- Update address if needed
  hours: [ ... ], // <-- Update store hours
  googleMapsEmbed: "...", // <-- Update Google Maps embed URL
  rating: 4.2, // <-- Update rating
  reviewCount: "400+" // <-- Update review count
}
```

### Updating Reviews

Replace placeholder reviews in `/app/frontend/src/mock.js`:

```javascript
export const reviews = [
  {
    id: 1,
    name: "Customer Name",
    rating: 5,
    text: "Review text here...",
    date: "2 weeks ago"
  },
  ...
]
```

### Google Maps Integration

To update the embedded map:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address: "4850 N Harlem Ave, Harwood Heights, IL 60706"
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace `googleMapsEmbed` value in `/app/frontend/src/mock.js`

## Running the Website

The website is already running at `http://localhost:3000`

To restart:
```bash
sudo supervisorctl restart frontend
```

To check logs:
```bash
tail -f /var/log/supervisor/frontend.out.log
```

## Technology Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Routing**: React Router DOM

## File Structure

```
/app/frontend/src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Site footer
│   └── ui/                 # Shadcn UI components
├── pages/
│   ├── Home.jsx           # Homepage
│   ├── About.jsx          # About page
│   ├── Inventory.jsx      # Inventory showcase
│   ├── Reviews.jsx        # Customer reviews
│   └── Contact.jsx        # Contact/visit page
├── mock.js                # All business data and content
├── App.js                 # Main app component with routing
├── App.css               # Custom styles
└── index.css             # Tailwind and base styles
```

## Notes

- All images are optimized and responsive
- Phone numbers are clickable (tel: links)
- Email addresses are clickable (mailto: links)
- Google Maps directions link opens in new tab
- All CTAs are conversion-optimized
- Website follows modern web best practices
- SEO-friendly structure (can add meta tags as needed)

## Future Enhancements (Optional)

- Add contact form for inquiries
- Integrate with actual Google Reviews API
- Add image gallery for store photos
- Implement newsletter signup
- Add social media integration
- Create blog section for gaming news
- Add inventory search/filter functionality

## Support

For any questions or assistance with customization, refer to the React and Tailwind CSS documentation:
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
