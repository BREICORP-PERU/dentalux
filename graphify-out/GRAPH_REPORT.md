# Graph Report - dentalux  (2026-11-04)

## Corpus Check
- 31 files · ~10,320 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 162 nodes · 309 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `50ca0aad`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- page.tsx
- layout.tsx
- compilerOptions
- site.ts
- Footer.tsx
- next
- dependencies
- DentaLux Clínica Dental
- AGENTS.md
- postcss.config.mjs
- WhatsAppButton.tsx

## God Nodes (most connected - your core abstractions)
1. `siteConfig` - 17 edges
2. `next` - 16 edges
3. `compilerOptions` - 16 edges
4. `lucide-react` - 14 edges
5. `framer-motion` - 12 edges
6. `react` - 11 edges
7. `Home()` - 9 edges
8. `RootLayout()` - 6 edges
9. `getSiteUrl()` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `WhatsAppButton()`  [EXTRACTED]
  src/app/layout.tsx → src/components/ui/WhatsAppButton.tsx
- `Home()` --calls--> `FAQ()`  [EXTRACTED]
  src/app/page.tsx → src/components/sections/FAQ.tsx
- `Home()` --calls--> `Gallery()`  [EXTRACTED]
  src/app/page.tsx → src/components/sections/Gallery.tsx
- `robots()` --calls--> `getSiteUrl()`  [EXTRACTED]
  src/app/robots.ts → src/config/site.ts
- `sitemap()` --calls--> `getSiteUrl()`  [EXTRACTED]
  src/app/sitemap.ts → src/config/site.ts

## Import Cycles
- None detected.

## Communities (13 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.08
Nodes (29): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.4.3, tailwindcss@^4, @tailwindcss/postcss@^4, @types/node@^20, @types/react@^19 (+21 more)

### Community 1 - "page.tsx"
Cohesion: 0.25
Nodes (12): lucide-react, Home(), TRUST_ITEMS, About(), Hero(), Locations(), ICON_MAP, Services() (+4 more)

### Community 2 - "layout.tsx"
Cohesion: 0.13
Nodes (18): framer-motion, dentistSchema, faqSchema, inter, metadata, outfit, RootLayout(), safeJsonLd() (+10 more)

### Community 3 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "site.ts"
Cohesion: 0.11
Nodes (14): nextConfig, next, robots(), sitemap(), BrandMarkProps, DENTALUX_ADDRESS, DocumentationStatus, FaqItem (+6 more)

### Community 5 - "Footer.tsx"
Cohesion: 0.25
Nodes (10): react, Gallery(), SOCIAL_LINKS, navigation, SOCIAL_ICON_MAP, FacebookIcon(), InstagramIcon(), TikTokIcon() (+2 more)

### Community 6 - "next"
Cohesion: 0.53
Nodes (3): alt, contentType, size

### Community 7 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, clsx@^2.1.1, framer-motion@^12.38.0, lucide-react@^1.14.0, next@16.4.3, react@19.2.4, react-dom@19.2.4, tailwind-merge@^3.5.0 (+3 more)

### Community 8 - "DentaLux Clínica Dental"
Cohesion: 0.33
Nodes (5): Comandos de calidad, Datos comerciales, DentaLux Clínica Dental, Desarrollo, Variables de entorno

### Community 12 - "WhatsAppButton.tsx"
Cohesion: 0.60
Nodes (4): WhatsAppIcon(), buildWhatsAppUrl(), QUICK_TREATMENTS, WhatsAppButton()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `site.ts` to `package.json`, `page.tsx`, `layout.tsx`, `Footer.tsx`, `next`, `dependencies`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08387096774193549 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `page.tsx` to `package.json`, `layout.tsx`, `Footer.tsx`, `dependencies`, `WhatsAppButton.tsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13405797101449277 - nodes in this community are weakly interconnected._
- **Why does `framer-motion` connect `layout.tsx` to `package.json`, `page.tsx`, `Footer.tsx`, `dependencies`, `WhatsAppButton.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `site.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11462450592885376 - nodes in this community are weakly interconnected._