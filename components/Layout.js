import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Pure Plumbing Solutions</title>
            <link rel="icon" href="/static/logo.png"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                font-family: Helvetica;
            }
        `}</style>
    </div>
)

export default Layout;