const Banner = (props) => (
    <div>
        <div className="banner-image">
            <div className="banner-text">{props.title}</div>
            <div className="banner-subtext">{props.subtext}</div>
            <div className="banner__nav-bar">{
                props.items.map((item, index) => (
                    <a className="banner__item" href={`#${item.id}`}>{item.title}</a> 
                ))}                                       
            </div>
        </div>
        <style jsx>{`
            .banner-image {
                background: gray;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
            }

            .banner-text {
                width: 100%;
                color: #FFFFFF;
                font-family: "Avenir Next";
                font-weight: 500;
            }

            .banner-subtext {
                width: 100%;
                color: #FFFFFF;
                font-family: "Avenir Next";
            }

            .banner__nav-bar {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
            }

            .banner__item {
                text-decoration: none;
                color: #ffffff;
                font-family: "Aveni Next";
                font-weight: 500;
                line-height: 24px;
            }

            @media (min-width: 320px) and (max-width: 1023px) {
                .banner-image {
                    height: 290px;
                }

                .banner-text {
                    margin-top: 12px;
                    margin-left: 12px;
                    font-size: 24px;	
                    line-height: 24px;                    
                }

                .banner-subtext {
                    margin-top: 12px;
                    margin-left: 12px;
                    margin-right: 12px;
                    font-size: 18px;
                }

                .banner__nav-bar {
                    margin-bottom: 12px;
                    margin-left: 7px;
                }

                .banner__item {
                    margin: 0 5px;
                    font-size: 14px;
                }
            }

            @media (min-width: 1024px) {
                .banner-image {
                    height: 300px;
                }

                .banner-text {
                    margin-top: 24px;
                    margin-left: 60px;
                    font-size: 30px;	
                    line-height: 48px;                    
                }
                
                .banner-subtext {
                    margin-top: 24px;
                    margin-left: 60px;
                    margin-right: 60px;
                    font-size: 24px;
                }

                .banner__nav-bar {
                    margin-bottom: 24px;
                    margin-left: 45px;
                }

                .banner__item {
                    margin: 0 15px;
                    font-size: 18px;
                }

                .banner__item:hover {
                    cursor: pointer;
                    color: #2E69A5;
                    transition: 0.3s;
                }                
            }

            @media (min-width: 1440px) {
                .banner-image {
                    height: 340px;
                }

                .banner-text {
                    margin-top: 24px;
                    margin-left: 112px;
                    font-size: 35px;	
                    line-height: 48px;                    
                }

                .banner-subtext {
                    margin-top: 24px;
                    margin-left: 112px;
                    margin-right: 112px;
                    font-size: 30px; 
                }

                .banner__nav-bar {
                    margin-bottom: 24px;
                    margin-left: 97px;
                }

                .banner__item {
                    margin: 0 15px;
                    font-size: 18px;
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