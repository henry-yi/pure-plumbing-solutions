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

const Footer = () => (
    <div style={footerStyling}>
        <div style={footerInnerStyling}>C 2019 Pure Plumbing Solutions. All rights reserved.</div>
        <div style={footerEmptyStyling}></div>
        <div style={footerSocMedStyling}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
        </div>
    </div>
)

export default Footer;