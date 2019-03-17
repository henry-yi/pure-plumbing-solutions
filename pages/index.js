import Layout from '../components/Layout';
import HowCanWeHelpCard from '../components/HowCanWeHelpCard';
import BusinessPoint from '../components/BusinessPoint';
import Link from 'next/link';

const Index = () => (
    <Layout>
        <div className="jumbotron">
            <div className="cta-text">Pure Honesty, Solutions, and Satisfaction</div>
            <Link href="/contact">
                <button className="cta-button">Contact Us Now</button>
            </Link>
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
            <div className="callUsPhone">(408) 891-0720</div>
        </div>
        <div className="business-points">
            <div className="business-point__title">Pure Plumbing Solutions</div>
            <div className="business-points__bullets">
                <BusinessPoint source="index" title="Local Plumber" description="Local to San Jose and serving most of the Silicon Valley" />
                <BusinessPoint source="index" title="Honest" description="We will always give you an honest estimate that will not change!" />
                <BusinessPoint source="index" title="$0 Solutions" description="We will always have a solution to your issue or there will be no charge to you!" />
            </div>
            <div className="business-points__bullets">
                <BusinessPoint source="index" title="Clean" description="We are best known for the clean and tidy job we do" />
                <BusinessPoint source="index" title="On Time" description="We will always be on time within the hour window you are given" />
                <BusinessPoint source="index" title="Free Quotes" description="No obligations, free quotes!" />            
            </div>
        </div>
        <style jsx>{`
            @media (min-width: 320px) and (max-width: 1023px) {
                .jumbotron {
                    height: 430px;
                }

                .cta-text {
                    text-align: center;
                }

                .cta-button {
                    margin: 25px auto;
                    width: 240px;
                }

                .helpCards {
                    flex-wrap: wrap;
                    margin: 0 10px;
                }

                .helpCardTitle {
                    font-size: 27px;
                    text-align: center;
                }

                .business-points {
                    padding-bottom: 40px;
                }

                .business-point__title {
                    text-align: center;
                    padding-top: 20px;
                    margin-bottom: 20px;
                    font-size: 24px;
                }

                .business-points__bullets {
                    margin: 0 16px;
                    margin-top: 0px;
                }

                .callUs {
                    margin-top: -1px;
                    height: 96px;
                    flex-wrap: wrap;
                    font-size: 24px;
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
                }
            }

            @media (min-width: 1024px) {
                .jumbotron {
                    height: 430px;
                }

                .cta-text {
                    margin-left: 60px;
                    margin-bottom: 22px;
                }

                .cta-button {
                    margin-top: 22px;
                    margin-left: 60px;	
                    width: 319px;
                }

                .helpCards {
                    margin: 0 60px;
                }

                .helpCardTitle {
                    font-size: 27px;
                    text-align: center;
                }

                .business-points {
                    padding-bottom: 40px;
                }

                .business-point__title {
                    margin-left: 60px;
                    padding-top: 40px;
                    font-size: 30px;
                }

                .business-points__bullets {
                    margin: 0 60px;
                    margin-top: 40px;
                }

                .callUs {
                    height: 128px;
                    font-size: 30px;
                }

                .callUs .callUsText {
                    margin-right: 7px;
                }

                .callUs .callUsPhone {
                    margin-left: 7px;
                }
            }

            @media (min-width: 1440px) {
                .jumbotron {
                    height: 690px;
                }

                .cta-text {
                    margin-left: 112px;
                    margin-bottom: 22px;
                }

                .cta-button {
                    margin-top: 22px;
                    margin-left: 112px;	
                    width: 319px;
                }

                .helpCards {
                    margin: 0 112px;
                }

                .helpCardTitle {
                    font-size: 35px;
                    text-align: left;
                }

                .business-points {
                    padding-bottom: 60px;
                }

                .business-point__title {
                    margin-left: 112px;
                    padding-top: 40px;
                    font-size: 35px;
                }

                .business-points__bullets {
                    margin: 0 60px;
                    margin-top: 40px;
                }

                .callUs {
                    height: 128px;
                    font-size: 30px;   
                }

                .callUs .callUsText {
                    margin-right: 7px;
                }

                .callUs .callUsPhone {
                    margin-left: 7px;
                }
            }

            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                background-color: #D8D8D8;
            }

            .cta-text {
                font-size: 35px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .cta-button {
                cursor: pointer;
                height: 75px;
                background-color: #2E69A5;
                color: #FFFFFF;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
                text-align: center;
            }

            .helpCards {
                cursor: pointer;
                display: flex;
                justify-content: center;
            }

            .helpCardTitle {
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                width: 100%;
                background-color: #D8D8D8;
            }

            .business-point__title {
                color: #000000;
                font-family: "Avenir Next";
                font-weight: 500;
            }

            .business-points__bullets {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }

            .callUs {
                background-color: black;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }          

            .callUs .callUsPhone {
                color: #2E69A5;
            }                
        `}</style>
    </Layout>
)
  
export default Index