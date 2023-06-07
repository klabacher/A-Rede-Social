import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import authService from '../utils/authService';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #F7EBE8;
    height: 100%;
`


export default function Account() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Retrive Data
    }, []);
    
    return (
        <Container>
            { authService.isLoggedIn ? <p>Logged In</p> : <Account></Account> }
        </Container>
    );
}