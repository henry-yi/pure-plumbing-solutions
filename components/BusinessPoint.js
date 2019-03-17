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
        }

        .icon {
            color: #2E69A5;
        }

        .title {
            font-family: "Avenir Next";
            font-weight: 500;
        }

        .description {
            font-family: "Avenir Next";
            line-height: 33px;
        }

        @media (min-width: 320px) and (max-width: 1023px) {
            .container {
                margin-left: 5px;
                width: 100%;
            }

            .icon {
                margin-top: 5px;
            }

            .title {
                margin-left: 10px;
                font-size: 20px;
            }

            .description {
                margin-left: 10px;
                font-size: 16px;
                margin-bottom: 20px;
            }            
        }

        @media (min-width: 1024px) {
            .container {
                margin-left: 20px;
                width: ${sizes[props.source].medium};
            }

            .icon {
                margin-top: 8px;
            }

            .title {
                margin-left: 25px;
                font-size: 24px;
            }

            .description {
                margin-left: 25px;
                font-size: 18px;
            }            
        }

        @media (min-width: 1440px) {
            .container {
                margin-left: 20px;
                width: ${sizes[props.source].large};
            }

            .icon {
                margin-top: 8px;
            }

            .title {
                margin-left: 25px;
                font-size: 24px;
            }

            .description {
                margin-left: 25px;
                font-size: 20px;
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
        medium: "45%",
        large: "45%"
    }
}

export default BusinessPoint;