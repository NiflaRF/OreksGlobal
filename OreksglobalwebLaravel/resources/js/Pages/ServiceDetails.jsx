import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { services } from '@/data/site';

export default function ServiceDetails() {
    return (
        <PublicLayout>
            <Head title="Service Details" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Vending Machine <span className="title-gradient">Supply</span></>} breadcrumb={{ current: 'Vending Machine Supply' }} banner="/assets/images/page-header/page-header-banner.webp" />
                <section className="tj-details section-gap tj-theme-bg-2">
                    <div className="container">
                        <div className="row rg-60">
                            <div className="col-lg-8">
                                <div className="tj-details-wrapper">
                                    <div className="tj-details-img tj-fade-anim"><img src="/assets/images/oreks/gallery/lorry-van-cart-1.jpg" alt="OREKS lorry/van vending cart on the road" /></div>
                                    <h2 className="tj-details-title tj-split-text-1">Vending machines built for Sri Lanka's streets and shops.</h2>
                                    <div className="tj-details-text">
                                        <p className="tj-fade-anim">OREKS Global supplies carbonated soft drink vending machines under the OREKS Crush brand, built to sell chilled, freshly-mixed drinks wherever your customers are.</p>
                                        <ul className="tj-details-list tj-fade-anim">
                                            <li><span><i className="tji-check-3"></i></span>Lorry/Van Model for mobile and street vending</li>
                                            <li><span><i className="tji-check-3"></i></span>Shop Model for fixed retail counters</li>
                                            <li><span><i className="tji-check-3"></i></span>Table Top Model for compact spaces</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tj-main-sidebar">
                                    <div className="tj-sidebar-widget tj-fade-anim">
                                        <h4 className="widget-title">Other services</h4>
                                        <ul>
                                            {services.map((item) => <li key={item.title}><Link href={item.href}>{item.title}</Link></li>)}
                                        </ul>
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
