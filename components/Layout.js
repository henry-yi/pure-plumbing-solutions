import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Pure Plumbing Solutions</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        { props.children }
        <Footer />
        <style jsx global>{`
            html {
                scroll-behavior: smooth;
            }

            body {
                margin: 0px;
            }
        `}</style>
    </div>
)

export default Layout;