import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3 col-sm-12 col-lg-3">
            <strong><h4 className="text-danger">{props.menuTitle ? props.menuTitle : <h1 style={{fontSize:"2.1rem", fontFamily:"lato"}}>About Us</h1>}</h4></strong>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li style={{textDecoration:"none"}} key={index}><Link style={{textDecoration:"none",color:"lightCyan" }}  to={item.link} className="text-white">{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;