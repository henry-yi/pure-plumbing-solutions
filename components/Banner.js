const Banner = (props) => (
    <div>
        <div className="banner-image">
            <div className="banner-text">{props.title}</div>
        </div>
        <style jsx>{`
            @media (min-width: 320px) and (max-width: 1023px) {
                .banner-image {
                    height: 96px;
                    background: gray;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                .banner-text {
                    margin-left: 12px;
                    color: #FFFFFF;	
                    font-family: "Avenir Next";	
                    font-size: 24px;	
                    font-weight: 500;	
                    line-height: 24px;                    
                }
            }

            @media (min-width: 1024px) {
                .banner-image {
                    height: 180px;
                    background: gray;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                .banner-text {
                    margin-left: 60px;
                    color: #FFFFFF;	
                    font-family: "Avenir Next";	
                    font-size: 30px;	
                    font-weight: 500;	
                    line-height: 48px;                    
                }
            }

            @media (min-width: 1440px) {
                .banner-image {
                    height: 180px;
                    background: gray;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                .banner-text {
                    margin-left: 112px;
                    color: #FFFFFF;	
                    font-family: "Avenir Next";	
                    font-size: 35px;	
                    font-weight: 500;	
                    line-height: 48px;                    
                }
            }
        `}</style>
    </div>
)
  
export default Banner;