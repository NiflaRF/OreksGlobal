export default function PageHeader({ title, breadcrumb, banner, lead }) {
    return (
        <section className="tj-page-header" data-bg-image={appUrl("/assets/images/bg/pheader-bg.png")}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-page-header-content">
                            <h1 className="tj-page-title tj-split-text-1">
                                {title}
                            </h1>
                            {lead ? <p className="desc tj-fade-anim">{lead}</p> : null}
                            <div className="tj-page-link tj-fade-anim" data-delay=".4">
                                <span><i className="tji-home"></i></span>
                                <span><a href={appUrl("/")}>{breadcrumb.home || 'Home'}</a></span>
                                <span><i className="tji-arrow-right-6"></i></span>
                                <span><span>{breadcrumb.current}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tj-page-header-banner tj-fade-anim">
                <div className="tj-page-header-banner-img">
                    <img src={banner} alt={breadcrumb.current} />
                </div>
            </div>
            <div className="tj-section-line-lg-wrapper bottom-0 d-none d-lg-block tj-fade-anim">
                <div className="tj-section-line-lg-inner">
                    <span className="tj-section-line-lg"></span>
                    <span className="tj-section-line-lg"></span>
                    <span className="tj-section-line-lg"></span>
                </div>
            </div>
        </section>
    );
}
