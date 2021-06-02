import styled, { keyframes } from 'styled-components';

const errorShake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
  
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`;

const showFields = keyframes`
    0% {
        margin-top: 30%;
        opacity: 0; 
    }
    50% {
        margin-top: 20%;
        opacity: 0.1; 
    }
    75% {
        margin-top: 10%;
        opacity: 0.3; 
    }
    100% {
        margin-top: 0%;
        opacity: 1; 
    }
`;

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4B4B4B;
`;

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    box-shadow: 3px 10px 10px -1px rgba(0,0,0,0.75);
    padding: 1rem;
    border-radius: 20px;
    transition: all .3s;
    animation: ${ showFields } .4s ease-out forwards;

    & h2 {
        color: #fff;
    }
    & small {
        animation: ${ errorShake } .4s ease-in-out alternate;
        color: #f00;
        margin: 1rem auto;
    }
`;

export const Fields = styled.div`
    margin-top: 1.5rem;
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LinkLogin = styled.div`
    margin-top: 0.5rem;
    
    & button {
        background: none;
        border: none;
        color: #fff;
        transition: all .3s;
        font-size: small;
        margin: 1rem 2rem;

        &:hover {
            color: #90019D;
        }
    }
`;