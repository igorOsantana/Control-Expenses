import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    0% { 
        opacity: .1;
        right: 0%;
    }
    50% { 
        opacity: .1;
        right: 25%;
    }
    100% { 
        opacity: 1;
        right: 50%;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`;

export const Form = styled.form`
    background-color: #4B4B4B;
    position: absolute;
    top: 10vh;
    right: 50%;
    transform: translateX(50%);
    z-index: 100;
    overflow: hidden;
    width: min-content;
    display: flex;
    flex-direction: column;
    padding: .5rem 2rem;
    font-size: small;
    border: 1px solid #fff;
    border-radius: 10px;
    animation: ${ fade } .4s linear both;

    & input {
        width: 20rem;
    }
    & button {
        width: 5.5rem;
        height: 2rem;
        margin-left: 1rem;
    }
`;

export const Header = styled.header`
    color: #40015D;
    margin: .5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    & p {
        margin-top: .5rem;
        color: #1F1E1E;
    }
`;

export const Body = styled.main`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-self: flex-start;

`;

export const Footer = styled.footer`
    align-self: flex-end;
`;
