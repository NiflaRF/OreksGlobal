import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { services } from '@/data/site';

export default function Services() {
    return (
        <PublicLayout>
            <Head title="Services" />
            <main id="primary" className="site-main">
                <PageHeader
                    title={<>Our <span className="title-gradient">services</span></>}
                    breadcrumb={{ current: 'Services' }}
                    banner={appUrl("/assets/images/page-header/page-header-banner.webp")}
                />

                <section className="tj-service-main-section tj-theme-bg-2 fix section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading sec-heading-center">
                                    <span className="sec-subtitle tj-fade-anim" data-direction="top">[ What We Do ]</span>
                                    <h2 className="sec-title tj-split-text-1">Everything Your Vending Business Needs</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row rg-30">
                            {services.map((service, index) => (
                                <div className="col-xl-4 col-md-6 tj-fade-anim" data-delay=".3" key={service.title}>
                                    <div className="tj-service-item-main">
                                        <div className="tj-service-shape-image">
                                            <img src={appUrl("/assets/images/shapes/service-item-main-shape.png")} alt="" />
                                        </div>
                                        <div className="tj-service-inner">
                                            <div className="tj-service-icon">
                                                <img
                                                    src={appUrl(index === 1 ? '/assets/images/oreks/gallery/flavor-taps.jpg' : '/assets/images/oreks/gallery/lorry-van-cart-1.jpg')}
                                                    alt={service.title}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                                />
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

                <section className="tj-choose-mrc-section fix section-gap tj-theme-bg-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading sec-heading-center">
                                    <span className="sec-subtitle sec-subtitle-mrc tj-fade-anim" data-direction="top">[ Our Service Promise ]</span>
                                    <h2 className="sec-title sec-title-mrc tj-split-text-1">Built Around Your Vending Business</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row rg-30">
                            <div className="col-lg-4 col-md-6 tj-fade-anim" data-delay=".3">
                                <div className="choose-box-mrc">
                                    <div className="choose-inner">
                                        <div className="choose-icon"><i className="tji-feature-5"></i></div>
                                        <div className="choose-content">
                                            <h3 className="title tj-fs-h4">Quality Equipment</h3>
                                            <p className="desc">Three vending machine models, built for daily use and backed by a supplier who stands behind them.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 tj-fade-anim" data-delay=".4">
                                <div className="choose-box-mrc choose-box-mrc-2">
                                    <div className="choose-inner">
                                        <div className="choose-bg-image">
                                            <img src={appUrl("/assets/images/choose/h3-choose-item-bg.webp")} alt="" />
                                        </div>
                                        <div className="choose-content">
                                            <h3 className="title tj-fs-h4">Island-Wide Reach</h3>
                                            <p className="desc">Wherever you operate in Sri Lanka, our team can deliver machines and syrup right to your door.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 tj-fade-anim" data-delay=".5">
                                <div className="choose-box-mrc choose-box-mrc-3">
                                    <div className="choose-inner">
                                        <div className="choose-content">
                                            <h3 className="title tj-fs-h4">Ongoing Support</h3>
                                            <p className="desc">From installation to servicing and repairs, our team stays with you after the sale, not just on delivery day.</p>
                                            <Link className="tj-btn-primary tj-btn-primary-mrc tj-btn-primary-mrc-sm" href={appUrl("/contact")}>
                                                <span className="btn-inner">
                                                    <span className="btn-text"><span>Get a Quote</span></span>
                                                    <span className="btn-icon"><span><i className="tji-arrow-right-2"></i></span></span>
                                                </span>
                                            </Link>
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
