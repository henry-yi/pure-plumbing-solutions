import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const Water = () => (
    <SubPage 
    title="Water"
    bannerImg=""
    items={
        [
            { id: "installation", title:"Installation" }, 
            { id: "repairs", title: "Repairs" }
        ]
    }
    >
        <div className="bPContainer">
            <div className="section-title" id="installation">Installation</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="If your home is more than 20 years old, it’s highly possible you still have galvanized piping. Over time galvanized pipes can clog up water lines causing them to be inoperable. Replacing your home with copper piping will not only ensure better water pressure to your fixtures but will ultimately increase the value of your home. Additionally, there are a few installations that can make certain your water and pipe quality will remain at their highest life expectancy."/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Pressure reducing valve, for safe water travel"/>
                <BusinessPoint source="subpage" title="" description="Emergency quarter turn mainline shut off valve"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Water softener system, to reduce hard water deposits"/>
                <BusinessPoint source="subpage" title="" description="Water hammer arrestor, to ensure pipes do not shake"/>
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="Water line descaler, to reduce hard water deposits"/>
                <BusinessPoint source="subpage" title="" description="Water purification system"/>
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="repairs">Repairs</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="There are numerous signs you want to watch out for that raise a red flag when a water repair may need to take place. If you notice pooling water in your front yard or an increase in your water bill, this is usually due to a leak either underground or in the crawl space of your home."/>
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
  
export default Water;