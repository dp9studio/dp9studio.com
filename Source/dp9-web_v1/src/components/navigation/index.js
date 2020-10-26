import React from 'react';
import { Nav, NavLink, NavLogo, NavMenuDesktop, NavMenuMobile } from './elements';
import logo from '../../images/logos/DP9 Studio (Simple).png';


const NavSystem = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src={logo} alt="DP9 Studio" height="100%"></img>
                </NavLogo>
                <NavMenuDesktop>
                    <NavLink to="/about" activeStyle>
                        <b>ABOUT</b>
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        <b>SERVICES</b>
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        <b>CONTACT</b>
                    </NavLink>
                </NavMenuDesktop>
                <NavMenuMobile>
                    <NavLink to="/about" activeStyle>
                        <b>ABOUT</b>
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        <b>SERVICES</b>
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        <b>CONTACT</b>
                    </NavLink>
                </NavMenuMobile>
            </Nav>
        </>
    );
};

export default NavSystem;
