import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { testimonials } from '@/data/site';

export default function Feedback() {
    return (
        <PublicLayout>
            <Head title="Feedback" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Clients <span className="title-gradient"> Feedback</span></>} breadcrumb={{ current: 'Feedback' }} banner={appUrl("/assets/images/page-header/page-header-banner.webp")} />
                <section className="tj-testimonial-section section-gap overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading sec-heading-center">
                                    <span className="sec-subtitle tj-fade-anim" data-direction="top">Customer Reviews</span>
                                    <h2 className="sec-title tj-split-text-1">Real feedback from our partners.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row rg-30">
                            {testimonials.map((item) => (
                                <div className="col-lg-4 col-sm-6" key={item.name}>
                                    <div className="tj-testimonial-item fnc-testimonial-item fnc-testimonial-item-2">
                                        <div className="tj-testimonial-top">
                                            <div className="author-avatar"><img src={item.image} alt={item.name} /></div>
                                            <div className="author-info">
                                                <h2 className="name tj-fs-h5">{item.name}</h2>
                                                <span className="designation">{item.role}</span>
                                            </div>
                                        </div>
                                        <div className="tj-testimonial-content">
                                            <div className="desc"><p>{item.quote}</p></div>
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
