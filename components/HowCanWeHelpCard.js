import Link from 'next/link';

const HowCanWeHelpCard = (props) => (
    <Link href={"/" + props.destination}>
        <div className="cardContainer">
            <div className="cardContent">
                <i className={"helpCardIco fas fa-" + props.ico} />
                <br />
                <p className="cardTitle">{props.title}</p>
                <div className="cardText">{
                    props.items.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                    }
                </div>
            </div>
            <style jsx>{`
                .cardContainer {
                    margin: 0 7px;
                    width: 320px;
                    height: 476px;
                    background-color: #FFFFFF;
                    -webkit-transition: all 1s;
                    transition: all 1s;
                }

                .cardContainer:hover {
                    background-color: #2E69A5;
                }

                .cardContent {
                    margin: 30px 0;
                    text-align: center;
                }

                .helpCardIco {
                    font-size: 40px;
                }

                .cardTitle {
                    font-size: 22px;
                }

                .cardText {
                    font-size: 18px;
                }

                .cardText div {
                    margin: 12px 0;
                }
            `}</style>
        </div>
    </Link>
)

export default HowCanWeHelpCard;