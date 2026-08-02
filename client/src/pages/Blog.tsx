/** Style reminder — وبلاگ باید آموزشی، آرام و تماس‌محور باشد؛ از زبان قطعی درمانی پرهیز کن. */
import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "wouter";
import { HeartPulse } from "lucide-react";
import { PhoneCTA } from "@/components/PhoneCTA";
import { Seo } from "@/components/Seo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { articles, SITE } from "@/lib/site-data";

export default function Blog() {
  const schema = { "@context": "https://schema.org", "@type": "Blog", name: "مجلهٔ مراقبت کلینیک دامپزشکی روما", url: `${SITE.canonicalOrigin}/blog`, blogPost: articles.map((article) => ({ "@type": "BlogPosting", headline: article.title, url: `${SITE.canonicalOrigin}/blog/${article.slug}`, description: article.metaDescription })) };
  return <div className="roma-page blog-page">
    <Seo title="مجلهٔ مراقبت از حیوانات خانگی | کلینیک دامپزشکی روما" description="راهنماهای کاربردی و مسئولانهٔ مراقبت، واکسیناسیون، چکاپ و سلامت دهان و دندان سگ و گربه از کلینیک دامپزشکی روما." path="/blog" image={SITE.images.vaccine} schema={schema} />
    <SiteHeader current="blog" />
    <main id="main-content">
      <section className="page-hero" aria-labelledby="blog-page-title"><div className="shell page-hero-grid"><div><span className="section-kicker">مجلهٔ مراقبت روما</span><h1 id="blog-page-title">راهنماهای کوتاه برای مراقبت آگاهانه‌تر از همراه کوچک‌تان.</h1><p>مطلب‌های این صفحه برای آماده‌شدن بهتر پیش از تماس و گفت‌وگو با دامپزشک نوشته شده‌اند؛ جایگزین معاینه، تشخیص یا توصیهٔ شخصی نیستند.</p></div><aside className="page-hero-callout"><strong>برای شرایط اختصاصی حیوان‌تان تماس بگیرید.</strong><p>هر حیوان سابقه و نیازهای خود را دارد. برای هماهنگی و راهنمایی مراجعه، تماس تلفنی بهترین نقطهٔ شروع است.</p><a href={SITE.phoneHref}><Phone size={16} aria-hidden="true" />{SITE.phoneDisplay}</a></aside></div></section>
      <section className="section section-paper"><div className="shell blog-grid"><div className="blog-list">{articles.map((article) => <article className="article-card" key={article.slug}><div className="article-image">{article.image ? <img src={article.image} alt={article.imageAlt} /> : <div className="article-image-fallback"><HeartPulse size={45} aria-hidden="true" /></div>}</div><div className="article-card-body"><span className="article-category">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><Link className="article-card-link" href={`/blog/${article.slug}`}>خواندن مقاله <ArrowLeft size={15} aria-hidden="true" /></Link></div></article>)}</div><aside className="blog-sidebar"><h2>برای یک تماس مفید آماده شوید.</h2><p>سن، سابقهٔ واکسیناسیون، تغییرهای رفتاری و پرسش‌هایی که دارید را یادداشت کنید. این کار گفت‌وگو با کلینیک را روشن‌تر می‌کند.</p><PhoneCTA label="تماس با کلینیک" /><hr /><p>موضوع‌های فعلی</p><div className="blog-topics"><span className="blog-topic">واکسیناسیون</span><span className="blog-topic">دهان و دندان</span><span className="blog-topic">چکاپ</span><span className="blog-topic">مراقبت پیشگیرانه</span></div></aside></div></section>
    </main><SiteFooter />
  </div>;
}
