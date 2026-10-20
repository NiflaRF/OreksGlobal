import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { contactFaq } from '@/data/site';

export default function Faq() {
    return (
        <PublicLayout>
            <Head title="FAQ" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Read <span className="title-gradient"> FAQS</span></>} breadcrumb={{ current: 'FAQS' }} banner={appUrl("/assets/images/page-header/page-header-banner.webp")} />
                <section className="tj-faq-section section-gap fix section-separator tj-theme-bg-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading">
                                    <h2 className="sec-title sec-title-faq tj-split-text-1">FAQS</h2>
                                </div>
                                <div className="tj-faq-wrapper">
                                    <div className="tj-faq tj-faq-2" id="tjAccordion01">
                                        {contactFaq.concat([{ question: 'How do I get started?', answer: 'Contact us and we will help you choose the right machine and flavour package.' }]).map((item, index) => (
                                            <div className="accordion-item tj-fade-anim" data-delay=".3" data-duration="0.6" key={item.question}>
                                                <button className={`accordion-title ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${index + 1}`} aria-expanded={index === 0 ? 'true' : 'false'}>
                                                    {String(index + 1).padStart(2, '0')}. <span>{item.question}</span>
                                                </button>
                                                <div id={`faq-${index + 1}`} className={`collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#tjAccordion01">
                                                    <div className="accordion-body accordion-content"><div className="desc">{item.answer}</div></div>
                                                </div>
                                            </div>
                                        ))}
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
