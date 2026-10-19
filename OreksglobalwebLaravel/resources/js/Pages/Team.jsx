import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { teamMembers } from '@/data/site';

export default function Team() {
    return (
        <PublicLayout>
            <Head title="Our Team" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Our <span className="title-gradient"> team</span></>} breadcrumb={{ current: 'Our team' }} banner="/assets/images/page-header/page-header-banner.webp" />
                <section className="tj-team-section fix section-gap tj-theme-bg-2">
                    <div className="container">
                        <div className="row rg-30">
                            {teamMembers.map((member) => (
                                <div className="col-lg-4 col-sm-6 tj-fade-anim" key={member.name}>
                                    <div className="team-item team-item-2">
                                        <div className="team-img">
                                            <div className="bg-img" data-bg-image="/assets/images/shapes/team-img-bg-2.png"></div>
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className="team-info-wrap">
                                            <div className="team-info">
                                                <h3 className="name">{member.name}</h3>
                                                <span className="designation">{member.role}</span>
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
