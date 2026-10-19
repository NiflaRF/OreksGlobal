import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { careerItems } from '@/data/site';

export default function Career() {
    return (
        <PublicLayout>
            <Head title="Career" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Join our <span className="title-gradient"> team</span></>} breadcrumb={{ current: 'Careers' }} banner="/assets/images/page-header/page-header-banner.webp" />
                <section className="tj-career-section fix section-gap tj-theme-bg-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading sec-heading-center">
                                    <span className="sec-subtitle">careers at oreks</span>
                                    <h2 className="sec-title tj-split-text-1">Join our growing island-wide <span className="title-gradient title-gradient-2">team.</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row tj-career-grid">
                            {careerItems.map((job) => (
                                <div className="col-xl-4 col-md-6" key={job.title}>
                                    <div className="tj-career-item">
                                        <Link className="career-image" href="/career-details"><img src={job.image} alt={job.title} /></Link>
                                        <div className="career-content">
                                            <div className="career-content-inner">
                                                <div className="career-tags">
                                                    <span><i className="tji-location"></i>{job.location}</span>
                                                    <span><i className="tji-clock"></i>{job.type}</span>
                                                </div>
                                                <h2 className="career-title tj-fs-h4"><Link href="/career-details">{job.title}</Link></h2>
                                                <div className="career-desc"><p>{job.description}</p></div>
                                            </div>
                                            <div className="btn-area">
                                                <div className="salary-range">Negotiable</div>
                                                <Link className="tj-text-btn" href="/career-details"><span className="btn-icon"><i className="tji-arrow-right-3"></i></span></Link>
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
