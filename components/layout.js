import Top from 'components/top'
import Footer from 'components/footer'
import Meta from 'components/meta'
import ResponsiveGuide from 'components/ResponsiveGuide'

export default function Layout({ children }) {
    return (
        <>
        <Meta />
        <ResponsiveGuide/>
        <div className="min-h-screen bg-white dark:bg-black">
            <Top/>
            <main className="bg-white dark:bg-black">{children}</main>
        </div>
        <Footer />
        </>
    )
}
