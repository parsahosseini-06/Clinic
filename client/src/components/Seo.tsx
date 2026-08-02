/** Style reminder — سئو باید دقیق، شفاف و قابل‌خزش باشد؛ از ادعاهای پزشکی یا محلیِ تاییدنشده دوری کن. */
import { useEffect } from "react";
import { SITE } from "@/lib/site-data";

type SeoProps = { title: string; description: string; path: string; image?: string; type?: "website" | "article"; schema?: Record<string, unknown>; noIndex?: boolean };

function fullUrl(path: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : SITE.canonicalOrigin;
  return new URL(path, origin).toString();
}

function meta(selector: string, attrs: Record<string, string>) {
  let item = document.head.querySelector<HTMLMetaElement>(selector);
  if (!item) { item = document.createElement("meta"); document.head.appendChild(item); }
  Object.entries(attrs).forEach(([key, value]) => item?.setAttribute(key, value));
}

export function Seo({ title, description, path, image = SITE.images.hero, type = "website", schema, noIndex = false }: SeoProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    meta('meta[name="description"]', { name: "description", content: description });
    meta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1" });
    meta('meta[property="og:title"]', { property: "og:title", content: title });
    meta('meta[property="og:description"]', { property: "og:description", content: description });
    meta('meta[property="og:type"]', { property: "og:type", content: type });
    meta('meta[property="og:url"]', { property: "og:url", content: fullUrl(path) });
    meta('meta[property="og:image"]', { property: "og:image", content: fullUrl(image) });
    meta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.head.appendChild(document.createElement("link"));
    canonical.rel = "canonical"; canonical.href = fullUrl(path);
  }, [description, image, noIndex, path, title, type]);
  return schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /> : null;
}
