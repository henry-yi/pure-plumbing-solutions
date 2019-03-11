import Link from 'next/link';

const Header = () => (
    <div className="header">
        <div className="header__logo-bar">
            <div className="header__logo"></div>
            <div className="header__right">
                <div className="header__righttop">
                    <div className="header__24">24 hour service</div>
                    <div className="header__phone">(408) 891-0720</div>
                </div>
                <div className="social_media_block">
                    <a className="header__mobile__phone" href="tel:4088910720">
                        <i className="fas fa-phone"></i>
                    </a>
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
            </div>
        </div>
        <div className="header__nav-bar">
                <Link href="/">
                    <a className="nav-bar__item">Home</a>            
                </Link>
                <Link href="/about">
                    <a className="nav-bar__item">About Us</a>            
                </Link>
                <a className="nav-bar__item nav-bar__item--dropdown">Services</a>            
                <Link href="/contact">
                    <a className="nav-bar__item">Contact Us</a>            
                </Link>
                <Link href="/faq">
                    <a className="nav-bar__item">FAQ</a>            
                </Link>                                
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            .header {
                width: 100%;
            }

            .header__logo-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 58px;
                background: #000000;
            }

            .header__logo {
                margin-left: 12px;
                height: 24px;
                width: 90px;
                background-image: url("/static/logo.png");
                background-size: contain;
                background-repeat: no-repeat;
            }

            /* .header__phone {
                margin-right: 12px;
                height: 48px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 16px;	
                font-weight: 500;	
                line-height: 48px;
            } */

            .header__24 {
                color: #FFFFFF;
                font-family: "Avenir Next";
                text-align: center;
                margin-top: 5px;
                font-size: 17px;
            }

            .social_media_block {
                text-align: right;
                margin-right: 12px;
            }

            .fab, .fas {
                margin: 10px;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                color: #777;
                font-size: 20px;
            }

            .header__phone {
                display: none;
            }

            .header__nav-bar {
                display: flex;
                align-items: center;
                justify-content: center; 
                height: 48px;
                width: 100%;
                background-color: #212222;
            }
            
            .nav-bar__item {
                text-decoration: none;
                margin: 0 8px;
                color: #ffffff;
                font-family: "Aveni Next";
                font-size: 16px;
                font-weight: 500;
                line-height: 48px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .nav-bar__item--dropdown {
                cursor: pointer; 
            }
        }

        @media (min-width: 1024px) {
            .header {
                width: 100%;
            }

            .header__logo-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 103px;
                background: #000000;
            }

            .header__logo {
                margin-left: 60px;
                height: 48px;
                width: 180px;
                background-image: url("/static/logo.png");
                background-size: contain;
                background-repeat: no-repeat;
            }

            .header__right {
                width: 380px;
            }

            .header__righttop {                
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header__24 {
                color: #FFFFFF;
                font-size: 22px;
            }

            .header__phone {
                margin-right: 60px;
                height: 48px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 24px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .header__mobile__phone {
                display: none;
            }

            .social_media_block {
                text-align: right;
                margin-right: 60px;
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

            .header__nav-bar {
                display: flex;
                align-items: center;
                justify-content: center; 
                height: 77px;
                width: 100%;
                background-color: #212222;
            }
            .nav-bar__item {
                text-decoration: none;
                margin: 0 30px;
                color: #ffffff;
                font-family: "Aveni Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .nav-bar__item--dropdown {
                cursor: pointer; 
            }
        }
        
        @media (min-width: 1440px) {
            .header {
                width: 100%;
            }

            .header__logo-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 103px;
                background: #000000;
            }

            .header__logo {
                margin-left: 112px;
                height: 48px;
                width: 180px;
                background-image: url("/static/logo.png");
                background-size: contain;
                background-repeat: no-repeat;
            }

            .header__right {
                width: 440px;
            }

            .header__righttop {                
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header__24 {
                color: #FFFFFF;
                font-size: 22px;
            }

            .header__phone {
                margin-right: 112px;
                height: 48px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 24px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .header__mobile__phone {
                display: none;
            }

            .social_media_block {
                text-align: right;
                margin-right: 60px;
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

            .header__nav-bar {
                display: flex;
                align-items: center;
                justify-content: center; 
                height: 77px;
                width: 100%;
                background-color: #212222;
            }
            .nav-bar__item {
                text-decoration: none;
                margin: 0 30px;
                color: #ffffff;
                font-family: "Aveni Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .nav-bar__item--dropdown {
                cursor: pointer; 
            }
        }
        `}</style>
    </div>
)

export default Header;