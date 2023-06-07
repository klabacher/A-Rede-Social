import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import User from '../utils/authService'
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-color: #F7EBE8;
    height: 100%;
`;

const Advice = styled.p`
    color: #444140;
    font-family: sans-serif;
    font-weight: 100px;
    font-size: 50px;
    text-align: center;

    a {
        text-decoration: none;
    }
`;

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Retrive Data
    }, []);
    
    return (
        <Container>
            { User.isLoggedIn ? <p>Logged In</p> : <Advice>Not Logged In, please login or register at <Link to='/account'>here</Link></Advice> }
        </Container>
    );
}