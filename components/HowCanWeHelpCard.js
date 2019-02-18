import Link from 'next/link';

const HowCanWeHelpCard = (props) => (
    <Link href={"/" + props.destination}>
        <div className="cardContainer">
            <div className="cardContent">
                <i className={"helpCardIco fas fa-" + props.ico} />
                <br />
                <p className="cardTitle">{props.title}</p>
                <div className="cardText">{props.text}</div>
            </div>
            <style jsx>{`
                .cardContainer {
                    width: 200px;
                    text-align: center;
                    height: 476px;
                    background-color: #FFFFFF;
                    -webkit-transition: all 1s;
                    transition: all 1s;
                }

                .cardContainer:hover {
                    background-color: #BA8843;
                }

                .cardContent {
                    margin-left: 26px;
                    margin-right: 26px;
                    margin-top: 30px;
                    text-align: center;
                    float: left;
                    clear: both
                }

                .helpCardIco {
                    font-size: 40px;
                }

                .cardTitle {
                    font-size: 30px;
                }

                .cardText {
                    font-size: 20px;
                }
            `}</style>
        </div>
    </Link>
)

export default HowCanWeHelpCard;