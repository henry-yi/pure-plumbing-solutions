const BusinessPoint = (props) => (
    <div className="container">
        <i className="icon fas fa-tint"></i>
        <div className="text-container">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>        
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            .container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                margin-left: 5px;
                width: 100%;
            }

            .icon {
                margin-top: 15px;
                color: #2E69A5;
            }

            .title {
                margin-left: 10px;
                font-family: "Avenir Next";
                font-size: 20px;
                font-weight: 500;
            }

            .description {
                margin-left: 10px;
                font-family: "Avenir Next";
                font-size: 16px;
                line-height: 33px;
                margin-bottom: 20px;
            }            
        }

        @media (min-width: 1024px) {
            .container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                margin-left: 20px;
                width: ${sizes[props.source].medium};
            }

            .icon {
                margin-top: 15px;
                color: #2E69A5;
            }

            .title {
                margin-left: 25px;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
            }

            .description {
                margin-left: 25px;
                font-family: "Avenir Next";
                font-size: 18px;
                line-height: 33px;
            }            
        }

        @media (min-width: 1440px) {
            .container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                margin-left: 20px;
                width: ${sizes[props.source].large};
                height: 130px;
            }

            .icon {
                margin-top: 15px;
                color: #2E69A5;
            }

            .title {
                margin-left: 25px;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
            }

            .description {
                margin-left: 25px;
                font-family: "Avenir Next";
                font-size: 20px;
                line-height: 33px;
            }            
        }
        `}</style>
    </div>
)

const sizes = {
    index: {
        medium: "250px",
        large: "310px"
    },
    subpage: {
        medium: "40%",
        large: "40%"
    }
}

export default BusinessPoint;