import Banner from '../components/Banner';
import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <Banner title="About Pure Plumbing Solutions"/>
        <div className="about-container">
            <div className="key-point">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non nunc libero. Donec scelerisque ultrices mattis. Aliquam sapien ligula, eleifend in magna vel, condimentum accumsan magna. Aliquam fringilla elementum ex, in eleifend ipsum vulputate non.</p>
            </div>
            <div className="key-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non nunc libero. Donec scelerisque ultrices mattis. Aliquam sapien ligula, eleifend in magna vel, condimentum accumsan magna. Aliquam fringilla elementum ex, in eleifend ipsum vulputate non. Ut malesuada facilisis posuere. Phasellus ut ligula ultricies justo malesuada tristique id eget eros.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor turpis in lorem consequat accumsan. Vestibulum dictum egestas felis vel consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sodales sit amet massa convallis rhoncus. Maecenas eu ullamcorper dui. Integer ornare dolor pharetra nibh dapibus posuere. Vestibulum ultricies vestibulum sagittis. Sed arcu leo, vestibulum at quam vitae, consequat auctor purus.</p>
            </div>
        </div>
        <style jsx>{`
            @media (min-width: 320px) and (max-width: 1023px) {
                .about-container {
                    display: flex;
                }

                .key-point {
                    margin-left: 12px;
                    margin-right: 14px;
                    width: 50%;
                }

                .key-description {
                    margin-right: 12px;
                    margin-left: 14px;
                    width: 50%;
                }

                .key-description p {
                    font-family: "Avenir Next";
                    font-size: 18px;
                    line-height: 24px;                    
                }

                .key-point p {
                    font-family: "Avenir Next";
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 24px;                    
                }
            }

            @media (min-width: 1024px) {
                .about-container {
                    display: flex;
                }

                .key-point {
                    margin-left: 60px;
                    margin-right: 20px;
                    width: 50%;
                }

                .key-description {
                    margin-right: 60px;
                    margin-left: 20px;
                    width: 50%;
                }

                .key-description p {
                    font-family: "Avenir Next";
                    font-size: 20px;
                    line-height: 24px;                    
                }

                .key-point p {
                    font-family: "Avenir Next";
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 24px;                    
                }
            }

            @media (min-width: 1440px) {
                .about-container {
                    display: flex;
                }

                .key-point {
                    margin-left: 112px;
                    margin-right: 28px;
                    width: 50%;
                }

                .key-description {
                    margin-right: 112px;
                    margin-left: 28px;
                    width: 50%;
                }

                .key-description p {
                    font-family: "Avenir Next";
                    font-size: 24px;
                    line-height: 24px;                    
                }

                .key-point p {
                    font-family: "Avenir Next";
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 24px;                    
                }
            }
        `}</style>
    </Layout>
)
  
export default About;