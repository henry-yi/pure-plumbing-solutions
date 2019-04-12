import Layout from './Layout';
import Banner from './Banner';

const SubPage = (props) => (
    <Layout>
        <Banner title={props.title} subtext={props.subtext} items={props.items ? props.items : []}/>
        {props.children}
    </Layout>
)

export default SubPage;