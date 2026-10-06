# Sun Sisters Spray Tanning

Official website for **Sun Sisters Spray Tanning**, a mobile spray tanning business serving the Charlotte, North Carolina area.

**Live Site:** [sunsistersspraytanning.com](https://sunsistersspraytanning.com)

---

## About the Project

The Sun Sisters Spray Tanning website provides clients with information about the business, available tanning services, the spray tanning process, preparation and aftercare, frequently asked questions, and booking.

The site was designed and developed as a custom Vue application with a responsive interface and a visual identity built specifically for the Sun Sisters brand.

---

## Tech Stack

- [Vue.js](https://vuejs.org/)
- [Vite](https://vite.dev/)
- JavaScript
- SCSS
- HTML
- GitHub
- Vercel

---

## Features

### Responsive Design

The site is fully responsive and designed for desktop, tablet, and mobile devices.

Layouts, navigation, imagery, and content sections adapt across screen sizes while maintaining a consistent visual experience.

### Custom Brand Design

The website was built around the Sun Sisters visual identity, using custom typography, colors, imagery, and graphic elements throughout the site.

Reusable design patterns maintain consistency across pages while allowing individual sections to have their own layouts and content.

### Services

The site presents the available spray tanning services with descriptions and pricing information to help clients determine the appropriate option before booking.

### Booking

Booking calls-to-action are integrated throughout the site to provide clients with a clear path from learning about a service to scheduling an appointment.

### Spray Tan Information

Educational content helps clients understand what to expect before, during, and after their appointment.

Preparation and aftercare information is provided to help clients achieve and maintain the best possible results.

### Frequently Asked Questions

The FAQ section provides answers to common questions about spray tanning, appointments, preparation, aftercare, and the overall tanning process.

---

## Pages

The site currently includes:

- Home
- About
- Services
- Gallery
- FAQ
- Booking
- Contact

---

## Project Structure

Key project directories include:

```text
src/
├── assets/
├── components/
├── views/
├── App.vue
└── main.js
```

### `assets`

Contains site assets including images, graphics, and other visual resources used throughout the application.

### `components`

Contains reusable Vue components used across the site.

These components help maintain consistent navigation, layout, content presentation, and interactive behavior.

### `views`

Contains the primary page-level views for the application.

### `App.vue`

Provides the root application structure and shared application-level layout.

### `main.js`

Initializes the Vue application and application-level dependencies.

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL after the server starts.

---

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

Production is available at:

**https://sunsistersspraytanning.com**

---

## Content Updates

Most routine site content can be updated directly within the corresponding Vue views and components.

Reusable components are used throughout the project to keep shared design elements and functionality consistent across pages.

Site imagery and other visual assets are stored within the project's asset directories.

---

## Deployment

The website is deployed using **Vercel**.

The custom domain is:

```text
sunsistersspraytanning.com
```

DNS is managed separately through the domain provider.

HTTPS is enabled for the production site.

---

## Developer

Designed and developed by **Matthew Courtney**.

---

© Sun Sisters Spray Tanning
