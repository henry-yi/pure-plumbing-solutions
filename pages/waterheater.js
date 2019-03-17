import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const WaterHeater = () => (
   <SubPage 
    title="Water Heater"
    bannerImg=""
    items={
        [
            { id: "installation", title:"Installation" }, 
            { id: "repairs", title: "Repairs" }, 
            { id: "routine-maintenance", title: "Routine Maintenance" }, 
            { id: "products", title: "Products" }
        ]
    }
    >
        <div className="bPContainer">
            <div className="section-title" id="installation">Installation</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="We offer professional residential and commercial water heater installation by a licensed plumbing contractor.  Our warm and friendly service focuses on customer satisfaction, so although your water heater has left you in the cold we will not!" />
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="repairs">Repairs</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Save money by repairing your current water heater.  Common repairable items include a new thermocouple, heating element rod, heater control valve, gas pilot assembly, water/gas supply, retrofitting for earthquake safety." />
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="routine-maintenance">Routine Maintenance</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="We offer maintenance and annual maintenance. Routine Maintenance drastically increases the life expectancy and efficiency of your tank or tankless water heater. Hard water deposits will invariably deteriorate the metals of a heat exchange or the inner chamber of a standard water heater. However, with proper maintenance you can increase life expectancy and efficiency, which will ultimately save you money." />
                <BusinessPoint source="subpage" title="" description="Sediment flushing water heater or flushing/backflushing heat exchange(tankless)." />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Check water/gas supply lines for potential leaks" />
                <BusinessPoint source="subpage" title="" description="Pressure test for water traveling safely through your pipes" />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Safety check to ensure your safety from gas leaks, earthquake strapping" />
                <BusinessPoint source="subpage" title="" description="Anode rod assessment ensures your heating element isn’t destroyed by sediment in your tank." />
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="products">Products</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Tankless Hot Water Heater" />
                <BusinessPoint source="subpage" title="" description="Gas Water Heater" />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Electric Water Heater" />
                <BusinessPoint source="subpage" title="" description="Commercial Water Heater" />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Return Line for instant hot water" />
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
  
export default WaterHeater;