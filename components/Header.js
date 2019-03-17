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
        .header {
            width: 100%;
        }

        .header__logo-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #000000;
        }

        .header__logo {
            background-image: url("/static/logo.png");
            background-size: contain;
            background-repeat: no-repeat;
        }

        .header__24 {
            color: #FFFFFF;
        }

        .social_media_block {
            text-align: right;
        }

        .fab, .fas {
            margin: 10px;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
            color: #777;
        }

        .header__phone {
            height: 48px;
            color: #FFFFFF;	
            font-family: "Avenir Next";	
            font-size: 24px;	
            font-weight: 500;	
            line-height: 48px;
        }

        .header__nav-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: #212222;
        }

        .nav-bar__item {
            text-decoration: none;
            color: #ffffff;
            font-family: "Aveni Next";
            font-weight: 500;
            line-height: 48px;
        }

        .nav-bar__item--dropdown {
            cursor: pointer; 
        }

        @media (min-width: 320px) and (max-width: 1023px) {
            .header__logo-bar {
                height: 58px;
            }

            .header__logo {
                margin-left: 12px;
                height: 24px;
                width: 90px;
            }

            .header__24 {
                font-family: "Avenir Next";
                text-align: center;
                margin-top: 5px;
                font-size: 17px;
            }

            .social_media_block {
                margin-right: 12px;
            }

            .fab, .fas {
                font-size: 20px;
            }

            .header__phone {
                display: none;
            }

            .header__nav-bar {
                height: 48px;
            }
            
            .nav-bar__item {
                margin: 0 8px;
                font-size: 16px;
            }
        }

        @media (min-width: 1024px) {
            .header__logo-bar {
                height: 103px;
            }

            .header__logo {
                margin-left: 60px;
                height: 48px;
                width: 180px;
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
                font-size: 22px;
            }

            .header__phone {
                margin-right: 60px;
            }

            .header__mobile__phone {
                display: none;
            }

            .social_media_block {
                margin-right: 60px;
            }

            .fab {
                font-size: 30px;
            }

            .fab:hover {
                color: #2E69A5;
            }

            .header__nav-bar {
                height: 77px;
            }
            .nav-bar__item {
                margin: 0 30px;
                font-size: 24px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }
        }
        
        @media (min-width: 1440px) {
            .header__logo-bar {
                height: 103px;
            }

            .header__logo {
                margin-left: 112px;
                height: 48px;
                width: 180px;
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
                font-size: 22px;
            }

            .header__phone {
                margin-right: 112px;
            }

            .header__mobile__phone {
                display: none;
            }

            .social_media_block {
                margin-right: 112px;
            }

            .fab {
                font-size: 30px;
            }

            .fab:hover {
                color: #2E69A5;
            }

            .header__nav-bar {
                height: 77px;
            }

            .nav-bar__item {
                margin: 0 30px;
                font-size: 24px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }
        }
        `}</style>
    </div>
)

export default Header;