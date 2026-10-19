import SiteFooter from '@/Components/SiteFooter';
import SiteHeader from '@/Components/SiteHeader';

export default function PublicLayout({ children }) {
    return (
        <div className="site-wrapper">
            <SiteHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                </div>
            </div>
            <SiteFooter />
        </div>
    );
}
