import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Pure Plumbing Solutions</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        { props.children }
        <Footer />
    </div>
)

export default Layout;