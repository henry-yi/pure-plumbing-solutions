import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const WaterHeater = () => (
   <SubPage 
    title="Water Heater"
    bannerImg=""
    items={["Installation", "Repairs", "Routine Maintenance", "Products"]}
    >
        <div className="bPContainer">
            <div className="section-title" id="Installation">Installation</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="Installation" description="We offer professional residential and commercial water heater installation by a licensed plumbing contractor.  Our warm and friendly service focuses on customer satisfaction, so although your water heater has left you in the cold we will not! There is nothing worse than a blocked drain affecting your house or business. We know the huge inconvenience and hassle it is when you have a blocked drain and our Perth plumbers are qualified and all carry the correct drainage equipment on-board with them to fix your plumbing problem as quickly as possible and unblock your drain." />
                <BusinessPoint source="subpage" title="Repairs" description="Drains can crack or break from a number of different reasons causing huge plumbing problems. The cracked or broken drain can cause restricted flow and drain blockages. Our plumbers are trained to locate the obstruction or damage and repair it – ensuring your home is back up and running with minimal disruptioSave money by repairing your current water heater.  Common repairable items include a new thermocouple, heating element rod, heater control valve, gas pilot assembly, water/gas supply, retrofitting for earthquake safety." />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="Routine Maintenance" description="We offer maintenance and annual maintenance. Routine Maintenance drastically increases the life expectancy and efficiency of your tank or tankless water heater. Hard water deposits will invariably deteriorate the metals of a heat exchange or the inner chamber of a standard water heater. However, with proper maintenance you can increase life expectancy and efficiency, which will ultimately save you money." />
                <BusinessPoint source="subpage" title="Products" description="An older property comes with older drains, old clay drains (which are no longer used in modern plumbing) can crack and are susceptible to root invasion. Old galvanised steel drains can rust and leak or rust and block. Our plumbers are qualified to assess, upgrade and replace your drains." />
            </div>
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            .bPRow {
                margin: 20px 13px;
            }
        }

        @media (min-width: 1024px) {
            .bPContainer {
                padding-bottom: 40px;
                width: 100%;
            }

            .bPRow {
                margin: 0 60px;
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
        }

        @media (min-width: 1440px) {
            .bPContainer {
                padding-bottom: 60px;
                width: 100%;
            }

            .bPRow {
                margin: 0 112px;
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            
            .section-title {
                margin-left: 112px;
                padding-top: 40px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 35px;
                font-weight: 500;
            }
        }
        `}</style>
    </SubPage>
)
  
export default WaterHeater;