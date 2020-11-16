import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { Button } from 'reactstrap';

const Footer = () => {
    const noNamed = [
        { name: "H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh Phone:018XXXXXXXX ,E-mail: info@company.com ", link: "/emergency" },
        
        
    ]
    const ourAddress = [
        { name: "Get connected with....", link: "/" },
        { name: "", link: "//google.com/map" },

    ]
  
    const services = [
        { name: "About", link: "/contact" },
        { name: "Site Map", link: "/contact" },
        { name: "Support Center", link: "/digitalMarketing" },
        { name: "Branding and Identity", link: "/Branding" },
        { name: "Terms Conditions", link: "/Contact" },
        { name: "Submit Listing", link: "/Contact" }
    ]
    return (
        <footer className="footer-area text-white clear-both">
            <div className="container pt-5">
                <div className="row py-2">
                    <FooterCol  key={1} menuTitle={"Address"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Company" menuItems={services} /> 
                    <FooterCol key={3} menuTitle="Quick links" menuItems={services}/>                    
                    <FooterCol key={4} menuTitle="" menuItems={ourAddress}>
                        
                        
                        
                
                        
                        
                        <ul className="social-media list-inline">
                            
                            

                            <li className="list-inline-item"><a style={{ height: "30px", width: "30px", borderRadius: "7px", }} href="https://www.linkedin.com">
                            <i className="mx-2 fa fa-linkedin" style={{fontSize:"36px",color:"white"}}></i>
                                </a></li>

                            <li className="list-inline-item"><a style={{ height: "30px", width: "30px", borderRadius: "7px", }} href="https://www.twitter.com/">
                            <i className="mx-2 fa fa-twitter" style={{fontSize:"36px",color:"white"}}></i>
                                </a></li>

                            <li className="list-inline-item"><a style={{ height: "30px", width: "30px", borderRadius: "7px", }} href="https://youtube.com">
                            <i className="mx-2 fa fa-youtube" style={{fontSize:"36px",color:"white"}}></i>
                                </a></li>

                            <li className="list-inline-item"><a style={{ height: "30px", width: "30px", borderRadius: "7px", }} href="https://www.linkedin.com">
                            <i className="mx-2 fa fa-facebook-f" style={{fontSize:"36px",color:"white"}}></i>
                                </a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-white">Feel free to call</h6>

                            

                            <button className="text-white btn btn-brand">+8801777777</button>
                            <a href="/contact"><Button outline  color="danger">Send A Message</Button></a>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="text-white mb-0 pb-2">©  Apartment Hunt &nbsp; {(new Date()).getFullYear()} , Bangladesh</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;