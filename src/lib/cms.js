// Base URL of the Asantehene Golf CMS (Laravel). The CMS is served under /cms
// on the main domain; override with VITE_CMS_URL for local development.
export const CMS_URL = (import.meta.env.VITE_CMS_URL || "https://asantehenegolf.com/cms").replace(/\/+$/, "");
