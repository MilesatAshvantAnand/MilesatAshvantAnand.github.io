# MilesatAshvantAnand.github.io

Personal website of Ashvant Anand.

## Overview
A minimal, text-first personal website designed to be fast, lightweight, and content-focused.
Hosted gracefully on **GitHub Pages**.

## Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: Custom variables, flexbox, and animations.
- **JavaScript**: Minimal interactions (smooth scroll, fade-ins).

## Hosting
This site is hosted as a **static site** on GitHub Pages.
- **URL**: [https://milesatashvantanand.github.io/](https://milesatashvantanand.github.io/)

### Contact Form
The contact form uses [Formspree](https://formspree.io/) (or a compatible static form handler) to send emails without requiring a backend server.
- **Setup**: Update the `<form action="...">` URL in `index.html` with your own Formspree endpoint.

## Local Development
To run locally, you can simply open `public/index.html` in your browser, or use a simple static server:
```bash
npx serve public
```
*(No `npm start` or Node.js backend required)*
