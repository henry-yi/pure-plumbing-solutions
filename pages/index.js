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
            <HowCanWeHelpCard destination="waterheater" ico="fire" title="Water Heater" items={["Installation","Repairs","Routine Maintenance","Products"]}/>
            <HowCanWeHelpCard destination="seweranddrain" ico="wrench" title="Sewer & Drain" items={["Drain Cleaning","Sewer Repairs","Main Line Installation","Underfloor Drain Line Inspection"]}/>
            <HowCanWeHelpCard destination="gas" ico="burn" title="Gas" items={["Pipe Installation","Leak Detection","Repairs","Appliance Hook Up"]}/>
            <HowCanWeHelpCard destination="plumbingfixtures" ico="toilet" title="Plumbing Fixtures" items={["Installation & Repairs","Faucets","Toilets","Sinks","Showers"]}/>
            <HowCanWeHelpCard destination="water" ico="tint" title="Water" items={["Pipe Installation","Leak Detection","Repairs","Emergency Shut Off","Pressure Reducing Valve"]}/>
            <HowCanWeHelpCard destination="homeimprovementplan" ico="tasks" title="Home Improvement Plan" items={["Annual Maintenance Plan","Pure Satisfaction","Honesty","Solutions"]}/>
        </div>
        <div className="callUs">
            <div className="callUsText">Call Us Today</div>
            <div className="callUsPhone">(510) 123-1234</div>
        </div>
        <div className="business-points">
            <div className="business-point__title">Pure Plumbing Solutions</div>
            <div className="business-points__bullets">
                <BusinessPoint title="Local Plumber" description="Local to San Jose and serving most of the Silicon Valley" />
                <BusinessPoint title="Honest" description="We will always give you an honest estimate that will not change!" />
                <BusinessPoint title="$0 Solutions" description="We will always have a solution to your issue or there will be no charge to you!" />
            </div>
            <div className="business-points__bullets">
                <BusinessPoint title="Clean" description="We are best known for the clean and tidy job we do" />
                <BusinessPoint title="On Time" description="We will always be on time within the hour window you are given" />
                <BusinessPoint title="Free Quotes" description="No obligations, free quotes!" />            
            </div>
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 430px;
                background-color: #D8D8D8;
            }

            .cta-text {
                text-align: center;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 35px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .cta-button {
                margin: 25px auto;
                height: 75px;	
                width: 240px;	
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
                flex-wrap: wrap;
                margin: 0 10px;
            }

            .helpCardTitle {
                font-size: 27px;
                text-align: center;
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                padding-bottom: 40px;
                width: 100%;
                background-color: #D8D8D8;
            }

            .business-point__title {
                text-align: center;
                padding-top: 20px;
                margin-bottom: 20px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
            }

            .business-points__bullets {
                margin: 0 16px;
                margin-top: 0px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .callUs {
                margin-top: -1px;
                display: flex;
                justify-content: center;
                background-color: black;
                height: 96px;
                font-size: 24px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                align-items: center;
                line-height: 48px;
            }

            .callUs .callUsText {
                text-align: center;
                width: 100%;
                height: 8px;
            }            

            .callUs .callUsPhone {
                margin-bottom: 10px;
                height: 38px;
                text-align: center;
                width: 100%;
                color: #2E69A5;
            }
        }

        @media (min-width: 1024px) {
            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 430px;
                background-color: #D8D8D8;
            }

            .cta-text {
                margin-left: 60px;
                margin-bottom: 22px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 35px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .cta-button {
                margin-top: 22px;
                margin-left: 60px;	
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
                margin: 0 60px;
            }

            .helpCardTitle {
                font-size: 27px;
                text-align: center;
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                padding-bottom: 40px;
                width: 100%;
                background-color: #D8D8D8;
            }

            .business-point__title {
                margin-left: 60px;
                padding-top: 40px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 30px;
                font-weight: 500;
            }

            .business-points__bullets {
                margin: 0 60px;
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .callUs {
                background-color: black;
                height: 128px;
                font-size: 30px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .callUs .callUsText {
                margin-right: 7px;
            }

            .callUs .callUsPhone {
                margin-left: 7px;
                color: #2E69A5;
            }
        }

        @media (min-width: 1440px) {
            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 690px;
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
                font-size: 35px;
                text-align: left;
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                padding-bottom: 60px;
                width: 100%;
                background-color: #D8D8D8;
            }

            .business-point__title {
                margin-left: 112px;
                padding-top: 40px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 35px;
                font-weight: 500;
            }

            .business-points__bullets {
                margin: 0 112px;
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }

            .callUs {
                background-color: black;
                height: 128px;
                font-size: 30px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .callUs .callUsText {
                margin-right: 7px;
            }

            .callUs .callUsPhone {
                margin-left: 7px;
                color: #2E69A5;
            }
        }        
        `}</style>
    </Layout>
)
  
export default Index