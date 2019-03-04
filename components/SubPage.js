import Layout from './Layout';
import Banner from './Banner';
import BusinessPoint from './BusinessPoint';

const SubPage = (props) => (
    <Layout>
        <Banner title={props.title} />
        {props.children}
    </Layout>
)

export default SubPage;