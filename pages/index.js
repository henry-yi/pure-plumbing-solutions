import Layout from '../components/Layout';
import HowCanWeHelpCard from '../components/HowCanWeHelpCard';
import BusinessPoint from '../components/BusinessPoint';
import Link from 'next/link';

const Index = () => (
    <Layout>
        <div className="jumbotron">
            <div className="cta-box">
                <div className="cta-text">Need A Plumber?<br/>We Can Help.</div>
                <Link className="cta-link" href="/contact">
                    <div className="cta-button">Get Free Quote</div>
                </Link>
            </div>
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
            @media (min-width: 1440px) {
                .jumbotron {
                    height: 690px;
                }

                .cta-box {
                    width: 319px;
                }

                .cta-text {
                    width: 319px;
                }

                .cta-button {
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
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                height: 720px;
                position: relative;
                padding-top: 72px;
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 110.39%), url('../static/valve.jpg');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
            
            .cta-box {
                width: 319px;
                margin-right: 6.67%;
                margin-bottom: 50px;
            }

            .cta-text {
                font-size: 42px;	
                font-weight: 500;	
                line-height: 64px;
                color: #FFFFFF;
                font-size: 40px;
                font-family: "Helvetica";
                margin-bottom: 16px;
            }

            .cta-button {
                cursor: pointer;
                width: 160px;
                height: 44px;
                background-color: #0D8AF5;
                color: #FFFFFF;
                font-family: "Helvetica";
                font-size: 21px;
                font-weight: 500;
                line-height: 42px;
                text-align: center;
                border-radius: 4px;
                padding: 6px 18px;
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