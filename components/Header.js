import Link from 'next/link';
import { withRouter } from 'next/router';

const Header = ({ router }) => (
    <div className="header">
        <div className="header__logo-bar">
            <Link href="/">
                <a className="nav-bar__item nav-bar__item__logo"><div className="header__logo"></div></a>            
            </Link>
            
            <div className="header__right">
                {/* <a className="nav-bar__item nav-bar__item--dropdown">Services</a> */}
                <Link href="/about">
                    <a className="nav-bar__item">About</a>            
                </Link>
                {router.pathname !== '/contact' &&             
                <Link href="/contact">
                    <a className="nav-bar__item nav-bar__item__quote">Get Free Quote</a>            
                </Link>}                              
            </div>
            {/* <div className="header__right_mobile">
            <Link href="/about">
                    <a className="nav-bar__item">About</a>            
                </Link>
                {Router.route !== '/contact' &&             
                <Link href="/contact">
                    <a className="nav-bar__item nav-bar__item__quote">Get Free Quote</a>            
                </Link>}                             
            </div>             */}
        </div>
        <style jsx>{`
        .header {
            width: 100%;
            position: fixed;
            background: #ffffff;
            z-index: 1;
        }

        .header__logo-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header__logo {
            background-image: url("/static/logo.png");
            background-size: contain;
            background-repeat: no-repeat;
        }

        .header__right {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
        }

        /*.header__right_mobile {
            display: none;
        }*/

        .nav-bar__item {
            text-decoration: none;
            color: #000000;
            font-family: "Helvetica";
            font-style: normal;
            font-weight: normal;
            line-height: 24px;
            font-size: 18px;
        }

        .nav-bar__item.nav-bar__item__logo {
            margin-left: 0;

        }

        .nav-bar__item.nav-bar__item__quote {
            margin-right: 0;
            border: 2px solid #0D8AF5;
            box-sizing: border-box;
            border-radius: 4px;
            padding: 5px 16px;
            color: #0D8AF5;
        }

        .nav-bar__item--dropdown {
            cursor: pointer; 
        }
        
        @media (min-width: 320px) and (max-width: 1023px) {
            /*.header__right {
                display: none;
            }*/

            .header__right_mobile {
                display: block;
            }

            .header__logo-bar {
                height: 36px;
                margin: 0% 6.67%;
            }

            .header__logo {
                height: 24px;
                width: 90px;
            }

            .nav-bar__item {
                margin: 0 23px;
                font-size: 18px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }
            
            .nav-bar__item.nav-bar__item__quote {
                padding: 0px 16px;
            }
        }

        @media (min-width: 1024px) {
            .header__logo-bar {
                height: 72px;
                margin: 0% 6.67%;
            }

            .header__logo {
                height: 48px;
                width: 180px;
            }

            .nav-bar__item {
                margin: 0 23px;
                font-size: 18px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }
        }

        @media (min-width: 1440px) {
            .header__logo-bar {
                height: 72px;
                margin: 0% 6.67%;
            }

            .header__logo {
                height: 48px;
                width: 180px;
            }

            .nav-bar__item {
                margin: 0 23px;
                font-size: 18px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }
        }
        `}</style>
    </div>
)

export default withRouter(Header);