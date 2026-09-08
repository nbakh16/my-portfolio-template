# Portfolio Personal

Portafolio personal y profesional de **Julián Camilo Carvajal Mejía**.

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm o un gestor de paquetes equivalente

## Instalación

```bash
git clone https://github.com/INOTJuannnka/PortfolioJulian.git
cd PortfolioJulian
npm install
```

## Variables de entorno

Copia `.env.example` a `.env` y ajusta los valores si es necesario:

```bash
cp .env.example .env
```

| Variable | Descripción | Default |
|---|---|---|
| `PUBLIC_API_URL` | Endpoint de API externa (opcional, usa datos locales en `src/data/` por defecto) | — |
| `SITE_URL` | URL del sitio para build/producción (ej. `https://INOTJuannnka.github.io`) | Valor de `home.json` |
| `SITE_BASE` | Base para subruta (ej. `/PortfolioJulian/`). Requerido solo en GitHub Pages de proyecto | — |

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |

## Estructura del proyecto

```
src/
├── assets/        # Imágenes y recursos estáticos
├── components/    # Componentes Astro
├── config.ts      # Configuración general
├── data/          # Datos del portafolio (JSON)
├── layouts/       # Layouts base
├── pages/         # Rutas (index.astro, [lang]/index.astro)
├── styles/        # Estilos globales
└── utils/         # Utilidades
```

## Stack tecnológico

- **[Astro](https://astro.build/)** — Framework para sitios estáticos (SSG)
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework de utilidades CSS
- **[astro-icon](https://www.astroicon.dev/)** — Iconos con Iconify/Devicon
- **i18n** — Internacionalización (Español/Inglés) mediante enrutamiento dinámico

## Despliegue

### GitHub Pages

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que construye y despliega el sitio automáticamente en GitHub Pages al hacer push a la rama `master`.

El sitio se publica en: **https://INOTJuannnka.github.io/PortfolioJulian/**

El workflow inyecta `SITE_URL` y `SITE_BASE` en el build para que Astro genere las URLs y los assets con la subruta `/PortfolioJulian/`. Si cambias el usuario o el nombre del repositorio, actualiza ambos valores en el workflow.

Para activarlo:

1. Activa GitHub Pages en tu repositorio con **Source: GitHub Actions** (Settings → Pages).
2. Haz push de los cambios; el workflow se encargará del build y despliegue.

### Netlify

El proyecto también incluye `netlify.toml` para despliegue automático en Netlify. Para dominio raíz, no se define `SITE_BASE` (Astro usa `/` por defecto).

## Licencia

[MIT](LICENSE)
