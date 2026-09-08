// Prefix absolute site-internal paths with Astro's base (required for subpath
// hosting such as GitHub Pages project sites: https://<user>.github.io/<repo>/).
export function assetUrl(path: string | undefined): string {
  if (!path) return '';
  if (/^(https?:|mailto:|tel:|data:|#|\/\/)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}
