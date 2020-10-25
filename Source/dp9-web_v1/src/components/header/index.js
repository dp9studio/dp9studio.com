import React from 'react';
import { Nav, NavLink, NavMenuDesktop, NavMenuMobile } from './elements';
import logo from '../../assets/logos/DP9 Studio (Cropped - Simple).png';


const HeaderNav = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" style={{ padding: "0", width: "128px" }}>
                    <img src={logo} alt="DP9 Studio" height="48px"></img>
                </NavLink>
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

export default HeaderNav;
