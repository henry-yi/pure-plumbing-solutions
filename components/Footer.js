const Footer = () => (
    <div className="footer">
        <div className="footer__inner"><i class="far fa-copyright"></i> 2019 Pure Plumbing Solutions. All rights reserved.</div>
        <div className="social_media_block">
            <a className="social_media_icon" href="#">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a className="social_media_icon" href="#">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="social_media_icon" href="#">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
        <style jsx>{`
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
                color: lightblue;
            }
    
        `
        }</style>
    </div>
)

export default Footer;