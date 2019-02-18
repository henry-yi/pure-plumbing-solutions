import Layout from '../components/Layout';
import Head from 'next/head';
import HowCanWeHelpCard from '../components/HowCanWeHelpCard';
import BusinessPoint from '../components/BusinessPoint';

const Index = () => (
    <Layout>
        <Head>
            <title>Pure Plumbing Solutions</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="jumbotron">
            <div className="cta-text">Pure Honesty, Solutions, and Satisfaction</div>
            <button className="cta-button">Call to Action</button>
        </div>
        <div className="helpCards">
            <div className="helpCardTitle">How can we help?</div>
            <HowCanWeHelpCard destination="hot water" ico="tint" title="Hot Water" items={["Repair & Install","Gas","Electric","Solar"]}/>
            <HowCanWeHelpCard destination="drainage" ico="wrench" title="Drainage" items={["Blocked Drains","Blocked Toilets","Blocked Sinks","Drain Repair"]}/>
            <HowCanWeHelpCard destination="gas" ico="burn" title="Gas" items={["Gas Leaks","Gas Fitting","Appliances/BBQs","Gas Hot","Water"]}/>
            <HowCanWeHelpCard destination="kitchens & bathrooms" ico="home" title="Kitchens & Bathrooms" items={["Renovations","Appliance Installs","Vanities","Laundries"]}/>
            <HowCanWeHelpCard destination="plumbing & water" ico="toilet" title="Plumbing & Water" items={["Burst Pipes","Toilets","Taps & Showers"]}/>
        </div>
        <div className="business-points">
            <div className="business-point__title">Pure Plumbing Solutions</div>
            <div className="business-points__bullets">
                <BusinessPoint title="Local" description="Local trusted plumber that is honest" />
                <BusinessPoint title="Upfront" description="An upfront price, so there's no 'guessing'" />
                <BusinessPoint title="$0 Callout" description="We don't charge a call out fee" />
                <BusinessPoint title="Clean" description="We're clean and tidy!" />
                <BusinessPoint title="On Time" description="Arrival time and courtesy SMS before we arrive" />
                <BusinessPoint title="Free Quotes" description="No obligations, free quotes!" />            
            </div>
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

            .helpCards {
                display: flex;
                justify-content: center;
                margin: 0 112px;
            }

            .helpCardTitle {
                font-size: 30px;
                text-align: center;
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                width: 100%;
                height: 480px;
                background-color: #D8D8D8;
            }

            .business-point__title {
                margin-left: 112px;
                padding-top: 74px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 40px;
                font-weight: 500;
            }

            .business-points__bullets {
                margin: 0 112px;
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
        `}</style>
    </Layout>
)
  
export default Index