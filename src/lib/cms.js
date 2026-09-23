// Base URL of the Asantehene Golf admin CMS (Node). It is served under /admin
// on the main domain; override with VITE_CMS_URL for local development.
export const CMS_URL = (import.meta.env.VITE_CMS_URL || "https://asantehenegolf.com/admin").replace(/\/+$/, "");
