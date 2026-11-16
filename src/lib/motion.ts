/** Media query de preferência por movimento reduzido. */
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Retorna `true` quando o usuário prefere menos animações. */
export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
