import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import PageHeader from '@/Components/PageHeader';
import { blogCards } from '@/data/site';

export default function Blog() {
    return (
        <PublicLayout>
            <Head title="Blog" />
            <main id="primary" className="site-main">
                <PageHeader title={<>Latest <span className="title-gradient"> blog</span></>} breadcrumb={{ current: 'Blog' }} banner="/assets/images/page-header/page-header-banner.webp" />
                <section className="tj-blog-area section-gap fix">
                    <div className="container">
                        <div className="row rg-40">
                            {blogCards.map((post) => (
                                <div className="col-12 col-md-6 col-lg-4" key={post.title}>
                                    <article className="blog_item tj-fade-anim">
                                        <div className="blog_thumb">
                                            <Link className="blog_image" href={post.href}><img src={post.image} alt={post.title} /></Link>
                                        </div>
                                        <div className="blog_content">
                                            <div className="blog_meta"><div className="categories"><Link className="blog_category" href={post.href}>{post.category}</Link></div><div className="blog_meta_item date"><span>{post.date}</span></div></div>
                                            <h3 className="blog_title tj-fs-h4"><Link href={post.href}>{post.title}</Link></h3>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
