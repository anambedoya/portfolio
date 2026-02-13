# Portfolio

Personal portfolio website built with HTML, CSS, and JavaScript.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Swiper.js
- i18next (EN / ES / FR translations)
- http-server (local development server)

## Project Structure

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── swiper-bundle.min.css
│   ├── js/
│   │   ├── script.js
│   │   └── swiper-bundle.min.js
│   ├── images/
│   └── pdf/
├── package.json
└── .gitignore
```

## Getting Started

### Node Version

This project targets **Node.js v25.6.1** (latest current release as of February 13, 2026).

If you use `nvm`:

```bash
nvm use
```

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm start
```

Then open:

`http://localhost:3000`

You can also run:

```bash
npm run dev
```

## Available Scripts

- `npm start`: serves the project on port `3000`
- `npm run dev`: alias for `npm start`

## Internationalization (i18n)

The website supports:

- English (`en`)
- Spanish (`es`)
- French (`fr`)

Implementation details:

- Translations are defined in `assets/js/script.js` in the `resources` object.
- Translatable elements use `data-i18n` attributes in `index.html`.
- Language can be changed from the header selector.
- Selected language is stored in `localStorage` under `selected-language`.

### Add or update translations

1. Add/update keys in `resources` (`en`, `es`, `fr`) inside `assets/js/script.js`.
2. Add `data-i18n="your.key"` in `index.html` where needed.
3. Reload the page and switch languages from the selector to verify.

## Styling

- Main styles are in `assets/css/styles.css`.
- The language selector style uses the `.language-select` class.
- Theme colors are controlled by CSS variables in `:root`.

## Notes

- `node_modules/` is ignored via `.gitignore`.
- This is a static site and does not require a build step.
