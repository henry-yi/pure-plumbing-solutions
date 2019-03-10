import Layout from './Layout';
import Banner from './Banner';
import BusinessPoint from './BusinessPoint';

const SubPage = (props) => (
    <Layout>
        <Banner title={props.title} items={props.items ? props.items : []}/>
        {props.children}
    </Layout>
)

export default SubPage;