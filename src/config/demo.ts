/**
 * Demo mode fills the gaps the client has not supplied yet (imagery, dates,
 * media, contact details) so the design can be reviewed as a finished site.
 *
 * It is OFF by default. Enable it only for previews:
 *   PUBLIC_DEMO=true pnpm dev      or      pnpm dev:demo
 *
 * Everything it shows lives in src/data/demo.ts and public/demo/. To remove demo
 * content entirely before launch, delete those two paths and this file, then
 * follow the type errors.
 */
export const isDemo = import.meta.env.PUBLIC_DEMO === "true";
