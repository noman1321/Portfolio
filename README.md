<img width="1943" height="1093" alt="image" src="https://github.com/user-attachments/assets/cc2ff955-17c2-48c7-81c8-479a0f061850" />

# Portfolio

A modern, minimalist portfolio website built with Astro and Tailwind CSS. Features a dark cosmic theme with smooth GSAP animations and a fully responsive design.

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[GSAP](https://greensock.com/gsap/)** - Professional animation library
- **TypeScript** - For type-safe configuration

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── scripts/
│   │   └── animations.ts    # GSAP animations
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## Local Development

If you'd like to run it locally:

```bash
git clone https://github.com/noman1321/Portfolio.git
cd Portfolio
npm install
npm run dev
```

## Deployment

The portfolio can be deployed to any static hosting service:

- [Netlify](https://docs.astro.build/en/guides/deploy/netlify/)
- [Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Cloudflare Pages](https://docs.astro.build/en/guides/deploy/cloudflare/)

## License

This project is fully and completely MIT. See LICENSE.md.
