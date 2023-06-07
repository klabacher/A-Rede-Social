import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #F7EBE8;

    * {
        margin: 0 10px;
        text-decoration: none;
        color: #444140;
        font-family: 'Roboto', sans-serif;

        font-size: 1.5rem;
    }
`;

const Logo = styled.img`
    width: auto;
    height: auto;
`;

export default function Header() {
    const location = useLocation();

  return (
    <List>
        {location.pathname === '/' || location.pathname.match('/login') || location.pathname.match('/register') ? <><li><Link to="/account">Login</Link></li><li><Link to="/"><Logo src={logo} /></Link></li><li><Link to="/account">Register</Link></li></> : undefined}
        {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register'  ? <li><Link to="/"><Logo src={logo} /></Link></li> : undefined}
    </List>
  )
}