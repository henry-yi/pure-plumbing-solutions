import Layout from '../components/Layout';
import Head from 'next/head';

const Index = () => (
    <Layout>
        <Head>
            <title>Pure Plumbing Solutions</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="jumbotron">
            <div className="cta-text">Pure Honesty, Solutions, and Satisfaction</div>
            <button className="cta-button">Call to Action</button>
        </div>
        <style jsx>{`
            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 420px;
                background-color: #D8D8D8;
            }

            .cta-text {
                margin-left: 112px;
                margin-bottom: 22px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 35px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .cta-button {
                margin-top: 22px;
                margin-left: 112px;	
                height: 75px;	
                width: 319px;	
                background-color: #2E69A5;
                color: #FFFFFF;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
                text-align: center;
            }
        `}</style>
    </Layout>
)
  
export default Index