import Header from '../components/Header';
import Layout from '../components/Layout';
import SubPage from '../components/SubPage';
import BusinessPoint from '../components/BusinessPoint';

const Gas = () => (
   <SubPage 
    title="Gas"
    bannerImg=""
    >
        <div className="bPContainer">
            <div className="bPRow">
                <BusinessPoint source="subpage" title="Blocked Drain & Clogged Drains" description="There is nothing worse than a blocked drain affecting your house or business. We know the huge inconvenience and hassle it is when you have a blocked drain and our Perth plumbers are qualified and all carry the correct drainage equipment on-board with them to fix your plumbing problem as quickly as possible and unblock your drain." />
                <BusinessPoint source="subpage" title="Drain Repair" description="Drains can crack or break from a number of different reasons causing huge plumbing problems. The cracked or broken drain can cause restricted flow and drain blockages. Our plumbers are trained to locate the obstruction or damage and repair it – ensuring your home is back up and running with minimal disruption." />
            </div>
            <div className="bPRow">
                <BusinessPoint source="subpage" title="Blocked Toilets & Blocked Sinks" description="Is your toilet or sink unable to empty or clearing very slowly? Or is your sink making loud unusual sounds when draining? Your toilet blockage or sink blockage could be due to tree roots, foreign objects or fats. All our qualified Perth plumbers carry the necessary equipment to unblock your toilet or unblock your sinks, and can help you fix your blockage today." />
                <BusinessPoint source="subpage" title="Drain Replacement" description="An older property comes with older drains, old clay drains (which are no longer used in modern plumbing) can crack and are susceptible to root invasion. Old galvanised steel drains can rust and leak or rust and block. Our plumbers are qualified to assess, upgrade and replace your drains." />
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
        }
        `}</style>
    </SubPage>
)
  
export default Gas;