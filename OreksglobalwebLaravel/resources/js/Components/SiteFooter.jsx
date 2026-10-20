import { Link } from '@inertiajs/react';
import { footerQuickLinks, footerServices } from '@/data/site';

export default function SiteFooter() {
    return (
        <footer className="footer-section footer-3 section-gap-top" data-bg-image={appUrl("/assets/images/shapes/h3-footer-bg.png")}>
            <div className="tj-text-marquee-mrc-lg-wrapper tj-text-marquee-mrc-lg-wrapper-2">
                <div className="tj-marquee tj-text-marquee tj-text-marquee-mrc tj-text-marquee-mrc-lg" data-scroll-speed=".6" data-scroll-speed-targeted=".2">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div className="tj-marquee-item" key={index}>
                            <div className="tj-text-marquee-title">
                                OREKS
                                <div className="tj-text-marquee-img">
                                    <img src={appUrl("/assets/images/icons/marquee-star-lg.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-main-wrapper">
                <div className="container">
                    <div className="row flex-column flex-lg-row-reverse">
                        <div className="col-12 col-lg-7 col-xxl-6">
                            <div className="footer-main-area">
                                <div className="footer-widget-wrapper">
                                    <div className="footer-widget footer-widget-mrc footer-widget-nav-menu tj-fade-anim" data-delay=".3" data-duration="0.5">
                                        <div className="title">Quick Links</div>
                                        <ul>
                                            {footerQuickLinks.map((item) => (
                                                <li key={item.label}>
                                                    <Link href={item.href}>
                                                        <span>{item.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="footer-widget footer-widget-mrc footer-widget-nav-menu tj-fade-anim" data-delay=".5" data-duration="0.5">
                                        <div className="title">Services</div>
                                        <ul>
                                            {footerServices.map((item) => (
                                                <li key={item.label}>
                                                    <Link href={item.href}>
                                                        <span>{item.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="footer-widget footer-widget-mrc footer-widget-contact tj-fade-anim" data-delay="0.7" data-duration="0.5">
                                        <div className="title">Get In Touch</div>
                                        <div className="footer-contact">
                                            <div className="footer-info">No 138, Mosque Lane, Nawala Road, Rajagiriya</div>
                                            <a href="tel:+94767075978" className="footer-info">
                                                +94 76 707 5978
                                            </a>
                                            <a href="mailto:info@oreksglobal.com" className="footer-info">
                                                info@oreksglobal.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-widget-wrapper footer-widget-wrapper-bottom">
                                    <div className="footer-widget footer-widget-mrc footer-widget-mrc-socials tj-fade-anim" data-delay=".3" data-duration="0.5">
                                        <div className="title">Social</div>
                                        <div className="social-links">
                                            <ul className="tj-socials tj-socials-dark tj-socials-mrc tj-socials-mrc-light">
                                                <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="tji-facebook"></i></a></li>
                                                <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="tji-instagram"></i></a></li>
                                                <li><a href="https://x.com" target="_blank" rel="noreferrer"><i className="tji-x-twitter"></i></a></li>
                                                <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><i className="tji-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="footer-widget footer-widget-mrc footer-widget-mrc-subscription tj-fade-anim" data-delay=".3" data-duration="0.5">
                                        <div className="title">Subscribe</div>
                                        <div className="tj-footer-form">
                                            <form onSubmit={(event) => event.preventDefault()}>
                                                <div className="tj-footer-form-input">
                                                    <div className="tj-footer-form-icon">
                                                        <i className="tji-email"></i>
                                                    </div>
                                                    <input type="email" name="email" placeholder="Enter email..." />
                                                </div>
                                                <button className="tj-footer-form-submit" type="submit">
                                                    <span><i className="tji-arrow-right-2"></i></span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 col-xxl-6">
                            <div className="footer-main-left">
                                <div className="tj-text-marquee-mrc-lg-wrapper">
                                    <div className="tj-marquee tj-text-marquee tj-text-marquee-mrc tj-text-marquee-mrc-lg" data-scroll-speed=".6" data-scroll-speed-targeted=".2">
                                        {Array.from({ length: 12 }).map((_, index) => (
                                            <div className="tj-marquee-item" key={index}>
                                                <div className="tj-text-marquee-title">
                                                    OREKS
                                                    <div className="tj-text-marquee-img">
                                                        <img src={appUrl("/assets/images/icons/marquee-star-lg.png")} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="tj-copyright-area tj-copyright-mrc-area tj-fade-anim">
                                    <div className="tj-copyright-wrap">
                                        <div className="tj-copyright-content-area">
                                            <div className="tj-copyright-nav-menu">
                                                <ul>
                                                    <li>
                                                        <div className="tj-copyright-text-wrapper">
                                                            <div className="tj-copyright-text">
                                                                <p>
                                                                    &copy;<span>2026</span>{' '}
                                                                    <Link href={appUrl("/")}>OREKS Crush</Link>. All rights reserved
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">Policy &amp; privacy</a></li>
                                                    <li><a href="#">Terms &amp; conditions</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tj-section-line-wrapper bottom-0">
                    <div className="tj-section-line">
                        <img src={appUrl("/assets/images/shapes/section-line-shape-3.png")} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
