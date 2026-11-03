# Technical Notes

## HTML

* **Semantic Structure:** Utilized modern HTML5 semantic elements (`<nav>`, `<main>`, `<section>`, `<footer>`) to ensure clean document outline and improved screen reader accessibility.

* **Asset Optimization & Preconnecting:** Integrated Google Fonts (`Roboto`) using `<link rel="preconnect">` to eliminate render-blocking DNS lookup delays.

* **Viewport Configuration:** Implemented `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to guarantee correct scaling and responsive layout rendering across mobile and desktop viewports.

* **Custom UI Icons:** Embedded inline SVGs for mobile hamburger navigation and close triggers, ensuring crisp vector rendering and fast load times without external icon font dependencies.

## JavaScript

* **DOM Manipulation:** Implemented custom event handlers (`showSidebar()` and `hideSidebar()`) to dynamically toggle CSS classes for mobile navigation.

* **Interactive Lightbox Module (`lightbox.js`):** Built vanilla JavaScript event listeners to capture image click events, dynamically pass source paths, and toggle a fixed-position overlay modal for full-size image inspection.
* **Form Validation & AJAX:** Implemented client-side input validation checking alongside asynchronous AJAX form submission handling to ensure seamless user feedback without full page reloads.

## Utlitizing Java Experience

* **Modular Code Practices:** Separated global scripts (`script.js`) from component-specific functionality (`lightbox.js`), keeping code maintainable and easy to debug.

* **State Management:** Handled UI visibility states cleanly through programmatic class toggling rather than inline style manipulation, adhering to separation of concerns.

* **Regex Implementation:** Successfully ported basic validation patterns in custom validation scripts (`contactForm.js`).

## CSS

* **Custom Layout Structures:** Leveraged CSS Flexbox for alignment, CSS Grid for content blocks, and CSS Scroll Snap (`scroll-snap-type: x mandatory`) for horizontal carousels without heavy JavaScript libraries.

* **Brand-Aligned Aesthetic:** Designed a dark, high-contrast theme (inspired by Virgin Active) utilizing muted greys (`rgba(35, 35, 35)`), deep blacks, and linear gradients (`linear-gradient(to right, grey, black)`) for interactive element states.

* **Precision Image Framing:** Solved responsive clipping issues by pairing `background-size: cover` with customized `background-position` coordinate rules (e.g., `center 10%`), ensuring athlete subjects remain perfectly framed across varying screen sizes.

* **Responsive Fluidity:** Implemented custom media queries (`@media screen and (max-width: 766px)`) to gracefully collapse multi-column rows into single-column mobile layouts.

## Project Documentation

* **Project Tracking (`tasks.txt`):** Maintained task-based progress logs separating HTML, CSS, JavaScript, and documentation milestones.

* **Version History (`CHANGELOG.md`):** Documented changes, feature additions (such as the Nutrition manifesto cards and lightbox), and maintenance updates.

* **Readability Standards:** Utilized standard Markdown formatting (headers, bullet points, code blocks) to ensure documentation is structured clearly.
