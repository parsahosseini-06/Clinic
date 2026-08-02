/** Style reminder — هدر باید حس کلینیک بوتیکِ قابل‌اعتماد را با لوگوی ارسالی و CTA تماس روشن حفظ کند. */
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { SITE } from "@/lib/site-data";

type CurrentPage = "home" | "blog" | undefined;
const navItems = [
  { label: "خدمات", href: "/#services", page: "home" as const },
  { label: "چرا روما", href: "/#why-us", page: "home" as const },
  { label: "وبلاگ", href: "/blog", page: "blog" as const },
  { label: "سوالات متداول", href: "/#faq", page: "home" as const },
  { label: "تماس و نقشه", href: "/#location", page: "home" as const },
];

export function BrandLockup() {
  return <Link href="/" className="brand-lockup" aria-label="صفحهٔ اصلی کلینیک دامپزشکی روما">
    <img className="brand-user-logo" src={SITE.logoUrl} alt="لوگوی کلینیک دامپزشکی روما" />
    <span className="brand-copy"><small>کلینیک دامپزشکی</small><strong>روما</strong></span>
    <img className="brand-mark" src={SITE.logoMarkUrl} alt="" aria-hidden="true" />
  </Link>;
}

export function SiteHeader({ current }: { current?: CurrentPage }) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="shell topbar-inner">
      <a className="topbar-call" href={SITE.phoneHref}><Phone size={13} aria-hidden="true" />هماهنگی و مشاوره: {SITE.phoneDisplay}</a>
      <span className="topbar-note">پیش از مراجعه، تلفنی هماهنگ کنید.</span>
    </div></div>
    <header className="site-header">
      <div className="shell header-inner">
        <BrandLockup />
        <nav className="desktop-nav" aria-label="ناوبری اصلی">{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={current === item.page ? "page" : undefined}>{item.label}</Link>)}</nav>
        <div className="header-actions">
          <a className="header-call" href={SITE.phoneHref} aria-label="تماس با کلینیک دامپزشکی روما"><Phone size={17} aria-hidden="true" /><span>تماس با ما</span></a>
          <button className="menu-button" type="button" aria-label={open ? "بستن منو" : "بازکردن منو"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={22} />}</button>
        </div>
      </div>
      <nav className={`mobile-drawer ${open ? "is-open" : ""}`} aria-label="ناوبری موبایل">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>
    </header>
  </>;
}
