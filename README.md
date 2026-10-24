# DentaLux Clínica Dental

Sitio web local de DentaLux Clínica Dental en Tingo María, construido con Next.js 16, React 19, TypeScript, Tailwind CSS 4 y Framer Motion.

## Desarrollo

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Variables de entorno

Copia `.env.example` como `.env.local` y define `NEXT_PUBLIC_SITE_URL` antes del despliegue. El dominio no se inventa: mientras no exista un valor confirmado, el sitemap no publica URLs y robots no anuncia un sitemap absoluto.

## Datos comerciales

La identidad visual es provisional. Los servicios, especialistas, fotografías, teléfono y horario deben validarse antes de publicarlos como información confirmada. La configuración central se encuentra en `src/config/site.ts`.

## Comandos de calidad

```bash
npm run lint
npx tsc --noEmit
npm run build
```

No hay despliegue ni remoto Git configurado por este proyecto.
