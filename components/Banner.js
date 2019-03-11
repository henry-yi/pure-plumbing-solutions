const Banner = (props) => (
    <div>
        <div className="banner-image">
            <div className="banner-text">{props.title}</div>
            <div className="banner__nav-bar">{
                props.items.map((item, index) => (
                    <a className="banner__item" href={`#${item.id}`}>{item.title}</a> 
                ))}                                       
            </div>
        </div>
        <style jsx>{`
            @media (min-width: 320px) and (max-width: 1023px) {
                .banner-image {
                    height: 96px;
                    background: gray;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;
                }

                .banner-text {
                    width: 100%;
                    margin-top: 12px;
                    margin-left: 12px;
                    color: #FFFFFF;	
                    font-family: "Avenir Next";	
                    font-size: 24px;	
                    font-weight: 500;	
                    line-height: 24px;                    
                }

                .banner__nav-bar {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 12px;
                    margin-left: 7px;
                    width: 100%;
                }
                .banner__item {
                    text-decoration: none;
                    margin: 0 5px;
                    color: #ffffff;
                    font-family: "Aveni Next";
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 24px;
                }
            }

            @media (min-width: 1024px) {
                .banner-image {
                    height: 180px;
                    background: gray;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;
                }

                .banner-text {
                    width: 100%;
                    margin-top: 24px;
                    margin-left: 60px;
                    color: #FFFFFF;	
                    font-family: "Avenir Next";	
                    font-size: 30px;	
                    font-weight: 500;	
                    line-height: 48px;                    
                }

                .banner__nav-bar {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 24px;
                    margin-left: 45px;
                    width: 100%;
                }
                .banner__item {
                    text-decoration: none;
                    margin: 0 15px;
                    color: #ffffff;
                    font-family: "Aveni Next";
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 24px;
                }

                .banner__item:hover {
                    cursor: pointer;
                    color: #2E69A5;
                    transition: 0.3s;
                }                
            }

            @media (min-width: 1440px) {
                .banner-image {
                    height: 180px;
                    background: gray;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-items: center;
                }

                .banner-text {
                    width: 100%;
                    margin-top: 24px;
                    margin-left: 112px;
                    color: #FFFFFF;	
                    font-family: "Avenir Next";	
                    font-size: 35px;	
                    font-weight: 500;	
                    line-height: 48px;                    
                }

                .banner__nav-bar {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 24px;
                    margin-left: 97px;
                    width: 100%;
                }
                .banner__item {
                    text-decoration: none;
                    margin: 0 15px;
                    color: #ffffff;
                    font-family: "Aveni Next";
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 24px;
                }

                .banner__item:hover {
                    cursor: pointer;
                    color: #2E69A5;
                    transition: 0.3s;
                }
            }
        `}</style>
    </div>
)
  
export default Banner;