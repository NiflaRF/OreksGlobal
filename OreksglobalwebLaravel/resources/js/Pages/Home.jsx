import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    blogPosts,
    chooseCards,
    heroSlides,
    marqueeItems,
    portfolioItems,
    services,
    testimonials,
} from '@/data/site';

function SectionHeading({ subtitle, title, description, center = false }) {
    return (
        <div className={center ? 'sec-heading sec-heading-center' : 'sec-heading'}>
            <span className="sec-subtitle sec-subtitle-mrc">{subtitle}</span>
            <h2 className="sec-title sec-title-mrc">{title}</h2>
            {description ? <p className="sec-desc">{description}</p> : null}
        </div>
    );
}

export default function Home() {
    return (
        <PublicLayout>
            <Head title="OREKS Crush - Vending & Flavour Supply" />

            <main id="primary" className="site-main">
                <section className="tj-banner-mrc-section fix">
                    <div className="tj-banner-slider-wrapper tj__slider-wrapper">
                        <div className="tj-banner-slider swiper">
                            <div className="swiper-wrapper">
                                {heroSlides.map((slide) => (
                                    <div className="swiper-slide" key={slide.title}>
                                        <div className="tj-banner-inner tj-banner-mrc-inner">
                                            <div className="bg-img" data-bg-image={slide.image}></div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="banner-content-wrap">
                                                            <div className="banner-content">
                                                                <div className="banner-content-top">
                                                                    <div className="banner-title-wrapper">
                                                                        <h1 className="banner-title tj-split-text-1">{slide.title}</h1>
                                                                    </div>
                                                                    <div className="banner-action-wrapper">
                                                                        <div className="banner-action tj-fade-anim" data-delay=".6">
                                                                            <Link className="tj-btn-primary tj-btn-primary-mrc" href={slide.buttonHref}>
                                                                                <span className="btn-inner">
                                                                                    <span className="btn-text">
                                                                                        <span>{slide.buttonLabel}</span>
                                                                                    </span>
                                                                                    <span className="btn-icon">
                                                                                        <span><i className="tji-arrow-right-2"></i></span>
                                                                                    </span>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination-wrapper tj-fade-anim" data-delay="1">
                                <div className="swiper-pagination-area swiper-pagination-mrc tj-absolute tj-align-start"></div>
                            </div>
                        </div>
                    </div>
                    <div className="tj-banner-socials-area tj-fade-anim" data-delay=".6">
                        <div className="tj-banner-socials">
                            <div className="tj-banner-socials-inner">
                                <span className="tj-banner-socials-title">Follow us:</span>
                                <ul className="tj-socials tj-socials-mrc tj-socials-dark">
                                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="tji-facebook"></i></a></li>
                                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="tji-instagram"></i></a></li>
                                    <li><a href="https://x.com" target="_blank" rel="noreferrer"><i className="tji-x-twitter"></i></a></li>
                                    <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><i className="tji-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="tj-text-marquee-section">
                    <div className="tj-text-marquee-wrapper">
                        <div className="tj-marquee tj-text-marquee tj-text-marquee-mrc" data-scroll-speed=".6" data-scroll-speed-targeted=".2" data-bg-image="/assets/images/shapes/h3-marquee-bg.png">
                            {marqueeItems.flatMap((item) => [
                                <div className="tj-marquee-item" key={`${item}-1`}>
                                    <div className="tj-text-marquee-title">
                                        {item}
                                        <div className="tj-text-marquee-img">
                                            <img src="/assets/images/icons/marquee-star.png" alt="" />
                                        </div>
                                    </div>
                                </div>,
                                <div className="tj-marquee-item" key={`${item}-2`}>
                                    <div className="tj-text-marquee-title">
                                        {item}
                                        <div className="tj-text-marquee-img">
                                            <img src="/assets/images/icons/marquee-star.png" alt="" />
                                        </div>
                                    </div>
                                </div>,
                            ])}
                        </div>
                    </div>
                </div>

                <section className="tj-choose-mrc-section fix section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <SectionHeading
                                    center
                                    subtitle="[ WHY CHOOSE OREKS ]"
                                    title="Everything You Need To Sell Chilled Drinks"
                                />
                            </div>
                        </div>
                        <div className="row rg-30">
                            {chooseCards.map((card, index) => (
                                <div
                                    className={index === 2 ? 'col-lg-4 tj-fade-anim' : 'col-lg-4 col-md-6 tj-fade-anim'}
                                    data-delay={`.${index + 3}`}
                                    key={card.title}
                                >
                                    <div className={card.featured ? 'choose-box-mrc choose-box-mrc-2' : index === 2 ? 'choose-box-mrc choose-box-mrc-3' : 'choose-box-mrc'}>
                                        <div className="choose-inner">
                                            <div className={card.counter ? 'tj_counter choose-counter' : 'choose-icon'}>
                                                {card.counter ? (
                                                    <>
                                                        <div className="counter_number">
                                                            <span className="counter" data-target={card.counter}>{card.counter}</span>
                                                            <span className="suffix"><sup>+</sup></span>
                                                        </div>
                                                        <div className="counter_label tj-fs-h4">{card.counterLabel}</div>
                                                    </>
                                                ) : (
                                                    <i className={card.icon}></i>
                                                )}
                                            </div>
                                            <div className="choose-content">
                                                <h3 className="title tj-fs-h4">{card.title}</h3>
                                                <p className="desc">{card.description}</p>
                                                <Link className={card.featured ? 'tj-text-btn tj-text-btn-2 tj-text-btn-2-light' : 'tj-text-btn tj-text-btn-2'} href={card.href}>
                                                    <span className="btn-text"><span>Learn More</span></span>
                                                    <span className="btn-icon"><i className="tji-arrow-right-5"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="tj-about-mrc-section section-gap tj-grid-shape-container">
                    <div className="tj-grid-shape">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="66.667" y="66.6665" width="66.6667" height="66.6667" fill="currentColor" />
                            <rect width="66.6667" height="66.6667" fill="currentColor" />
                            <rect x="133.333" width="66.6667" height="66.6667" fill="currentColor" />
                            <rect x="133.333" y="133.333" width="66.6667" height="66.6667" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading tj-about-mrc-heading">
                                    <div className="sec-heading-inner">
                                        <span className="sec-subtitle sec-subtitle-mrc tj-fade-anim" data-direction="top">[ ABOUT OUR COMPANY ]</span>
                                        <h2 className="sec-title sec-title-mrc tj-split-text-1">
                                            <img src="/assets/images/shapes/about-title-line.svg" alt="" /> We equip entrepreneurs with{' '}
                                            <span>vending carts, machines &amp;</span> bold flavours to build a thriving drinks business.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container tj-about-container">
                        <div className="row align-items-lg-end">
                            <div className="col-lg-6 col-xxl-7 about-left about-left-mrc order-lg-1 order-2">
                                <div className="about-img-mrc fix">
                                    <div className="tj-fade-anim" data-delay=".4" data-direction="right">
                                        <img src="/assets/images/oreks/gallery/lorry-van-cart-1.jpg" alt="OREKS Crush vending cart" />
                                    </div>
                                    <div className="tj-fade-anim" data-delay=".4" data-direction="right">
                                        <img src="/assets/images/oreks/gallery/flavor-taps.jpg" alt="OREKS Crush flavour taps" />
                                    </div>
                                    <div className="tj-fade-anim" data-delay=".3" data-direction="right">
                                        <img src="/assets/images/oreks/flavors/orange-fizz.png" alt="OREKS Crush Orange Fizz" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-5 about-content-area order-lg-2 order-1">
                                <div className="about-content about-content-mrc">
                                    <div className="about-desc-mrc-wrapper">
                                        <p className="about-desc about-desc-mrc about-desc-mrc-bold tj-fade-anim">
                                            OREKS Global (Pvt) Ltd supplies carbonated soft drink vending equipment and flavour syrup concentrate across Sri Lanka.
                                        </p>
                                        <p className="about-desc about-desc-mrc tj-fade-anim">
                                            From our outlet in Rajagiriya we help entrepreneurs start and grow a chilled-drinks business with the OREKS Crush brand —
                                            mobile lorry/van carts, shop counters, table top machines, and a steady island-wide supply of 15 signature flavours.
                                        </p>
                                    </div>
                                    <div className="about-bottom about-bottom-mrc">
                                        <div className="about-bottom-left about-bottom-mrc-left">
                                            <ul className="about-list tj-fade-anim">
                                                <li><span><i className="tji-check-3"></i></span>3 vending machine models</li>
                                                <li><span><i className="tji-check-3"></i></span>15 signature flavours</li>
                                                <li><span><i className="tji-check-3"></i></span>Island-wide delivery</li>
                                            </ul>
                                            <div className="about-action-mrc tj-fade-anim">
                                                <Link className="tj-btn-primary tj-btn-primary-mrc" href="/about">
                                                    <span className="btn-inner">
                                                        <span className="btn-text"><span>About OREKS</span></span>
                                                        <span className="btn-icon"><span><i className="tji-arrow-right-2"></i></span></span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tj-service-mrc-section fix section-gap">
                    <div className="container">
                        <div className="row rg-30">
                            <div className="col-xl-4 col-md-6">
                                <div className="col-12">
                                    <SectionHeading
                                        subtitle="[ Explore Services ]"
                                        title="Everything Your Vending Business Needs"
                                        description="A focused set of supply, setup and support services for vending operators."
                                    />
                                    <div className="tj-service-action-mrc tj-fade-anim">
                                        <Link className="tj-btn-primary tj-btn-primary-mrc tj-btn-primary-mrc-sm" href="/services">
                                            <span className="btn-inner">
                                                <span className="btn-text"><span>More Services</span></span>
                                                <span className="btn-icon"><span><i className="tji-arrow-right-2"></i></span></span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {services.map((service, index) => (
                                <div className="col-xl-4 col-md-6 tj-fade-anim" data-delay=".3" key={service.title}>
                                    <div className={`tj-service-mrc-item ${index % 2 === 1 ? 'tj-service-mrc-item-2' : ''}`}>
                                        <div className="tj-service-inner">
                                            <div className="tj-service-icon">
                                                <i className={service.icon}></i>
                                            </div>
                                            <div className="tj-service-content">
                                                <h3 className="title tj-fs-h4">
                                                    <Link href={service.href}>{service.title}</Link>
                                                </h3>
                                                <p className="desc">{service.description}</p>
                                                <div className="tj-service-sln-wrap">
                                                    <Link className="tj-text-btn tj-text-btn-2" href={service.href}>
                                                        <span className="btn-text"><span>Learn More</span></span>
                                                        <span className="btn-icon"><i className="tji-arrow-right-5"></i></span>
                                                    </Link>
                                                    <span className="tj-service-sln">[ 0{index + 1} ]</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="tj-portfolio-section section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading tj-portfolio-mrc-heading">
                                    <div className="sec-heading-inner">
                                        <h2 className="sec-title sec-title-mrc tj-split-text-1">Latest Portfolio</h2>
                                        <div className="sec-heading-right">
                                            <p className="sec-desc">A look at our vending machine models and a few of our 15 signature flavours, ready to supply island-wide.</p>
                                            <Link className="tj-text-btn tj-text-btn-2" href="/portfolio">
                                                <span className="btn-text"><span>View More Porfolio</span></span>
                                                <span className="btn-icon"><i className="tji-arrow-right-5"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid p-0">
                        <div className="portfolio-slider-wrap">
                            <div className="portfolio-slider-left">
                                <div className="slider-navigation slider-navigation-mrc">
                                    <div className="slider-prev slider-prev-1">
                                        <span className="anim-icon">
                                            <i className="tji-arrow-left-2"></i>
                                            <i className="tji-arrow-left-2"></i>
                                        </span>
                                    </div>
                                    <div className="slider-next slider-next-1">
                                        <span className="anim-icon">
                                            <i className="tji-arrow-right-2"></i>
                                            <i className="tji-arrow-right-2"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="portfolio-pagination">
                                    <span className="current-slide">01</span>
                                    <span className="divider">/</span>
                                    <span className="total-slide">04</span>
                                </div>
                            </div>
                            <div className="portfolio-slider-right">
                                <div className="tj-portfolio-slider swiper">
                                    <div className="swiper-wrapper">
                                        {portfolioItems.map((item) => (
                                            <div className="swiper-slide" key={item.title}>
                                                <div className={`portfolio-item ${item.category === 'Flavours' && item.title.includes('Grape') ? 'bg-two' : 'bg-one'}`}>
                                                    <div className="portfolio-thumb">
                                                        <img src={item.image} alt={item.title} />
                                                        <Link href={item.href} className="category">
                                                            {item.category}
                                                        </Link>
                                                    </div>
                                                    <div className="portfolio-content">
                                                        <div className="content-bottom">
                                                            <div className="left-content">
                                                                <h3 className="title">
                                                                    <Link href={item.href}>{item.title}</Link>
                                                                </h3>
                                                            </div>
                                                            <Link href={item.href} className="arrow-btn">
                                                                <i className="tji-arrow-right-2"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tj-testimonial-mrc-section tj-grid-shape-container section-gap">
                    <div className="tj-grid-shape tj-grid-shape-start">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="66.667" y="66.6665" width="66.6667" height="66.6667" fill="currentColor" />
                            <rect width="66.6667" height="66.6667" fill="currentColor" />
                            <rect x="133.333" width="66.6667" height="66.6667" fill="currentColor" />
                            <rect x="133.333" y="133.333" width="66.6667" height="66.6667" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <SectionHeading center subtitle="[ Clients feedback ]" title={<><span><i className="tji-face"></i></span> Real feedback from our clients.</>} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tj-testimonial-wrapper tj-fade-anim">
                                    <div className="swiper client-thumb tj-testimonial-slider-mrc-thumb">
                                        <div className="swiper-wrapper">
                                            {testimonials.map((testimonial) => (
                                                <div className="swiper-slide thumb-item" key={testimonial.name}>
                                                    <div className="thumb-img">
                                                        <img src={testimonial.image} alt={testimonial.name} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="swiper tj-testimonial-slider-mrc">
                                        <div className="swiper-wrapper">
                                            {testimonials.map((testimonial) => (
                                                <div className="swiper-slide" key={testimonial.name}>
                                                    <div className="testimonial-item">
                                                        <div className="desc">
                                                            <p>"{testimonial.quote}"</p>
                                                        </div>
                                                        <div className="tj-testimonial-bottom">
                                                            <div className="author-info">
                                                                <h2 className="name tj-fs-h5">{testimonial.name}</h2>
                                                                <span className="designation">{testimonial.role}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tj-blog-mrc-area section-gap fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tj-blog-mrc-header">
                                    <div className="sec-heading">
                                        <span className="sec-subtitle sec-subtitle-mrc tj-fade-anim" data-direction="top">[ Latest blog & news ]</span>
                                        <div className="sec-heading-inner">
                                            <h2 className="sec-title sec-title-mrc tj-split-text-1">Explore Latest blog & Insights.</h2>
                                            <div className="tj-fade-anim">
                                                <Link className="tj-btn-primary tj-btn-primary-mrc tj-btn-primary-mrc-sm" href="/blog">
                                                    <span className="btn-inner">
                                                        <span className="btn-text"><span>View More Blogs</span></span>
                                                        <span className="btn-icon"><span><i className="tji-arrow-right-2"></i></span></span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row rg-40">
                            {blogPosts.map((post) => (
                                <div className="col-12" key={post.title}>
                                    <article className="blog_item blog_item_mrc tj-fade-anim" data-delay=".2">
                                        <div className="blog_thumb">
                                            <Link className="blog_image" href="/blog-details">
                                                <img src={post.image} alt={post.title} />
                                            </Link>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_content_left">
                                                <div className="blog_meta">
                                                    <div className="categories">
                                                        <Link className="blog_category" href="/blog-details">
                                                            {post.category}
                                                        </Link>
                                                    </div>
                                                    <div className="blog_meta_item date">
                                                        <span>{post.date}</span>
                                                    </div>
                                                </div>
                                                <h3 className="blog_title">
                                                    <Link href="/blog-details">{post.title}</Link>
                                                </h3>
                                                <div className="blog_author">
                                                    <img src="/assets/images/users/user-list-img-1.png" alt="" className="author_img" />
                                                    <span>By <Link href="/blog-details">OREKS Team</Link></span>
                                                </div>
                                            </div>
                                            <div className="blog_content_right">
                                                <p className="blog_desc">{post.excerpt}</p>
                                                <div className="blog_btn">
                                                    <Link className="tj-icon-btn tj-icon-btn-mrc tj-icon-btn-2" href="/blog-details">
                                                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                                                        <span className="btn-text"><span>Read More</span></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="tj-contact-mrc-section section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="support-box-wrapper">
                                    <div className="support-box support-box-mrc support-box-start tj-fade-anim" data-duration=".6">
                                        <div className="support-header">
                                            <div className="support-icon">
                                                <i className="tji-support"></i>
                                            </div>
                                            <h3 className="title">Need help?</h3>
                                        </div>
                                        <div className="support-content">
                                            <p className="desc">
                                                Call or WhatsApp us directly and our team will help you pick the right machine and flavours for your business.
                                            </p>
                                            <a className="tj-text-btn tj-text-btn-2" href="tel:+94767075978">
                                                <span className="btn-text"><span>+94 76 707 5978</span></span>
                                                <span className="btn-icon"><i className="tji-arrow-right-5"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tj-grid-shape">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="66.667" y="66.6665" width="66.6667" height="66.6667" fill="currentColor" />
                            <rect width="66.6667" height="66.6667" fill="currentColor" />
                            <rect x="133.333" width="66.6667" height="66.6667" fill="currentColor" />
                            <rect x="133.333" y="133.333" width="66.6667" height="66.6667" fill="currentColor" />
                        </svg>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
