import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className= "parallax">
            <div className= "pt-5 text-center">
            <h1 className= "py-3 textHeader  text-white">Find Your House Rent</h1>
            <input className= "mr-3 inputbox" type="text" placeholder="  Search..."/>
            <button className="text-white searchButton">Find Now</button>
        
            </div>
           
        </div>
    );
};

export default Banner;