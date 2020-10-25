import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: none;
    display: flex;
    padding: 64px 10% 64px 64px;
    z-index: 10;
    flex-direction: column;
    float: right;

    @media screen and (max-width: 720px) {
    right: 0;
    width:100vh;    
    position:fixed;
    transform-origin: right top;
    transform: rotate(90deg) translateX(100%);
    padding: 32px;
    flex-direction: row;
    }

`

export const NavLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0px 0px 16px 0px;
    height: 100%;
    font-size: 48px;
    cursor: pointer;
    transition: 0.3s ease-out;

    &:hover, &.active {
        color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    @media screen and (max-width: 720px) {
    width: 100%;
    padding: 0px 0px 0px 32px;
    font-size: 32px;
    }

    @media screen and (max-height: 720px) {
    padding: 0px 0px 0px 16px;
    font-size: 24px;
    }
`

export const NavMenuDesktop = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    padding-top: 64px;

    @media screen and (max-width: 720px) {
    display: none;
    }
`

export const NavMenuMobile = styled.div`
    display:none;

    @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    padding-left: 32px
    }

    @media screen and (max-height: 720px) {
    padding-left: 48px
    }
`