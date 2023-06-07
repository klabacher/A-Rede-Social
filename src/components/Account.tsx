import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import User from '../utils/authService'
import { useHistory } from 'react-router-dom';

const Block = styled.div<{ color: string }>`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 6px;
    border-radius: 3px;
    -webkit-box-shadow: 28px 26px 44px -21px rgba(68,65,64,1);
    -moz-box-shadow: 28px 26px 44px -21px rgba(68,65,64,1);
    box-shadow: 28px 26px 44px -21px rgba(68,65,64,1);
    background-color: ${props => props.color};
    justify-content: center;
    align-items: center;
    

    @keyframes fadein {
        from { width: 50%; }
        to   { width: 100%; }
    }

    &:has(.active) {
        justify-content: space-evenly;
        animation: fadein 1s ease-in-out;
    }

    p {
        color: #444140;
        font-family: sans-serif;
        font-weight: 100px;
        font-size: 50px;
    }

    .Data {
        display: none;
    }

    .Data.active {
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .Data input {
        margin: 3px;
        padding: 10px;
        border-radius: 3px;
        border: none;
        outline: none;
        text-align: center;
    }

    .Data input::placeholder {
        text-align: center;
    }

    .Data input:focus {
        box-shadow: 0 0 0 2px black;
    }

    .Data button {
        margin: 3px;
        padding: 10px;
        width: 150%;
        font-family: 'Courier New', Courier, monospace;
        background-color: #FFA987;
        border: .1px solid #444140;
    }

    &.deactived {
        display: none;
    }
`;

const Choices = styled.div`
    height: 60vh;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    padding: 0;
    margin: 0;
`;

function Account() {
    const loginRef = useRef<HTMLDivElement>(null);
    const loginChildRef = useRef<HTMLDivElement>(null);
    const registerRef = useRef<HTMLDivElement>(null);
    const registerChildRef = useRef<HTMLDivElement>(null);
    const location = useHistory();

    function Login(): JSX.Element {
        const [username, setUsername] = React.useState<string>('');
        const [password, setPassword] = React.useState<string>('');

        useEffect(() => {
            if (loginRef.current) {
                loginRef.current.onclick = (ev) => {
                    if (ev.currentTarget === ev.target && loginChildRef.current) {
                        loginChildRef.current.classList.toggle('active');
                        registerRef.current?.classList.toggle('deactived');
                    }
                }
            }
        }, []);
        return (
            <Block ref={loginRef} color='#F7EBE8'>
                <p>Login</p>
                <div ref={loginChildRef} className='Data'>
                    <input type="text" value={username} onChange={(ev) => setUsername(ev.target.value)} placeholder='Username' />
                    <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} placeholder='******' />
                    <button onClick={() => User.login(location, username, password)} type='submit'>Submit</button>
                </div>
            </Block>
        )
    }
    function Register(): JSX.Element {
        const [username, setUsername] = React.useState<string>('');
        const [email, setEmail] = React.useState<string>('');
        const [password, setPassword] = React.useState<string>('');

        useEffect(() => {
            if (registerRef.current) {
                registerRef.current.onclick = (ev) => {
                    if (ev.currentTarget === ev.target && registerChildRef.current) {
                        registerChildRef.current.classList.toggle('active');
                        loginRef.current?.classList.toggle('deactived');
                    }
                }
            }
        }, []);
        return (
            <Block ref={registerRef} color='#F7EBE8'>
                <p>Register</p>
                <div ref={registerChildRef} className='Data'>
                    <input type="text" value={username} onChange={(ev) => setUsername(ev.target.value)} placeholder='Username' />
                    <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} placeholder='E-Mail' />
                    <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} placeholder='******' />
                    <button onClick={(ev) => {
                        ev.preventDefault();
                        User.register(location, username, email, password);
                    }} type='submit'>Submit</button>
                </div>
            </Block>
        )
    }

    useEffect(() => {
        
    }, []);


    return (
        <>
            <Choices>
                <Login />
                <Register />
            </Choices>
        </>
    )
}

export default Account