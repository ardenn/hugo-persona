[![Netlify Status](https://api.netlify.com/api/v1/badges/ca113dd3-1357-4d70-8c63-3dfb699ef3d0/deploy-status)](https://app.netlify.com/sites/ardenn/deploys)

# Hugo Persona theme

This is a minimalistic hugo theme for personal websites with dark mode support.

[Live Demo](https://hugo-persona.netlify.app)

- Built with:
  - VSCode
  - HTML + CSS + JS
  - Hugo
  - [TailwindCSS](https://tailwindcss.com/)
  - Netlify

## Usage
- Install the HugoPersona theme into your hugo project (Outside the scope of this README)

- Update the hugo config with the required params:

```
baseURL: /
languageCode: en-us
title: Hugo Persona // this is the site title
params:
  name: "Hugo Persona" // this is the site owner's name
  gtag: // this is the Google Analytics key
  description:
  title: // this is the site HTML title
  keywords: // a comma separated list of SEO keywords
build:
  writeStats: true //enable this since the stats are used by the tailwind JIT for purging CSS
  useResourceCacheWhen: fallback
paginate: 5
```
- Write the site content.
## Development (Customising the theme)

- Start the tailwind JIT engine using:
`npx tailwindcss -i ./themes/hugo-persona/assets/css/main.css -o ./themes/hugo-persona/assets/css/styles.css --watch`

- Start the hugo server using:
`hugo server -D`

- Happy development!
## Licence
[MIT](https://choosealicense.com/licenses/mit/#)