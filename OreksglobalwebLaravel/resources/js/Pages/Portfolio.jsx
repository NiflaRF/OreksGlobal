import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { portfolioGrid } from '@/data/site';

export default function Portfolio() {
    return (
        <PublicLayout>
            <Head title="Products" />
            <main id="primary" className="site-main">
                <PageHeader
                    title={<>Our <span className="title-gradient"> products</span></>}
                    breadcrumb={{ current: 'Products' }}
                    banner="/assets/images/page-header/page-header-banner.webp"
                />

                <section className="tj-portfolio-section fix section-gap tj-theme-bg-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading sec-heading-center">
                                    <span className="sec-subtitle">our products</span>
                                    <h2 className="sec-title tj-split-text-1">
                                        Vending machines &amp; flavour syrups, <span className="title-gradient title-gradient-2">built for business.</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="career-filter-btn-wrap">
                                    <div className="tj_filter_btn_group">
                                        <button data-filter="*" className="tj_filter_btn active"><span>All</span></button>
                                        <button data-filter=".machines" className="tj_filter_btn"><span>Machines</span></button>
                                        <button data-filter=".flavours" className="tj_filter_btn"><span>Flavours</span></button>
                                    </div>
                                </div>
                                <div className="row portfolio-filter-wrapper tj_filter_item_wrapper">
                                    {portfolioGrid.map((item) => (
                                        <div className={`tj_filter_item ${item.category} ${item.category === 'flavours' ? 'col-lg-3 col-md-4 col-6' : 'col-lg-4 col-md-6'}`} key={item.title}>
                                            <div className="portfolio-item portfolio-item-2">
                                                <div className="portfolio-thumb">
                                                    {item.href ? (
                                                        <Link href={item.href}><img src={item.image} alt={item.title} /></Link>
                                                    ) : (
                                                        <img src={item.image} alt={item.title} />
                                                    )}
                                                    <span className="category">{item.label}</span>
                                                </div>
                                                <div className="portfolio-content">
                                                    <div className={`content-bottom ${item.category === 'flavours' ? 'justify-content-center' : ''}`}>
                                                        <div className="left-content">
                                                            <h3 className="title tj-fs-h4 mb-0">
                                                                {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
                                                            </h3>
                                                            {item.description ? <p className="desc">{item.description}</p> : null}
                                                        </div>
                                                        {item.href ? (
                                                            <Link href={item.href} className="arrow-btn">
                                                                <i className="tji-arrow-right-2"></i>
                                                            </Link>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
