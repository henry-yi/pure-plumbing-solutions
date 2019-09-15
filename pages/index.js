import Layout from '../components/Layout';
import HowCanWeHelpCard from '../components/HowCanWeHelpCard';
import BusinessPoint from '../components/BusinessPoint';
import Link from 'next/link';

const Index = () => (
    <Layout>
        <div className="wrapper">
            <div className="jumbotron">
                <div className="cta-box">
                    <div className="cta-text">Need A Plumber?<br/>We Can Help.</div>
                    <Link href="/contact">
                        <div className="cta-button">Get Free Quote</div>
                    </Link>
                </div>
            </div>
            <div className="promises">
                <div className="business-points">
                    <div className="business-points__title">Our Promise</div>
                    <div className="business-points__bullets">
                        <BusinessPoint source="index" title="Honest Advice" description="We promise to only give our honest assessments. If we don’t think it’s broken, we won’t tell you to fix it." />
                        <BusinessPoint source="index" title="Punctual Service" description="We know you’re busy. Thats why we’ll always arrive within the hour of your scheduled time." />
                        <BusinessPoint source="index" title="Solution Guaranteed" description="We’ll do our best to fix your issue but if we can’t, we won’t charge a dime, guaranteed." />
                    </div>
                </div>
            </div>

            <div className="helpCards">
                <div className="helpSectionTitle">Our Services</div>
                <div className="helpCardBox">
                    <HowCanWeHelpCard destination="waterheater" ico="fire" title="Water Heater" items={["Installation","Repairs","Routine Maintenance","Products"]}/>
                    <HowCanWeHelpCard destination="seweranddrain" ico="wrench" title="Sewer & Drain" items={["Drain Cleaning","Sewer Repairs","Main Line Installation","Underfloor Drain Line Inspection"]}/>
                    <HowCanWeHelpCard destination="gas" ico="burn" title="Gas" items={["Pipe Installation","Leak Detection","Repairs","Appliance Hook Up"]}/>
                    <HowCanWeHelpCard destination="plumbingfixtures" ico="toilet" title="Fixtures" items={["Installation & Repairs","Faucets","Toilets","Sinks","Showers"]}/>
                    <HowCanWeHelpCard destination="homeimprovementplan" ico="tasks" title="Home Improvement" items={["Annual Maintenance Plan","Pure Satisfaction","Honesty","Solutions"]}/>
                </div>
                <Link href="/contact">
                    <div className="cta-button">Get Free Quote</div>
                </Link>
            </div>
        </div>
        <style jsx>{`
            .wrapper {
                overflow-x: hidden;
            }

            .promises {
                background: url('../static/wave.svg') bottom center;
                background-size: 100%;
                height: 450px;
                background-repeat: no-repeat;
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

            .helpSectionTitle {
                font-size: 40px;
                line-height: 56px;
                color: #626366;
                margin-top: 25px;
                margin-bottom: 25px;
            }

            .helpCards {
                margin-left: 13%;
                margin-right: 13%;
            }

            .helpCardTitle {
                margin-top: 40px;
                font-weight: bold;
            }

            .helpCardBox {
                display: flex;
                justify-content: space-between;
            }

            .helpCards .cta-button {
                margin: auto;
                margin-bottom: 100px;
            }

            .business-points__title {
                color: #626366;
                font-family: "Helvetica";
                font-weight: 500;
            }

            .business-points__bullets {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }   

            @media (min-width: 320px) and (max-width: 1023px) {
                .jumbotron {
                    width: 100%;
                    height: 100vh;
                    align-items: center;
                }

                .cta-box {
                    height: 112px;
                    margin-left: 4.27%;
                }

                .helpCardBox {
                    flex-direction: column;
                }

                .helpCards .cta-button {
                    margin-top: 50px;
                }
    
                .cta-text {
                    font-size: 36px;	
                }
                
                .business-points__title {
                    padding-left: 4.27%;
                    padding-top: 38px;
                    font-size: 40px;
                    line-height: 56px;
                    background-color: #EDF4FF;
                }
                
                .promises {
                    height: 650px;
                }
            }

            @media (min-width: 1024px) {
                .jumbotron {
                    height: 550px;
                }

                .cta-box {
                    width: 319px;
                }

                .cta-text {
                    width: 319px;
                }

                .helpCards {
                    margin: 0 13%;
                }

                .helpCardTitle {
                    font-size: 35px;
                    text-align: left;
                }

                .business-points__title {
                    margin-left: 13%;
                    padding-top: 38px;
                    font-size: 40px;
                    line-height: 56px;
                }

                .business-points__bullets {
                    margin-left: 13%;
                    margin-right: 13%;
                    margin-top: 18px;
                }

                .promises {
                    height: 410px;
                }
            }

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

                .helpCards {
                    margin: 0 13%;
                }

                .helpCardTitle {
                    font-size: 35px;
                    text-align: left;
                }

                .business-points__title {
                    margin-left: 13%;
                    padding-top: 58px;
                    font-size: 40px;
                    line-height: 56px;
                }

                .business-points__bullets {
                    margin-left: 13%;
                    margin-right: 13%;
                    margin-top: 32px;
                }

                .promises {
                    height: 450px;
                }
            }          
        `}</style>
    </Layout>
)
  
export default Index