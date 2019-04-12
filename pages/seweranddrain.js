import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const SewerAndDrain = () => (
   <SubPage 
    title="Sewer and Drain"
    subtext="From small sink drains to property line clean outs, our plumbers are trained to locate and repair these issues, ensuring your home and drains will be running with little to no disruptions."
    bannerImg=""
    items={
        [
            { id: "repairs", title: "Repairs" }, 
            { id: "routine-maintenance", title: "Routine Maintenance" }
        ]
    }
    >
        <div className="bPContainer">
            <div className="section-title" id="repairs">Repairs</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Sewer and drains can crack or break, which cause substantial plumbing problems. A break or crack in your drain pipe can lead to toxic waste build-up under your home and leave you with a terrible odor as well as costly restoration expenses." />
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="routine-maintenance">Routine Maintenance</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="We offer maintenance and annual maintenance. Routine Maintenance drastically increases the life expectancy and efficiency of your drain and sewer lines.  Our expert plumbers can inspect and detect potential leaks or drain obstructions before they become expensive problems and leave you temporarily without water.  However, with proper maintenance, you can increase life expectancy and efficiency of your drains, which will ultimately save you money." />
                <BusinessPoint source="subpage" title="" description="Drain and sewer line back-up or blockage" />            
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Belly or low spot in the pipe and collapsed sewer lines" />
                <BusinessPoint source="subpage" title="" description="Broken or cracked pipes" />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Root intrusion damage" />
                <BusinessPoint source="subpage" title="" description="New Construction Plumbing" />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Offset pipes" />
                <BusinessPoint source="subpage" title="" description="Property line clean out" />
            </div> 
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Main Line Installation" />
                <BusinessPoint source="subpage" title="" description="Underfloor Drain Line Inspection" />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Drain Cleaning" />
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
  
export default SewerAndDrain;