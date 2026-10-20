import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { contactFaq, contactLocations } from '@/data/site';

export default function Contact() {
    return (
        <PublicLayout>
            <Head title="Contact" />
            <main id="primary" className="site-main">
                <PageHeader
                    title={<>Contact <span className="title-gradient"> us</span></>}
                    breadcrumb={{ current: 'Contact us' }}
                    banner={appUrl("/assets/images/page-header/page-header-banner.webp")}
                    lead="Whether you are setting up a lorry, shop or table top vending machine, or need flavour syrup delivered island-wide, get in touch and our team will get back to you quickly."
                />

                <section className="tj-contact-section-2 section-gap tj-theme-bg-2">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xxl-5 col-lg-6">
                                <div className="contact-left">
                                    <div className="sec-heading">
                                        <span className="sec-subtitle">Get in touch</span>
                                        <h2 className="sec-title tj-split-text-1">Let’s talk about your vending &amp; flavour <span className="title-gradient title-gradient-2">needs.</span></h2>
                                        <p className="desc tj-fade-anim">
                                            Whether you are setting up a lorry, shop or table top vending machine, or need flavour syrup delivered island-wide, get in touch and our team will get back to you quickly.
                                        </p>
                                    </div>
                                    <div className="contact-info-2 tj-fade-anim">
                                        <div className="contact-item"><span className="subtitle">Email:</span><a className="contact-link" href="mailto:info@oreksglobal.com">info@oreksglobal.com</a></div>
                                        <div className="contact-item"><span className="subtitle">Phone:</span><a className="contact-link" href="tel:+94767075978">+94 76 707 5978</a></div>
                                        <div className="contact-item"><span className="subtitle">Location:</span><span className="contact-link">No 138, Mosque Lane, Nawala Road, Rajagiriya</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-6">
                                <div className="contact-form style-2 tj-fade-anim">
                                    <h3 className="form-title">Send us a message</h3>
                                    <form onSubmit={(event) => event.preventDefault()}>
                                        <div className="row">
                                            <div className="col-12"><div className="form-input"><input type="text" name="name" placeholder="Enter full name*" /></div></div>
                                            <div className="col-12"><div className="form-input"><input type="email" name="email" placeholder="Email address*" /></div></div>
                                            <div className="col-12">
                                                <div className="form-input">
                                                    <div className="tj-nice-select-box">
                                                        <div className="tj-select">
                                                            <select name="subject">
                                                                <option value="0">Select option*</option>
                                                                <option value="1">Vending Machine Enquiry</option>
                                                                <option value="2">Syrup / Flavour Order</option>
                                                                <option value="3">Service &amp; Maintenance</option>
                                                                <option value="4">Distributor / Partnership Enquiry</option>
                                                                <option value="5">General Enquiry</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12"><div className="form-input message-input"><textarea name="message" id="message" placeholder="Start writing here*"></textarea></div></div>
                                            <div className="col-12">
                                                <label className="tj-agree" htmlFor="agree">
                                                    <input id="agree" type="checkbox" />I agree to the <a href="#">Terms and conditions.</a>
                                                </label>
                                                <div className="submit-btn-wrpper">
                                                    <button className="submit-btn tj-btn-primary tj-btn-primary-full" type="submit">
                                                        <span className="btn-inner"><span className="btn-text"><span>Send Enquiry</span></span><span className="btn-icon"><i className="tji-arrow-right-2"></i></span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tj-location-section section-gap tj-theme-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading sec-heading-center">
                                    <span className="sec-subtitle">reach us</span>
                                    <h2 className="sec-title tj-split-text-1">Get in touch <span className="title-gradient">with us</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row rg-30">
                            {contactLocations.map((location) => (
                                <div className="col-lg-4 tj-fade-anim" data-delay="0.2" key={location.title}>
                                    <div className="tj-location-item">
                                        <a className="location-image" href={location.href} target="_blank" rel="noreferrer">
                                            <img src={location.image} alt={location.title} />
                                        </a>
                                        <div className="location-content">
                                            <h2 className="location-title tj-fs-h4">{location.title}</h2>
                                            <div className="location-desc">
                                                {location.description.map((line) => <p key={line}>{line}</p>)}
                                            </div>
                                            <a className="tj-btn-primary tj-btn-primary-full" href={location.href} target="_blank" rel="noreferrer">
                                                <span className="btn-inner"><span className="btn-text"><span>{location.button}</span></span><span className="btn-icon"><span><i className="tji-arrow-right-2"></i></span></span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="tj-faq-section section-gap fix tj-theme-bg-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sec-heading">
                                    <h2 className="sec-title sec-title-faq tj-split-text-1">FAQS</h2>
                                </div>
                                <div className="tj-faq-wrapper">
                                    <div className="tj-faq tj-faq-2" id="tjAccordion01">
                                        {contactFaq.map((item, index) => (
                                            <div className="accordion-item tj-fade-anim" data-delay=".3" data-duration="0.6" key={item.question}>
                                                <button className={`accordion-title ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#accordion-${index + 1}`} aria-expanded={index === 0 ? 'true' : 'false'}>
                                                    {String(index + 1).padStart(2, '0')}. <span>{item.question}</span>
                                                </button>
                                                <div id={`accordion-${index + 1}`} className={`collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#tjAccordion01">
                                                    <div className="accordion-body accordion-content">
                                                        <div className="desc">{item.answer}</div>
                                                    </div>
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
