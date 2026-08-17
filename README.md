# BUBO Legal — Sitio web

Sitio de BUBO Legal, firma de abogados especializada en derecho laboral colombiano.
Construido con Next.js 14 (App Router), TypeScript en modo estricto, Tailwind CSS y Framer Motion.

## Stack

- **Next.js 14** — App Router, Server Components, `next/image`, `next/font`, `sitemap.ts` y `robots.ts`.
- **TypeScript** estricto.
- **Tailwind CSS 3** con los tokens de marca (negros `#0A0A0A`–`#222222`, dorados `#A07830`–`#F5ECD7`).
- **Framer Motion** para animaciones de entrada y acordeones.
- **Lucide React** para iconografía.
- **MDX local** (`next-mdx-remote` + `gray-matter`) para el blog.
- **Resend** para el envío de correos del formulario de contacto.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completa las variables necesarias
npm run dev                  # http://localhost:3000
```

Scripts disponibles:

| Script              | Descripción            |
| ------------------- | ---------------------- |
| `npm run dev`       | Servidor de desarrollo |
| `npm run build`     | Build de producción    |
| `npm start`         | Servidor de producción |
| `npm run lint`      | ESLint (`next lint`)   |
| `npm run typecheck` | `tsc --noEmit`         |
| `npm run format`    | Prettier               |

## Variables de entorno

Ver `.env.example`. Sin `RESEND_API_KEY` el formulario sigue funcionando: valida los datos y
responde con éxito, pero no envía correo (queda registrado en los logs del servidor).

## Estructura

```
src/
├── app/                  # rutas (App Router), sitemap.ts, robots.ts, api/contacto
│   ├── servicios/        # 7 páginas de servicio generadas desde src/lib/services.ts
│   └── blog/[slug]/      # artículos MDX de src/content/blog
├── components/
│   ├── blog/ faq/ forms/ home/ layout/ seo/ services/ ui/
├── content/blog/         # artículos en MDX con frontmatter
└── lib/                  # site.ts, services.ts, faq.ts, team.ts, blog.ts, seo.ts, utils.ts
```

Contenido y datos centralizados:

- `src/lib/site.ts` — marca, contacto, dirección, horarios, redes y estadísticas.
- `src/lib/services.ts` — modelo tipado de las 7 áreas de práctica; cada página de servicio se
  renderiza a partir de estas secciones (`prose`, `cards`, `timeline`, `accordion`, `table`,
  `pricing`, `calculator`, `checklist`, …).
- `src/lib/faq.ts` — preguntas frecuentes por categoría (alimenta el schema `FAQPage`).
- `src/lib/team.ts` — perfiles del equipo, hitos y reconocimientos.

## Contenido pendiente de reemplazo

Los siguientes datos son **placeholders** y deben actualizarse con la información real de la firma:

- Dirección, teléfonos, correo y WhatsApp en `src/lib/site.ts`.
- Perfiles, tarjetas profesionales y enlaces de LinkedIn en `src/lib/team.ts`.
- Fotografías del equipo y del hero (hoy imágenes de Unsplash).
- Testimonios de la página de inicio y de la página de consultoría empresarial.

## SEO

- Metadata por página con canonical, Open Graph (`es_CO`) y Twitter Cards.
- JSON-LD: `LegalService` global, `Service` por área, `FAQPage`, `Article` y `BreadcrumbList`.
- `sitemap.xml` y `robots.txt` dinámicos según `NEXT_PUBLIC_SITE_URL`.

## Deploy en Vercel

```bash
npm install -g vercel
vercel login
vercel link --project bubolegal
vercel --prod
```

Configura en el proyecto de Vercel las variables de `.env.example`
(`NEXT_PUBLIC_SITE_URL=https://bubolegal.vercel.app`).

## Aviso

El contenido jurídico del sitio es informativo y no constituye asesoría jurídica.
