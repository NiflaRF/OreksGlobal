import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { blogCards } from '@/data/site';

export default function BlogDetails() {
    const related = blogCards.slice(1, 4);
    return (
        <PublicLayout>
            <Head title="Blog Details" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Blog <span className="title-gradient">details</span></>} breadcrumb={{ current: 'Blog details' }} banner="/assets/images/page-header/page-header-banner.webp" />
                <section className="tj-blog-section section-gap">
                    <div className="container">
                        <div className="row rg-60">
                            <div className="col-lg-8">
                                <div className="post-details-wrapper">
                                    <div className="blog-images tj-fade-anim"><img src="/assets/images/oreks/gallery/lorry-van-cart-1.jpg" alt="Images" /></div>
                                    <h2 className="title title-anim">5 Things to Check Before Buying a Vending Cart.</h2>
                                    <div className="blog-text">
                                        <p className="tj-fade-anim">Buying a vending cart is one of the biggest decisions you'll make when starting or expanding a soft drink retail business. It is not just a piece of equipment — it is the machine that will sit on the street, at your shop counter, or on the back of your lorry every single day.</p>
                                        <p className="tj-fade-anim">At OREKS Global, we supply carbonated soft drink vending carts island-wide alongside our own range of 15 flavour syrups. Before you commit to a machine, here are five things worth checking.</p>
                                        <ul className="tj-fade-anim">
                                            <li><span><i className="tji-check-3"></i></span><strong>Build quality & durability</strong> — what the frame, tank, and taps are made of.</li>
                                            <li><span><i className="tji-check-3"></i></span><strong>Capacity vs. your actual demand</strong> — a machine too small runs out mid-rush.</li>
                                            <li><span><i className="tji-check-3"></i></span><strong>How easy it is to restock syrup</strong> — refill speed matters.</li>
                                            <li><span><i className="tji-check-3"></i></span><strong>Mobility & mounting</strong> — lorry and van setups need secure mounting.</li>
                                            <li><span><i className="tji-check-3"></i></span><strong>After-sales support & maintenance</strong> — spare parts and technician support matter.</li>
                                        </ul>
                                    </div>
                                    <div className="tj-post__navigation tj-fade-anim">
                                        <div className="tj-nav-post__grid"><Link href="/blog"><i className="tji-window"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tj-main-sidebar">
                                    <div className="tj-sidebar-widget tj-recent-posts tj-fade-anim">
                                        <h4 className="widget-title">Related post</h4>
                                        <ul>
                                            {related.map((post) => (
                                                <li key={post.title}>
                                                    <div className="post-thumb"><Link href={post.href}><img src={post.image} alt={post.title} /></Link></div>
                                                    <div className="post-content">
                                                        <h6 className="post-title"><Link href={post.href}>{post.title}</Link></h6>
                                                        <div className="tj_wpost_meta"><ul><li>{post.date}</li></ul></div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
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
