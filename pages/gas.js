import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const Gas = () => (
   <SubPage 
    title="Gas"
    subtext="Ever dream of an outdoor grill,  firepit, outdoor kitchen, a gas fireplace to keep you warm in the winter or converting to a gas stovetop? To ensure your safety, we provide professional residential and commercial gas line installation by a licensed plumbing contractor."
    bannerImg=""
    items={
        [
            { id: "installation", title: "Installation" }, 
            { id: "repairs", title: "Repairs" }
        ]
    }
    >
        <div className="bPContainer">
            <div className="section-title" id="installation">Installation</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="There are many benefits to transitioning to gas appliances.  Gas appliances are the cleanest fuel to burn, which is good for the environment.  They are also energy efficient, which will save you money on your electric bill. These highly sought after upgrades can increase the value of your home." />
            </div>
        </div>
        <div className="bPContainer">
            <div className="section-title" id="repairs">Repairs</div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="" description="If you smell gas or find out you have a gas leak in your home, give us a call immediately. We have the equipment to ensure your safety and repair even the smallest of gas leaks. Our plumbers are highly trained to complete your job to the highest industry and customer service standards." />
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
  
export default Gas;