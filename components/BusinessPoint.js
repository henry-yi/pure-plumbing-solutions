const BusinessPoint = (props) => (
    <div className="container">
        <i className="icon fas fa-tint"></i>
        <div className="text-container">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>        
        </div>
        <style jsx>{`
            .container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                margin-left: 20px;
                width: 310px;
                height: 148px;
            }

            .icon {
                margin-top: 15px;
                color: #2E69A5;
            }

            .title {
                margin-left: 25px;
                font-family: "Avenir Next";
                font-size: 35px;
                font-weight: 500;
            }

            .description {
                margin-left: 25px;
                font-family: "Avenir Next";
                font-size: 24px;
                line-height: 33px;
            }            
        `}</style>
    </div>
)

export default BusinessPoint;