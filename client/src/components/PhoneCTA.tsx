/** Style reminder — CTA باید تنها یک اقدام روشن و فوری ارائه کند: تماس تلفنی با کلینیک. */
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function PhoneCTA({ label = "تماس با کلینیک", variant = "primary" }: { label?: string; variant?: "primary" | "text" }) {
  if (variant === "text") return <a className="text-phone-link" href={SITE.phoneHref}><Phone size={16} aria-hidden="true" />{label}</a>;
  return <a className="button-primary" href={SITE.phoneHref}><Phone size={18} aria-hidden="true" />{label}</a>;
}
