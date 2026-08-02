/** Style reminder — Footer پایان گرم و راهنمای تماس است؛ اطلاعات واقعی، شبکهٔ رسمی و پیوندهای کاربردی در اولویت‌اند. */
import { Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { BrandLockup } from "@/components/SiteHeader";
import { SITE } from "@/lib/site-data";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="shell footer-main">
      <div className="footer-brand"><BrandLockup /><p>مراقبت حرفه‌ای و مهربان برای حیوانات خانگی در نیاوران. برای هماهنگی مراجعه و دریافت راهنمایی اولیه با کلینیک تماس بگیرید.</p></div>
      <div><h2 className="footer-heading">دسترسی سریع</h2><ul className="footer-list"><li><Link href="/#services">خدمات کلینیک</Link></li><li><Link href="/#why-us">چرا کلینیک روما</Link></li><li><Link href="/blog">وبلاگ مراقبت</Link></li><li><Link href="/#faq">سوالات متداول</Link></li></ul></div>
      <div><h2 className="footer-heading">در ارتباط باشید</h2><ul className="footer-list"><li><a className="footer-contact-link" href={SITE.phoneHref}><Phone size={15} aria-hidden="true" />{SITE.phoneDisplay}</a></li><li><span><MapPin size={14} aria-hidden="true" /> {SITE.address}</span></li><li><a href={SITE.instagram} target="_blank" rel="noreferrer"><Instagram size={15} aria-hidden="true" /> اینستاگرام رسمی کلینیک</a></li></ul></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} کلینیک دامپزشکی روما. همهٔ حقوق محفوظ است.</span><a href={SITE.waze} target="_blank" rel="noreferrer">مسیریابی با نقشه</a></div>
  </footer>;
}
