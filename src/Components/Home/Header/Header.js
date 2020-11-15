import React from 'react';
import Banner from './Banner/Banner';
import NavSection from './Navbar/NavSection';

const Header = () => {
    return (
        <div>
            <NavSection></NavSection>
            <Banner></Banner>
        </div>
    );
};

export default Header;