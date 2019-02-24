import Link from 'next/link';

const Header = () => (
    <div className="header">
        <div className="header__logo-bar">
            <div className="header__logo"></div>
            <div className="header__phone">(510) 123-1234</div>
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
        </div>
        <style jsx>{`
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

            .header__phone {
                margin-right: 112px;
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
        `}</style>
    </div>
)

export default Header;