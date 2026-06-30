# AM/NS India — Informational Website

A clean, fast, responsive multi-page website for **AM/NS India** (ArcelorMittal
Nippon Steel India Limited), built as a static site with no framework or build
step. The content is compiled from publicly available information.

> **Disclaimer:** This is an unofficial, informational/demo website. It is not
> affiliated with, endorsed by, or the official website of ArcelorMittal Nippon
> Steel India Ltd. For official information, visit
> [amns.in](https://www.amns.in/).

## Pages

| Page | File | Contents |
|------|------|----------|
| Home | `index.html` | Hero, key stats, company intro, product & operations highlights |
| About | `about.html` | Overview, vision/mission/values, history timeline, leadership |
| Products | `products.html` | Hot rolled (Stallion), cold rolled, coated, automotive AHSS, pipes, pellets |
| Operations | `operations.html` | Hazira, Paradip, Vizag, Pune, Rajayyapeta + capacity roadmap |
| Sustainability | `sustainability.html` | Decarbonisation targets, ESG pillars, CSR |
| Contact | `contact.html` | Demo enquiry form + contact details |

## Tech

- **HTML5 + CSS3 + vanilla JavaScript** — no dependencies, no build tooling.
- Responsive layout (mobile nav, fluid grids, `clamp()` typography).
- Progressive enhancement: animated stat counters and scroll-reveal via
  `IntersectionObserver`, with graceful fallback.
- `css/styles.css` — single design system / stylesheet.
- `js/main.js` — nav toggle, scroll reveal, counters, demo form handling.

## Run locally

It's a static site — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Key facts referenced (publicly reported)

- 60:40 joint venture between **ArcelorMittal** and **Nippon Steel**, formed
  **December 2019** after acquiring **Essar Steel India** under the IBC process.
- CEO: **Dilip Oommen**.
- Flagship **Hazira** integrated steel plant (Gujarat) — one of the largest
  single-location flat steel mills in the world; ~9 MTPA today, expanding to
  ~15 MTPA by 2026, with a roadmap to 24 MTPA by 2030 and a long-term vision of
  40 MTPA.
- Pellet plants and captive ports at **Paradip** (Odisha) and **Vizag** (Andhra
  Pradesh); downstream base at **Pune**; new greenfield mill at **Rajayyapeta**,
  Andhra Pradesh.
- India's first CGL capable of **Advanced High-Strength Steel up to 1180 MPa**;
  product brand **Stallion** for hot rolled steel.
- Sustainability targets: ~20% CO₂-intensity reduction by 2030 (vs 2021,
  to ~1.8 tCO₂/tcs), ~7 GW renewable energy by 2032, CCU and ZLD at new plants.

### Sources

- AM/NS India official site — https://www.amns.in/
- Nippon Steel press releases — https://www.nipponsteel.com/en/news/
- ArcelorMittal corporate — https://corporate.arcelormittal.com/
- Reporting from Business Standard, Construction Week, Mining-Technology and GMK Center.

> Figures are approximate and drawn from public reporting at the time of
> writing; refer to official AM/NS India disclosures for authoritative numbers.
