# Rajkumar R. — Developer Portfolio

A responsive personal portfolio for Rajkumar R., Java Backend Developer. Built with semantic HTML, CSS, vanilla JavaScript, and Vite for local development and production builds.

## Run locally

```sh
npm install
npm run dev
```

Create the production site with `npm run build`; preview it locally with `npm run preview`.

## Project structure

```text
.
├── assets/
│   ├── favicon.svg
│   ├── images/profile.jpg
│   └── resume/Rajkumar_Resume.pdf
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── script.js
├── style.css
└── vite.config.js
```

The portrait and resume are the files provided in `src/`. Update the assets in `assets/` when replacing either file.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site, and publishes `dist/` when changes are pushed to `main` (or when manually dispatched). Vite uses `/developer-portfolio/` as its base path.

1. Push the repository to GitHub and open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` and follow the deployment in the **Actions** tab.

The requested public URL is <https://rajkumar2504.github.io/developer-portfolio/>. For that exact address, the GitHub repository must be named `developer-portfolio`. This checkout's current `origin` is `rajkumar2504/Portfolio`; GitHub Pages uses that repository name in its project-site URL. All page and asset links are relative so the site works under either repository name.

The site uses Vite as a build tool and does not require a frontend framework runtime.

## Links

- GitHub: <https://github.com/rajkumar2504>
- LinkedIn: <https://www.linkedin.com/in/rajkumar2504/>
- Email: <mailto:rajkumar805680@gmail.com>
