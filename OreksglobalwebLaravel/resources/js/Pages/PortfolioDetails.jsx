import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';

export default function PortfolioDetails() {
    return (
        <PublicLayout>
            <Head title="Portfolio Details" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Lorry / Van <span className="title-gradient">Model</span></>} breadcrumb={{ current: 'Lorry / Van Model' }} banner="/assets/images/page-header/page-header-banner.webp" />
                <section className="tj-details section-gap tj-theme-bg-2">
                    <div className="container">
                        <div className="row rg-60">
                            <div className="col-lg-8">
                                <div className="tj-details-wrapper">
                                    <div className="tj-details-img tj-fade-anim"><img src="/assets/images/oreks/gallery/lorry-van-cart-1.jpg" alt="OREKS Crush Lorry/Van Model vending cart" /></div>
                                    <h2 className="tj-details-title tj-split-text-1">Lorry/Van Model: mobile vending, built for the road.</h2>
                                    <div className="tj-details-text">
                                        <p className="tj-fade-anim">The Lorry/Van Model is OREKS Crush's mobile vending cart — a self-contained unit that mounts onto your own lorry or van.</p>
                                        <ul className="tj-details-list tj-fade-anim">
                                            <li><span><i className="tji-check-3"></i></span>Mobile — mount on your own lorry or van</li>
                                            <li><span><i className="tji-check-3"></i></span>Serves all 15 OREKS Crush flavours</li>
                                            <li><span><i className="tji-check-3"></i></span>Nationwide delivery and installation support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tj-main-sidebar">
                                    <div className="tj-sidebar-widget tj-fade-anim">
                                        <h4 className="widget-title">Product info</h4>
                                        <div className="tj-project-info">
                                            <ul>
                                                <li><div className="info-text"><span className="label">Model:</span><h6 className="title">Lorry / Van Model</h6></div></li>
                                                <li><div className="info-text"><span className="label">Category:</span><h6 className="title">Vending Machines</h6></div></li>
                                            </ul>
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
