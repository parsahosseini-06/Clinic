/** Style reminder — مقاله‌ها باید دقیق، اسکن‌پذیر و مسئولانه باشند؛ CTA تماس در حاشیه، بدون فشار یا ادعای قطعی. */
import { ArrowLeft, ChevronLeft, Phone } from "lucide-react";
import { Link, useRoute } from "wouter";
import { HeartPulse } from "lucide-react";
import { PhoneCTA } from "@/components/PhoneCTA";
import { Seo } from "@/components/Seo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getArticle, SITE } from "@/lib/site-data";
import NotFound from "@/pages/NotFound";

export default function BlogArticle() {
  const [, params] = useRoute("/blog/:slug");
  const article = getArticle(params?.slug ?? "");
  if (!article) return <NotFound />;
  const schema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.metaDescription, image: article.image ? [article.image] : undefined, mainEntityOfPage: `${SITE.canonicalOrigin}/blog/${article.slug}`, author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: SITE.logoUrl } }, inLanguage: "fa" };
  return <div className="roma-page article-page">
    <Seo title={`${article.title} | کلینیک دامپزشکی روما`} description={article.metaDescription} path={`/blog/${article.slug}`} image={article.image ?? SITE.images.hero} type="article" schema={schema} />
    <SiteHeader current="blog" />
    <main className="article-shell shell">
      <article className="article-content">
        <nav className="breadcrumbs" aria-label="مسیر صفحه"><Link href="/">خانه</Link><ChevronLeft size={13} aria-hidden="true" /><Link href="/blog">وبلاگ</Link><ChevronLeft size={13} aria-hidden="true" /><span>{article.category}</span></nav>
        <header><span className="article-category">{article.category}</span><h1>{article.title}</h1><p className="article-lede">{article.intro}</p></header>
        {article.image ? <figure className="article-cover"><img src={article.image} alt={article.imageAlt} /></figure> : <div className="article-cover article-image-fallback"><HeartPulse size={64} aria-hidden="true" /></div>}
        {article.sections.map((section) => <section className="article-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
        <aside className="article-disclaimer">این نوشته برای آگاهی عمومی است و جایگزین معاینه، تشخیص یا توصیهٔ اختصاصی دامپزشک نیست. اگر وضعیت حیوان‌تان نگران‌کننده است یا تغییری ناگهانی می‌بینید، با کلینیک تماس بگیرید و برای مراجعه راهنمایی بخواهید.</aside>
        <section className="article-sources" aria-labelledby="sources-title"><h2 id="sources-title">منابع آموزشی</h2><ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></section>
      </article>
      <aside className="article-aside"><span className="article-category">نیاز به راهنمایی دارید؟</span><h2>شرایط هر حیوان می‌تواند متفاوت باشد.</h2><p>برای بررسی زمان مراجعه یا مطرح‌کردن پرسش‌های اولیه دربارهٔ حیوان خانگی‌تان، با کلینیک تماس بگیرید.</p><PhoneCTA label="تماس با کلینیک" /><Link className="article-aside-link" href="/blog">همهٔ مقاله‌ها <ArrowLeft size={15} aria-hidden="true" /></Link></aside>
    </main><SiteFooter />
  </div>;
}
