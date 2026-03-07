# Jobbleder

Jobbleder is a web application designed to help craftsmen and small businesses in Norway easily create and manage business documents such as:

- invoices (faktura)
- timesheets (timeliste)
- offers / quotations (tilbud)

The application runs entirely in the browser and allows users to quickly generate professional PDF documents.

---

# Live

https://jobbleder.no

App:

https://app.jobbleder.no

---

# Features

Create and manage:

- invoices
- timesheets
- offers

Additional features:

- generate professional PDF documents
- convert offer → invoice
- convert timesheet → invoice
- store customers and projects
- fast document creation workflow
- simple interface for craftsmen

Free plan:

- unlimited documents
- PDF with watermark

Premium plan:

- custom logo
- watermark removal

---

# Tech Stack

Frontend:

- Next.js
- React
- TypeScript
- TailwindCSS

SEO / Marketing site:

- dynamic SEO landing pages
- blog system
- instruction hub
- structured data (schema.org)
- dynamic OpenGraph images

Other:

- Node.js backend (document generation)
- PDF generation

---

# Project Structure
app/
blogg/
instruksjoner/
(seo)/
components/
content/
blogPosts.ts
seoPages.ts
instructionContent.ts
public/
logo.png
favicon.png
sitemap.ts


Key sections:

- `/` – marketing homepage
- `/blogg` – blog with guides
- `/instruksjoner` – application instructions
- `/timeliste-*` – timesheet SEO pages
- `/faktura-*` – invoice SEO pages
- `/tilbud-*` – offer SEO pages

---

# SEO Architecture

The site is structured around **topic clusters**:

### Timeliste
- timeliste-mal
- timeliste-uke
- timeliste-prosjekt

### Faktura
- fakturaprogram-gratis
- lage-faktura
- faktura-krav

### Tilbud
- tilbud-mal
- lage-tilbud
- tilbud-eksempel

Each cluster is supported by blog articles and internal linking.

---

# Development

Install dependencies:
npm install

Run development server:
npm run dev

Open: 
http//localhost:3000


---

# Deployment

The site is built using **Next.js App Router** and can be deployed to:

- Vercel
- Node server
- Docker

---

# Roadmap

Planned improvements:

- more SEO landing pages
- expanded blog content
- improved OpenGraph images
- additional integrations for document export
- analytics integration

---

# Author

Damian Laskowski  
Software Engineer

GitHub:  
https://github.com/ddlaskowski

LinkedIn:  
https://www.linkedin.com/in/ddlaskowski/

---

# License

Private project – all rights reserved.