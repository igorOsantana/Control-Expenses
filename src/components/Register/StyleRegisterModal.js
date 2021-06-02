import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    0% { 
        opacity: 0;
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

const slideOut = keyframes`
    0% { 
        opacity: .2;
        right: 50%;
    }
    50% { 
        opacity: .1;
        right: 75%;
    }
    100% { 
        opacity: 0;
        right: 100%;
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

export const ContentForm = styled.div`
    background-color: #000;
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
    border: 2px solid #90019D;
    border-radius: 10px;
    animation: ${ (({ isOpen }) => isOpen ? slideIn : slideOut ) } .3s linear both;

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
    color: #90019D;
    margin: .5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    & p {
        margin-top: .5rem;
        color: #fff;
    }
`;

export const Body = styled.main`
    color: #fff;
`;

export const Footer = styled.footer`
    align-self: ${ ({ isLoading }) => isLoading ? 'center' : 'flex-end' };
`;
