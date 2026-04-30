# Pragna Reddy Portfolio

Static fashion design portfolio for D Pragna Reddy. The site presents the projects directly on the webpage as inline case studies with embedded boards, range pages, process notes, and a gallery viewer.

## Files

- `index.html` - main portfolio page
- `styles.css` - responsive visual design
- `script.js` - project filtering and header behavior
- `assets/pdfs/` - resume, full portfolio, and split project PDFs
- `assets/pages/` - rendered portfolio pages used inside the webpage
- `assets/thumbs/` - supporting thumbnails generated from the portfolio PDF
- `CNAME` - custom domain for GitHub Pages

## GitHub Pages

Set GitHub Pages to deploy from the `main` branch root. The included `CNAME` points the site to:

```text
pragnareddyd.com
```

In GoDaddy DNS, point the apex domain to GitHub Pages with A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www`, add a CNAME record:

```text
www -> tharu1233-0406.github.io
```
