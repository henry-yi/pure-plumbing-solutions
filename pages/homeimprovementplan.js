import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const HomeImprovementPlan = () => (
    <SubPage 
    title="Home Improvement Plan"
    bannerImg=""
    items={
        [
            { id: "waterheater", title: "Water Heater" }, 
            { id: "drainandsewerlines", title: "Drain and Sewer Lines" },
            { id: "plumbingfixtures", title: "Plumbing Fixtures"}
        ]
    }
    >
        <div className="bPContainer">
            <div className="section-title" id="waterheater">Water Heater</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Hard water deposits will invariably deteriorate the metals of a heat exchange or the inner chamber of a standard water heater. However, with proper maintenance, you can increase life expectancy and efficiency, which will ultimately save you money."/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Sediment flushing water heater or flushing/backflushing heat exchange(tankless)"/>
                <BusinessPoint source="subpage" title="" description="Check water/gas supply lines for potential leaks"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Pressure test for water traveling safely through your pipes"/>
                <BusinessPoint source="subpage" title="" description="Safety check to ensure your safety from gas leaks, earthquake strapping"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Anode rod assessment ensures your heating element isn’t destroyed by sediment in your tank."/>
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="drainandsewerlines">Drain and Sewer Lines</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Our expert plumbers can inspect and detect potential leaks or drain obstructions before they become expensive problems and leave you temporarily without water.  However, with proper maintenance, you can increase life expectancy and efficiency of your drains, which will ultimately save you money."/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Drain and sewer line back-up or blockage"/>
                <BusinessPoint source="subpage" title="" description="Belly or low spot in the pipe and collapsed sewer lines"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Broken or cracked pipes"/>
                <BusinessPoint source="subpage" title="" description="Root intrusion damage"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="New Construction Plumbing"/>
                <BusinessPoint source="subpage" title="" description="Offset pipes"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Property line clean out"/>
                <BusinessPoint source="subpage" title="" description="Main Line Installation"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Underfloor Drain Line Inspection"/>
                <BusinessPoint source="subpage" title="" description="Drain Cleaning"/>
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="plumbingfixtures">Plumbing Fixtures</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="We provide a list of safety checks to ensure a potential leak is resolved before it can occur. Our list includes but not limited to the following"/>
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
  
export default HomeImprovementPlan;