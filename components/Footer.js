const footerStyling = {
    backgroundColor: "#212222",
    height: "175px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    boxShadow: "inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 2px 4px 0 rgba(0,0,0,0.5)"
}

const footerInnerStyling = {
    color: "#D8D8D8",
    fontSize: "18px",
    fontFamily: "Avenir Next",
    lineHeight: "25px",
    fontWeight: "500",
    width: "40%"
}

const footerSocMedStyling = {
    textAlign: "right"
}

const footerEmptyStyling = {
    width: "30%"
}

const socMedIconStyling = {
    margin: "5px"
}

const Footer = () => (
    <div style={footerStyling}>
        <div style={footerInnerStyling}>C 2019 Pure Plumbing Solutions. All rights reserved.</div>
        <div style={footerEmptyStyling}></div>
        <div style={footerSocMedStyling}>
            <a style={socMedIconStyling} href="#">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a style={socMedIconStyling} href="#">
                <i className="fab fa-instagram"></i>
            </a>
            <a style={socMedIconStyling} href="#">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
    </div>
)

export default Footer;