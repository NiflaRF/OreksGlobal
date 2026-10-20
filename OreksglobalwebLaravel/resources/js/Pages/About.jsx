import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { aboutFeatures } from '@/data/site';

export default function About() {
    return (
        <PublicLayout>
            <Head title="About Us" />
            <main id="primary" className="site-main">
                <PageHeader
                    title={<>About <span className="title-gradient"> us</span></>}
                    breadcrumb={{ current: 'About us' }}
                    banner={appUrl("/assets/images/oreks/gallery/flavor-taps.jpg")}
                />

                <section className="tj-choose-section fix section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading tj-about-heading">
                                    <div className="sec-heading-inner">
                                        <span className="sec-subtitle tj-fade-anim" data-direction="top">Built For Entrepreneurs</span>
                                        <h2 className="sec-title title-highlight">
                                            Equipping Sri Lankan entrepreneurs with vending machines, syrup and island-wide support.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row rg-30">
                            {aboutFeatures.map((item) => (
                                <div className="col-12 col-lg-6 tj-fade-anim" data-delay=".2" key={item.title}>
                                    <div className="choose-box choose-box-about">
                                        <div className="choose-shape-image">
                                            <img src={appUrl("/assets/images/shapes/about-feature-blur-shape.png")} alt="" />
                                        </div>
                                        <div className="choose-inner">
                                            <div className="choose-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="choose-content">
                                                <h3 className="title tj-fs-h5">
                                                    <Link href={item.href}>{item.title}</Link>
                                                </h3>
                                                <p className="desc">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="tj-theme-bg-2 position-relative">
                    <div className="tj-client-section tj-fade-anim">
                        <div className="tj-section-line-wrapper top-0">
                            <div className="tj-section-line"><img src={appUrl("/assets/images/shapes/section-line-shape.png")} alt="" /></div>
                            <div className="tj-section-line"><img src={appUrl("/assets/images/shapes/section-line-shape.png")} alt="" /></div>
                        </div>
                        <div className="container-fluid px-0">
                            <div className="row">
                                <div className="col">
                                    <div className="tj-client-heading tj-fs-h5">Supplying <span>15</span> signature flavours island-wide</div>
                                    <div className="tj-client-marquee-wrapper">
                                        <div className="tj-marquee tj-client-marquee" data-scroll-speed="1" data-scroll-speed-targeted=".4">
                                            {['ginger-fizz', 'orange-fizz', 'green-apple-fizz', 'blueberry-fizz', 'grape-fizz', 'pineapple-fizz', 'lemon-fizz', 'pudina-masala-fizz', 'strawberry-fizz', 'guava-fizz', 'kala-khatta-fizz', 'citrus-fizz', 'litchi-fizz', 'berry-fizz', 'mango-fizz'].map((name) => (
                                                <div className="tj-marquee-item" key={name}>
                                                    <div className="tj-client-item">
                                                        <div className="tj-client-shape-image">
                                                            <img src={appUrl("/assets/images/shapes/h1-client-blur-shape.png")} alt="" />
                                                        </div>
                                                        <span>
                                                            <img src={appUrl(`/assets/images/oreks/flavors/${name}.png`)} alt={name.replace(/-/g, ' ')} />
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="tj-about-section tj-b section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xxl-7 about-left about-main-left order-lg-1 order-2">
                                <div className="about-img about-main-img tj-fade-anim fix">
                                    <img src={appUrl("/assets/images/oreks/gallery/lorry-van-cart-1.jpg")} alt="OREKS Crush vending cart" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-5 about-content-area about-main-content-area order-lg-2 order-1">
                                <div className="sec-heading">
                                    <span className="sec-subtitle tj-fade-anim" data-direction="top">About our company</span>
                                    <h2 className="sec-title title-highlight">Building Sri Lanka’s chilled drinks business, one cart at a time.</h2>
                                    <div className="about-bottom-left d-block d-md-none">
                                        <p className="about-desc">
                                            OREKS Global (Pvt) Ltd supplies vending carts, machines and flavour syrup so entrepreneurs across Sri Lanka can start and grow a chilled-drinks business.
                                        </p>
                                        <div className="about-action">
                                            <Link className="tj-btn-primary" href={appUrl("/contact")}>
                                                <span className="btn-inner">
                                                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                                                    <span className="btn-text"><span>Get in touch</span></span>
                                                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-content about-main-content">
                                    <div className="about-main-content-left">
                                        <div className="about-main-feature-wrapper tj-fade-anim" data-delay=".2">
                                            <div className="about-feature-item about-main-feature-item">
                                                <div className="about-feature-icon"><i className="tji-mission"></i></div>
                                                <h3 className="title tj-fs-h4">Our Mission</h3>
                                                <p className="desc">To make it simple for entrepreneurs across Sri Lanka to start and run a chilled-drinks business, with reliable machines and quality flavour syrup.</p>
                                            </div>
                                        </div>
                                        <div className="about-bottom tj-fade-anim">
                                            <div className="about-bottom-left d-none d-md-block">
                                                <p className="about-desc">
                                                    From our outlet in Rajagiriya we help entrepreneurs start and grow a chilled-drinks business with the OREKS Crush brand.
                                                </p>
                                                <div className="about-action">
                                                    <Link className="tj-btn-primary" href={appUrl("/contact")}>
                                                        <span className="btn-inner">
                                                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                                                            <span className="btn-text"><span>Get in touch</span></span>
                                                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="about-list-wrap">
                                                <ul className="about-list tj-fade-anim">
                                                    <li><span><i className="tji-check-3"></i></span>3 vending machine models</li>
                                                    <li><span><i className="tji-check-3"></i></span>15 signature flavours</li>
                                                    <li><span><i className="tji-check-3"></i></span>Island-wide delivery</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
