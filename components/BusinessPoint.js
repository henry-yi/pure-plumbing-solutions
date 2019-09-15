const BusinessPoint = (props) => (
    <div className="container">
        <div className="text-container">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>        
        </div>
        <style jsx>{`
        .container {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #EDF4FF;
        }

        .title {
            font-family: "Helvetica";
            font-weight: normal;
            line-height: 48px;
            font-size: 32px;
            color: #032057;

        }

        .title::after {
            content: "";
            display: block;
            width: 55px;
            border-bottom: 5px solid #FD9361;
        }

        .title:hover::after {
            animation-name: underline;
            animation-duration: 1s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }

        .description {
            padding-top: 12px;
            font-family: "Helvetica";
            font-size: 24px;
            line-height: 36px;
            color: #626366;
        }

        @keyframes underline {
            from {width: 55px;}
            to {width: 100%;}
        }



        @media (min-width: 320px) and (max-width: 1023px) {
            .container {
                width: 100%;
            }

            .title {
                margin-left: 4.27%;
                font-size: 20px;
            }

            .description {
                margin-left: 4.27%;
                font-size: 18px;
                margin-bottom: 20px;
            }
            
            .title:hover::after {
                animation-name: underline;
            }
            
            @keyframes underline {
                from {width: 55px;}
                to {width: 55px;}
            }
        }

        @media (min-width: 1024px) {
            .container {
                margin-left: 20px;
                width: ${sizes[props.source].medium};
            }

            .title {
                font-size: 24px;
                display: inline-block;
            }

            .description {
                font-size: 18px;
            }            
        }

        @media (min-width: 1440px) {
            .container {
                margin-left: 20px;
                width: ${sizes[props.source].large};
            }

            .title {
                font-size: 24px;
                display: inline-block;
            }

            .description {
                font-size: 20px;
            }            
        }
        `}</style>
    </div>
)

const sizes = {
    index: {
        medium: "230px",
        large: "310px"
    },
    subpage: {
        medium: "45%",
        large: "45%"
    }
}

export default BusinessPoint;