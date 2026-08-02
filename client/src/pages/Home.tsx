/** Style reminder — «مراقبتِ گرم و معتبر»: طراحی نامتقارن، آرام و تماس‌محور با سبز جنگلی، کرم و CTA کهربایی. */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeartbeatLine } from "@/components/HeartbeatLine";
import { LocationMap } from "@/components/LocationMap";
import { PhoneCTA } from "@/components/PhoneCTA";
import { Seo } from "@/components/Seo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { articles, FAQS, SITE } from "@/lib/site-data";
import { ArrowLeft, ArrowUpLeft, CalendarCheck2, CircleUserRound, Clock3, HeartHandshake, HeartPulse, Instagram, MapPin, Phone, Scissors, ShieldCheck, ShoppingBag, SmilePlus, Stethoscope, Syringe } from "lucide-react";
import { Link } from "wouter";

const features = [
  { icon: HeartHandshake, title: "مراقبت با توضیح روشن", text: "در هر مراجعه، پرسش‌های شما دربارهٔ وضعیت حیوان و گام بعدی مراقبت با زبان ساده مرور می‌شود." },
  { icon: ShieldCheck, title: "پیشگیری در کنار درمان", text: "چکاپ و واکسیناسیون با توجه به سن، سبک زندگی و سابقهٔ هر حیوان بررسی می‌شود." },
  { icon: CircleUserRound, title: "دسترسی محلی و راهنمایی تلفنی", text: "پیش از مراجعه می‌توانید تماس بگیرید تا نیاز حیوان خانگی‌تان و زمان حضور را هماهنگ کنیم." },
];
const services = [
  { icon: Stethoscope, title: "چکاپ و معاینه", text: "ارزیابی عمومی و گفت‌وگو دربارهٔ علائم، سابقه و نیازهای مراقبتی حیوان خانگی." },
  { icon: Syringe, title: "واکسیناسیون", text: "بررسی برنامهٔ پیشگیری با توجه به سابقه، سن و سبک زندگی سگ یا گربه." },
  { icon: HeartPulse, title: "جراحی حیوانات", text: "مشاوره و راهنمایی برای خدمات جراحی که نیازمند ارزیابی و هماهنگی قبلی هستند." },
  { icon: SmilePlus, title: "دندان‌پزشکی", text: "رسیدگی به سلامت دهان و دندان حیوانات، از ارزیابی تا راهنمایی مراقبت در خانه." },
  { icon: Scissors, title: "آرایش و بهداشت", text: "خدمات بهداشت و رسیدگی ظاهری برای سگ و گربه با هماهنگی قبلی." },
  { icon: ShoppingBag, title: "پت‌شاپ و ملزومات", text: "راهنمایی برای انتخاب ملزومات مراقبتی موردنیاز در کنار خدمات کلینیک." },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "VeterinaryCare", name: SITE.name, alternateName: "کلینیک دامپزشکی روما", url: SITE.canonicalOrigin, logo: SITE.logoUrl, image: SITE.images.hero, telephone: SITE.phoneInternational, address: { "@type": "PostalAddress", streetAddress: SITE.address, addressLocality: "تهران", addressCountry: "IR" }, areaServed: { "@type": "City", name: "تهران" }, sameAs: [SITE.instagram, SITE.waze] },
      { "@type": "FAQPage", mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };
  return <div className="roma-page">
    <Seo title="کلینیک دامپزشکی روما در نیاوران | دامپزشکی حیوانات خانگی" description="کلینیک دامپزشکی روما در نیاوران؛ ویزیت، واکسیناسیون، چکاپ، جراحی و دندان‌پزشکی حیوانات خانگی. برای هماهنگی و مشاوره تلفنی تماس بگیرید." path="/" image={SITE.images.hero} schema={schema} />
    <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
    <SiteHeader current="home" />
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title"><div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />کلینیک دامپزشکی در نیاوران</span>
          <h1 id="hero-title">کلینیک دامپزشکی <em>روما</em>؛ برای حالِ خوبِ همراه کوچک‌تان.</h1>
          <p className="hero-intro">برای ویزیت، چکاپ، واکسیناسیون و راهنمایی مراقبت از حیوانات خانگی در نیاوران، پیش از مراجعه با کلینیک دامپزشکی روما تماس بگیرید تا هماهنگی بهتری داشته باشیم.</p>
          <div className="hero-buttons"><PhoneCTA label="تماس با کلینیک" /><a className="button-secondary" href="#services">مشاهدهٔ خدمات <ArrowLeft size={17} aria-hidden="true" /></a></div>
          <div className="hero-facts" aria-label="اطلاعات تماس سریع"><span><MapPin size={15} aria-hidden="true" />نیاوران، کاشانک</span><span><CalendarCheck2 size={15} aria-hidden="true" />هماهنگی پیش از مراجعه</span></div>
        </div>
        <div className="hero-visual" aria-label="تصویر مراقبت از سگ در کلینیک دامپزشکی"><div className="hero-image-frame"><img src={SITE.images.hero} alt="سگ در حال دریافت مراقبت آرام از دامپزشک" /></div><div className="hero-float-card"><span className="float-icon"><HeartPulse size={21} aria-hidden="true" /></span><div><strong>مراقبت با حوصله و دلسوزی</strong><span>برای دریافت راهنمایی اولیه، همین حالا تماس بگیرید.</span></div></div></div>
      </div><div className="heartbeat-wrap" aria-hidden="true"><HeartbeatLine /></div></section>

      <section className="stats-band" aria-label="اطلاعات کلیدی کلینیک"><div className="shell stats-grid">
        <div className="stat-item"><strong>۶</strong><span>دسته خدمت اعلام‌شده</span></div><div className="stat-item"><strong>۲</strong><span>راه تماس عمومی</span></div><div className="stat-item"><strong>۱</strong><span>موقعیت در نیاوران</span></div>
      </div></section>

      <section className="section section-soft" id="why-us" aria-labelledby="features-title"><div className="shell">
        <div className="section-heading"><div className="section-heading-copy"><span className="section-kicker">چرا کلینیک روما</span><h2 id="features-title">مراقبت حرفه‌ای، با فضای کافی برای شنیدن شما.</h2></div><p>از تماس اولیه تا مراجعه، تلاش می‌کنیم مسیر مراقبت از حیوان خانگی‌تان روشن، انسانی و قابل پیگیری باشد.</p></div>
        <div className="feature-layout"><aside className="feature-manifesto" aria-label="رویکرد کلینیک"><span className="seal"><HeartHandshake size={24} aria-hidden="true" /></span><h3>یک تماس کوتاه می‌تواند شروعِ یک مراقبت بهتر باشد.</h3><p>برای مطرح‌کردن نگرانی، هماهنگی مراجعه یا پرسش دربارهٔ خدمات، تیم کلینیک پاسخ‌گو است.</p></aside><div className="feature-list">{features.map((feature,index)=>{const Icon=feature.icon;return <article className="feature-row" key={feature.title}><span className="feature-icon"><Icon size={22} aria-hidden="true" /></span><div><h3>{feature.title}</h3><p>{feature.text}</p></div><span className="row-index">۰{index+1}</span></article>})}</div></div>
      </div></section>

      <section className="section section-paper" id="services" aria-labelledby="services-title"><div className="shell">
        <div className="section-heading"><div className="section-heading-copy"><span className="section-kicker">خدمات کلینیک</span><h2 id="services-title">از چکاپ روزمره تا نیازهای تخصصی‌ترِ حیوانات خانگی.</h2></div><p>برای اینکه بدانید کدام خدمت برای شرایط حیوان شما مناسب است، پیش از مراجعه با کلینیک تماس بگیرید.</p></div>
        <div className="services-layout"><article className="service-portrait"><img src={SITE.images.service} alt="معاینهٔ آرام گربه در فضای کلینیک دامپزشکی" /><div className="service-caption"><span>مراقبت پیشگیرانه</span><h3>هر مراجعه فرصتی برای پرسیدن و آگاه‌شدن است.</h3></div></article><div className="service-grid">{services.map((service)=>{const Icon=service.icon;return <article className="service-card" key={service.title}><span className="service-card-icon"><Icon size={21} aria-hidden="true" /></span><h3>{service.title}</h3><p>{service.text}</p></article>})}<div className="service-footnote"><span>نوع و زمان ارائهٔ خدمات پس از بررسی شرایط و هماهنگی تلفنی مشخص می‌شود.</span><PhoneCTA label="هماهنگی تلفنی" variant="text" /></div></div></div>
      </div></section>

      <section className="trust-section" id="feedback" aria-labelledby="feedback-title"><div className="shell trust-grid"><div><span className="section-kicker">بازخوردهای مراجعان</span><h2 id="feedback-title">اعتماد با تجربه‌های واقعی ساخته می‌شود، نه جمله‌های ساختگی.</h2></div><aside className="trust-panel"><span className="quote-mark" aria-hidden="true">“</span><h3>بازخوردهای واقعی را در اینستاگرام کلینیک دنبال کنید.</h3><p>برای شفافیت، در این صفحه هیچ نظر یا امتیازی شبیه‌سازی نشده است. صفحهٔ رسمی کلینیک محل بهتری برای مشاهدهٔ گفت‌وگوها و به‌روزرسانی‌های واقعی است.</p><a href={SITE.instagram} target="_blank" rel="noreferrer">مشاهدهٔ صفحهٔ اینستاگرام <Instagram size={16} aria-hidden="true" /></a></aside></div></section>

      <section className="section section-paper" aria-labelledby="blog-title"><div className="shell"><div className="section-heading"><div className="section-heading-copy"><span className="section-kicker">مجلهٔ مراقبت</span><h2 id="blog-title">دانش کاربردی برای مراقبت آگاهانه‌تر از سگ و گربه.</h2></div><Link className="section-link" href="/blog">همهٔ مقاله‌ها <ArrowUpLeft size={17} aria-hidden="true" /></Link></div><div className="blog-preview-grid">{articles.map((article)=><article className="article-card" key={article.slug}><div className="article-image">{article.image?<img src={article.image} alt={article.imageAlt}/>:<div className="article-image-fallback"><HeartPulse size={43} aria-hidden="true" /></div>}</div><div className="article-card-body"><span className="article-category">{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><Link className="article-card-link" href={`/blog/${article.slug}`}>خواندن مقاله <ArrowLeft size={15} aria-hidden="true" /></Link></div></article>)}</div></div></section>

      <section className="section section-soft" id="faq" aria-labelledby="faq-title"><div className="shell faq-layout"><div className="faq-intro"><span className="section-kicker">سوالات متداول</span><h2 id="faq-title">پیش از تماس، شاید این پاسخ‌ها کمک کند.</h2><p>اگر پاسخ پرسش‌تان اینجا نیست یا علائم جدیدی می‌بینید، تماس بگیرید تا راهنمایی مناسب برای مراجعه دریافت کنید.</p><PhoneCTA label="تماس برای راهنمایی" /></div><Accordion className="faq-accordion" type="single" collapsible>{FAQS.map((faq,index)=><AccordionItem value={`faq-${index}`} key={faq.question}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="location-section" id="location" aria-labelledby="location-title"><div className="location-grid"><div className="location-copy"><span className="location-kicker">مراجعه و دسترسی</span><h2 id="location-title">پیش از حرکت، یک تماس کوتاه داشته باشید.</h2><p>کلینیک دامپزشکی روما در محدودهٔ نیاوران و کاشانک قرار دارد. برای تأیید زمان مراجعه و خدمات موردنیاز، با کلینیک تماس بگیرید.</p><div className="location-details"><div className="location-detail"><MapPin size={19} aria-hidden="true" /><div><strong>نشانی</strong><span>{SITE.address}</span></div></div><div className="location-detail"><Phone size={19} aria-hidden="true" /><div><strong>شمارهٔ تماس</strong><span>{SITE.phoneDisplay}</span></div></div><div className="location-detail"><Clock3 size={19} aria-hidden="true" /><div><strong>زمان مراجعه</strong><span>لطفاً پیش از مراجعه، ساعت حضور را تلفنی تأیید کنید.</span></div></div></div><PhoneCTA label="تماس با کلینیک روما" /></div><LocationMap /></div></section>
    </main>
    <SiteFooter />
    <a className="mobile-callbar" href={SITE.phoneHref}><Phone size={19} aria-hidden="true" />تماس با کلینیک</a>
  </div>;
}
