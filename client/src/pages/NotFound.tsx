/** Style reminder — صفحهٔ خطا هم باید آرام، کاربردی و دارای مسیر روشن بازگشت به سایت یا تماس باشد. */
import { Home, Phone } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site-data";

export default function NotFound() {
  return <div className="roma-page"><Seo title="صفحه پیدا نشد | کلینیک دامپزشکی روما" description="این صفحه در دسترس نیست. برای بازگشت به سایت یا تماس با کلینیک دامپزشکی روما از پیوندهای زیر استفاده کنید." path="/404" noIndex /><SiteHeader /><main className="not-found"><section className="not-found-card" aria-labelledby="not-found-title"><span>۴۰۴</span><h1 id="not-found-title">این مسیر پیدا نشد.</h1><p>می‌توانید به صفحهٔ اصلی برگردید یا برای هماهنگی با کلینیک دامپزشکی روما تماس بگیرید.</p><div className="hero-buttons" style={{ justifyContent: "center" }}><Link className="button-secondary" href="/"><Home size={17} aria-hidden="true" />صفحهٔ اصلی</Link><a className="button-primary" href={SITE.phoneHref}><Phone size={17} aria-hidden="true" />تماس با کلینیک</a></div></section></main><SiteFooter /></div>;
}

