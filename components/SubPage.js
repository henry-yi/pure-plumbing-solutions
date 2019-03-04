import Layout from './Layout';
import Banner from './Banner';
import BusinessPoint from './BusinessPoint';

const SubPage = (props) => (
    <Layout>
        <Banner title={props.title} />
        {props.children}
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            
        }

        @media (min-width: 1024px) {
            .bannerImage {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 430px;
                background-color: #D8D8D8;
            }
        }

        @media (min-width: 1440px) {
            
        }
        `}</style>
    </Layout>
)

export default SubPage;