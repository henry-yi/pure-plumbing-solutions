const Footer = () => (
    <div className="footer">
        <div className="footer__inner"><i className="far fa-copyright"></i> 2019 Pure Plumbing Solutions. All rights reserved.</div>
        <div className="social_media_block">
            <a className="social_media_icon" href="#">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a className="social_media_icon" href="#">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="social_media_icon" href="https://www.yelp.com/biz/pure-plumbing-solutions-los-gatos">
                <i className="fab fa-yelp"></i>
            </a>
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            .footer {
                background-color: #212222;
                height: 175px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 2px 4px 0 rgba(0,0,0,0.5);
            }    

            .footer__inner {
                color: #D8D8D8;
                font-size: 16px;
                font-family: "Avenir Next";
                line-height: 25px;
                font-weight: 500;
                width: 40%;
                margin-left: 12px;
                margin-top: 30px;
            }

            .social_media_block {
                text-align: right;
                margin-right: 12px;
                margin-top: 54px;
            }

            .fab {
                margin: 10px;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                color: #777;
                font-size: 30px;
            }
        }

        @media (min-width: 1024px) {
            .footer {
                background-color: #212222;
                height: 175px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 2px 4px 0 rgba(0,0,0,0.5);
            }    

            .footer__inner {
                color: #D8D8D8;
                font-size: 18px;
                font-family: "Avenir Next";
                line-height: 25px;
                font-weight: 500;
                width: 40%;
                margin-left: 60px;
                margin-top: 43px;
            }

            .social_media_block {
                text-align: right;
                margin-right: 60px;
                margin-top: 30px;
            }

            .fab {
                margin: 10px;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                color: #777;
                font-size: 30px;
            }

            .fab:hover {
                color: #2E69A5;
            }
        }
        
        @media (min-width: 1440px) {
            .footer {
                background-color: #212222;
                height: 175px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 2px 4px 0 rgba(0,0,0,0.5);
            }    

            .footer__inner {
                color: #D8D8D8;
                font-size: 18px;
                font-family: "Avenir Next";
                line-height: 25px;
                font-weight: 500;
                width: 40%;
                margin-left: 112px;
                margin-top: 43px;
            }

            .social_media_block {
                text-align: right;
                margin-right: 112px;
                margin-top: 30px;
            }

            .fab {
                margin: 10px;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                color: #777;
                font-size: 30px;
            }

            .fab:hover {
                color: #2E69A5;
            }
        }
        `
        }</style>
    </div>
)

export default Footer;