import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const PlumbingFixtures = () => (
    <SubPage 
    title="Plumbing Fixtures"
    bannerImg=""
    items={
        [
            { id: "installation", title: "Installation" }, 
            { id: "repairs", title: "Repairs" },
            { id: "routinemaintenance", title: "Routine Maintenance"}
        ]
    }
    >
        <div className="bPContainer">
            <div className="section-title" id="installation">Installation</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Some examples of fixtures our professional plumbers can install include the following."/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Laundry room sinks, washing machine water line, gas dryer line"/>
                <BusinessPoint source="subpage" title="" description="Bathroom faucets, sinks, and vanities"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Kitchen faucets, sinks, and appliances"/>
                <BusinessPoint source="subpage" title="" description="Showers and bathtubs"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Toilets"/>
                <BusinessPoint source="subpage" title="" description="Refrigerator water lines"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Instant hot water dispenser"/>
                <BusinessPoint source="subpage" title="" description="Garbage disposal"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Outdoor hose bibbs, drinking fountains, gas BBQs"/>
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="repairs">Repairs</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Use a plumber you can trust! Appliance and fixture repairs can be deceiving and hard to understand. You can expect the most cost-efficient solutions from our professional plumbers. Fixing a simple leak can save you hundreds or thousands of dollars on your water bill and water damage repair."/>
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="routinemaintenance">Routine Maintenance</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="We offer maintenance and annual maintenance. Routine maintenance can save your home from numerous potential water hazards. We provide a list of safety checks to ensure a potential leak is resolved before it occurs. Our list includes but is not limited to the following."/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Water supply line quality"/>
                <BusinessPoint source="subpage" title="" description="Water/drain line damage"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Emergency shut off valves in working condition"/>
                <BusinessPoint source="subpage" title="" description="Toilets checked for leaks"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Under sink water spot inspection"/>
            </div>
        </div>
        <style jsx>{`
            @media (min-width: 320px) and (max-width: 1023px) {
                .bPContainer {
                    padding-bottom: 0px;
                }
                
                .bPRow {
                    margin: 0px 13px;
                }
                
                .section-title {
                    margin-left: 12px;
                }
            }
            
            @media (min-width: 1024px) {
                .bPContainer {
                    padding-bottom: 40px;
                }
                
                .bPRow {
                    margin: 0 60px;
                    margin-top: 40px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                }
                
                .section-title {
                    margin-left: 60px;
                }
            }
            
            @media (min-width: 1440px) {
                .bPContainer {
                    padding-bottom: 60px;
                }
                
                .bPRow {
                    margin: 0 112px;
                    margin-top: 30px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                }
                
                .section-title {
                    margin-left: 112px;
                }
            }
            
            .bPContainer {
                padding-bottom: 60px;
                width: 100%;
            }
            
            .section-title {
                padding-top: 40px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 35px;
                font-weight: 500;
            }
        `}</style>
    </SubPage>
)
  
export default PlumbingFixtures;