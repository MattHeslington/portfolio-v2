import Alert from 'components/alert'
import Top from 'components/top'
import Footer from 'components/footer'
import Meta from 'components/meta'

export default function Layout({ preview, children }) {
    return (
        <>
        <Meta />
        <div className="min-h-screen bg-white dark:bg-black">
            <Top/>
            <main className="bg-white dark:bg-black">{children}</main>
        </div>
        <Footer />
        </>
    )
}
