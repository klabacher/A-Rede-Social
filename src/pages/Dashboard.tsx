import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Retrive Data
    }, []);
    
    return (
        <div>
        <h1>Home</h1>
        <p>This is the home page</p>
        <p>{data}</p>
        <Link to="/about">About</Link>
        </div>
    );
}