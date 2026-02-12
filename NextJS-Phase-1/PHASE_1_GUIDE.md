# Next.js Phase 1: Fundamentals - Learning Guide

**Simple guide. No code. Just concepts and requirements.**

---

## 📋 Mini Project 1.1: Routing Basics

**Duration:** 2-3 hours  
**Concepts:** File-based routing, layouts, navigation

### What to Build

A small multi-page site with:
- Home, About, and Contact pages
- A shared layout with header and footer
- Navigation links between pages

### Requirements

**Functional:**
- Home page with intro section
- About page with 2 sections
- Contact page with a simple form (no backend)
- Navigation links highlight active page

**Technical:**
- File-based routes in `app/`
- Shared layout in `app/layout.js`
- Use `Link` for navigation

### Success Checklist

- ⬜ Routes work for all pages
- ⬜ Layout is shared across pages
- ⬜ Navigation uses `Link`
- ⬜ No console errors

---

## 📋 Mini Project 1.2: Data Fetching (SSR/SSG)

**Duration:** 3-4 hours  
**Concepts:** Server components, fetch, caching, ISR

### What to Build

A data page that:
- Fetches data from a public API
- Shows list of items
- Demonstrates static vs dynamic rendering

### Requirements

**Functional:**
- Fetch from a public API (e.g., JSONPlaceholder)
- Show loading and error states
- Provide a button to refresh data

**Technical:**
- Use server component for initial fetch
- Use `fetch` with caching rules
- Explain in comments whether page is SSG or SSR

### Success Checklist

- ⬜ Data shows correctly
- ⬜ Errors handled
- ⬜ Clear rendering mode
- ⬜ No console errors

---

## 📋 Mini Project 1.3: API Routes

**Duration:** 2-3 hours  
**Concepts:** Route handlers, JSON responses

### What to Build

A simple API with:
- GET endpoint returning JSON
- POST endpoint accepting a payload
- Consumed by a small UI form

### Requirements

**Functional:**
- Form submits data to API route
- Response displayed on screen
- Error handling for invalid input

**Technical:**
- Route handlers in `app/api/`
- Use `NextResponse`
- Validate request payload

### Success Checklist

- ⬜ GET route works
- ⬜ POST route works
- ⬜ UI consumes API
- ⬜ No console errors

---

## 📋 Mini Project 1.4: Image and Metadata

**Duration:** 2-3 hours  
**Concepts:** next/image, metadata

### What to Build

A page that:
- Uses `next/image` for optimized images
- Defines metadata (title, description)
- Includes Open Graph tags

### Requirements

**Functional:**
- Images load with proper sizing
- Metadata visible in page source

**Technical:**
- Use `metadata` export
- Use `Image` component
- Provide alt text for images (required by `Image`)

### Success Checklist

- ⬜ Images optimized
- ⬜ Metadata set
- ⬜ No console errors

---

## 🏆 CAPSTONE PROJECT: Next.js Starter Portfolio

**Duration:** 1-2 weeks  
**Concepts:** All Phase 1 concepts combined

### What to Build

A small portfolio site with:
- Home, Projects, About, Contact
- API route for contact form
- Optimized images and metadata
- Mixed static and dynamic data pages

### Requirements

**Must Have Features:**
- Shared layout with navigation
- At least 4 pages
- One dynamic data page
- API route for form submit
- SEO metadata on each page
- Image optimization with `next/image`

### Success Checklist

- ⬜ All pages work
- ⬜ API route works
- ⬜ Images optimized
- ⬜ Metadata set
- ⬜ No console errors

---

**Phase 1 builds your Next.js foundation.**
