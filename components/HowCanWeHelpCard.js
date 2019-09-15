import Link from 'next/link';

const HowCanWeHelpCard = (props) => (
    <Link href={"/" + props.destination}>
        <div className="cardContainer">
            <div className="cardCircle">
                <i className={"helpCardIco fas fa-" + props.ico} />
            </div>
            <p className="cardTitle">{props.title}</p>
            <style jsx>{`
            .cardContainer {
                background-color: #FFFFFF;  
            }

            .cardCircle {
                cursor: pointer;
                background-color: #EDF4FF;
                transition: background-color 0.5s ease;
            }

            .cardCircle:hover {
                background-color: #C7CED9;
            }

            .cardContent {
                margin: 30px 0;
                text-align: center;
            }

            .cardTitle { 
                color: #032057;
            }

            .cardText {
                margin: 0 7px;
            }
            
            .cardText div {
                margin: 12px 0;
            }

            @media (min-width: 320px) and (max-width: 1023px) {
                .cardContainer {
                    width: 310px;
                    border-bottom: 1px solid black;
                }

                .helpCardIco {
                    font-size: 31px;
                }

                .cardTitle {
                    font-size: 20px;
                    margin: 13px 7px;
                }

                .cardText {
                    font-size: 17px;
                }
            }

            @media (min-width: 1024px) {
                .cardContainer {
                    width: 320px;
                    height: 200px;
                }

                .cardCircle {
                    border-radius: 100px;
                    height: 100px;
                    width: 100px;
                    margin: auto;
                    text-align: center;
                }

                .helpCardIco {
                    font-size: 31px;
                    position: relative;
                    top: calc(50% - 20px);
                }

                .cardTitle {
                    font-size: 21px;
                    margin: 13px 7px;
                    text-align: center;
                }

                .cardText {
                    font-size: 17px;
                }
            }

            @media (min-width: 1440px) {
                .cardContainer {
                    width: 320px;
                    height: 250px;
                }

                .cardCircle {
                    height: 135px;
                    width: 135px;
                }

                .helpCardIco {
                    font-size: 40px;
                }

                .cardTitle {
                    font-size: 24px;
                    line-height: 36px;
                }

                .cardText {
                    font-size: 18px;
                }
            }
            `}</style>
        </div>
    </Link>
)

export default HowCanWeHelpCard;