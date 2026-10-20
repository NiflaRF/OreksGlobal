import { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { navItems } from '@/data/site';

export default function SiteHeader() {
    // main.js hides the preloader on window "load", which fires before React
    // renders it, so hide it once the component has mounted.
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.remove('is-loading');
            preloader.classList.add('is-loaded');
            preloader.style.display = 'none';
        }
        if (typeof window.gsapController === 'function') {
            window.gsapController();
        }
    }, []);

    return (
        <>
            <div className="body-overlay"></div>

            <div className="preloader is-loading">
                <div className="loading-container">
                    <div className="loading"></div>
                    <div id="loading-icon">
                        <img src={appUrl("/assets/images/logos/logo-icon.png")} alt="Loading" />
                    </div>
                </div>
            </div>

            <div className="back-to-top-wrapper back-to-top-btn-mrc-wrapper">
                <button id="back-to-top" type="button" className="back-to-top-btn back-to-top-btn-mrc">
                    <span className="back-to-top-icon">
                        <i className="tji-arrow-up-2"></i>
                    </span>
                </button>
            </div>

            <div className="search_popup search_popup_mrc">
                <div className="search_close">
                    <button type="button" className="search_close_btn">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17 1L1 17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 1L17 17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="tj_search_wrapper">
                                <div className="search_form">
                                    <form onSubmit={(event) => event.preventDefault()}>
                                        <div className="search_input">
                                            <h4 className="title">Search Projects, Service or Blog.</h4>
                                            <div className="search-box">
                                                <input className="search-input-field" type="search" placeholder="Search here..." />
                                                <button type="submit">
                                                    <i className="tji-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-popup-overlay"></div>

            <div className="hamburger-area hamburger-area-mrc">
                <div className="hamburger_bg"></div>
                <div className="hamburger-blur-shape">
                    <img src={appUrl("/assets/images/shapes/h3-sidebar-blur-shpe.png")} alt="" />
                </div>
                <div className="hamburger_wrapper">
                    <div className="hamburger_inner">
                        <div className="hamburger_top d-flex align-items-center justify-content-between">
                            <div className="hamburger_logo">
                                <Link href={appUrl("/")} className="mobile_logo">
                                    <img src={appUrl("/assets/images/oreks/logo.png")} alt="Logo" />
                                </Link>
                            </div>
                            <div className="hamburger_close">
                                <button className="hamburger_close_btn" type="button">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17 1L1 17"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1 1L17 17"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hamburger-text d-none d-lg-block">
                            <p>
                                Developing personalize our customer journeys to increase satisfaction &amp; loyalty of our
                                expansion recognized by industry leaders.
                            </p>
                        </div>
                        <div className="hamburger-search-area">
                            <h5 className="hamburger-title">Search now!</h5>
                            <div className="hamburger_search">
                                <form onSubmit={(event) => event.preventDefault()}>
                                    <button type="submit">
                                        <i className="tji-search"></i>
                                    </button>
                                    <input type="search" autoComplete="off" name="s" value="" placeholder="Search here..." readOnly />
                                </form>
                            </div>
                        </div>
                        <div className="hamburger_menu">
                            <div className="mobile_menu"></div>
                        </div>
                        <div className="hamburger-infos">
                            <h5 className="hamburger-title">Contact info</h5>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="subtitle">Phone:</span>
                                    <a className="contact-link" href="tel:+94767075978">
                                        +94 76 707 5978
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Email:</span>
                                    <a className="contact-link" href="mailto:info@oreksglobal.com">
                                        info@oreksglobal.com
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <span className="subtitle">Location:</span>
                                    <span className="contact-link">No 138, Mosque Lane, Nawala Road, Rajagiriya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-socials">
                        <h5 className="hamburger-title">Follow us</h5>
                        <div className="social-links style-2">
                            <ul className="tj-socials tj-socials-dark tj-socials-mrc">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <i className="tji-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                        <i className="tji-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com" target="_blank" rel="noreferrer">
                                        <i className="tji-x-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                                        <i className="tji-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header-area header-3 header-absolute">
                <div className="header-bottom">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-wrapper">
                                    <div className="site_logo">
                                        <Link className="logo" href={appUrl("/")}>
                                            <img src={appUrl("/assets/images/oreks/logo.png")} alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="menu-area d-none d-lg-inline-flex align-items-center">
                                        <nav id="mobile-menu" className="mainmenu">
                                            <ul>
                                                {navItems.map((item) => (
                                                    <li key={item.label} className={item.children ? 'has-dropdown' : ''}>
                                                        {item.children ? (
                                                            <>
                                                                <a href="#" onClick={(event) => event.preventDefault()}>
                                                                    {item.label}
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    {item.children.map((child) => (
                                                                        <li key={child.label}>
                                                                            <Link href={child.href}>{child.label}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        ) : (
                                                            <Link href={item.href}>{item.label}</Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-item d-none d-lg-inline-flex">
                                        <div className="header-search">
                                            <button type="button" className="search">
                                                <i className="tji-search"></i>
                                            </button>
                                        </div>
                                        <div className="header-button d-lg-block d-none">
                                            <Link className="tj-btn-primary tj-btn-primary-mrc tj-btn-primary-mrc-sm" href={appUrl("/contact")}>
                                                <span className="btn-inner">
                                                    <span className="btn-text">
                                                        <span>Let’s Talk Us</span>
                                                    </span>
                                                    <span className="btn-icon">
                                                        <span>
                                                            <i className="tji-arrow-right-2"></i>
                                                        </span>
                                                    </span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <button className="menu_btn mobile_menu_bar d-lg-none" type="button">
                                        <span className="bars">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-area header-3 header-duplicate header-sticky">
                <div className="header-bottom">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-wrapper">
                                    <div className="site_logo">
                                        <Link className="logo" href={appUrl("/")}>
                                            <img src={appUrl("/assets/images/oreks/logo.png")} alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="menu-area d-none d-lg-inline-flex align-items-center">
                                        <nav className="mainmenu">
                                            <ul>
                                                {navItems.map((item) => (
                                                    <li key={item.label} className={item.children ? 'has-dropdown' : ''}>
                                                        {item.children ? (
                                                            <>
                                                                <a href="#" onClick={(event) => event.preventDefault()}>
                                                                    {item.label}
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    {item.children.map((child) => (
                                                                        <li key={child.label}>
                                                                            <Link href={child.href}>{child.label}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        ) : (
                                                            <Link href={item.href}>{item.label}</Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-item d-none d-lg-inline-flex">
                                        <div className="header-search">
                                            <button type="button" className="search">
                                                <i className="tji-search"></i>
                                            </button>
                                        </div>
                                        <div className="header-button d-lg-block d-none">
                                            <Link className="tj-btn-primary tj-btn-primary-mrc tj-btn-primary-mrc-sm" href={appUrl("/contact")}>
                                                <span className="btn-inner">
                                                    <span className="btn-text">
                                                        <span>Let’s Talk Us</span>
                                                    </span>
                                                    <span className="btn-icon">
                                                        <span>
                                                            <i className="tji-arrow-right-2"></i>
                                                        </span>
                                                    </span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <button className="menu_btn mobile_menu_bar d-lg-none" type="button">
                                        <span className="bars">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
