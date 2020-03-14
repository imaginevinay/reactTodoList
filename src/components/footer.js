import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Logo from '../assets/logo.svg';

const footerStyle = {
    flexShrink: 0,
    textAlign: "center",
    backgroundColor: "#20232a",
    color:"white",
    position:"absolute",
    left:"0",
    bottom:"0",
    right:"0"
}

const Footer = () => (
  <footer style={footerStyle}>
    <div style={{ display:"inline-flex",alignItems:"center"}}>
        <Avatar alt="ReactLogo" src={Logo} />
        <p>Made in React</p>
    </div>
  </footer>
);



export default Footer;


