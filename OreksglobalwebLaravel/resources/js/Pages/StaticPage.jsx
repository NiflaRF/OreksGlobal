import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function StaticPage({ title, eyebrow, intro, highlights = [] }) {
    return (
        <PublicLayout>
            <Head title={title} />

            <main id="primary" className="site-main">
                <section className="tj-banner-mrc-section fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-hero page-hero-mrc">
                                    <span className="sec-subtitle sec-subtitle-mrc">{eyebrow}</span>
                                    <h1 className="sec-title sec-title-mrc">{title}</h1>
                                    <p className="sec-desc">{intro}</p>
                                    <Link className="tj-btn-primary tj-btn-primary-mrc" href="/">
                                        <span className="btn-inner">
                                            <span className="btn-text"><span>Back to Home</span></span>
                                            <span className="btn-icon"><span><i className="tji-arrow-right-2"></i></span></span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-gap">
                    <div className="container">
                        <div className="row g-4">
                            {highlights.map((item) => (
                                <div className="col-md-4" key={item.title}>
                                    <div className="choose-box-mrc">
                                        <div className="choose-inner">
                                            <div className="choose-content">
                                                <h3 className="title tj-fs-h4">{item.title}</h3>
                                                <p className="desc">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
