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
                    margin-top: 30px;

                    text-align: center;
                }

                .helpCardIco {
                    font-size: 40px;
                }

                .cardTitle {
                    font-size: 26px;
                }

                .cardText {
                    font-size: 22px;
                }

                .cardText div {
                    margin: 7px;
                }
            `}</style>
        </div>
    </Link>
)

export default HowCanWeHelpCard;