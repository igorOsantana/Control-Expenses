import styled from 'styled-components';

export const Container = styled.main`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    background-color: #4B4B4B;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .3s;

    & h2 {
        color: #fff;
    }
    & small {
        text-shadow: -1px 1px black;
        color: #f00;
        margin: 1rem auto;
    }
`;

export const LinkLogin = styled.div`
    margin-top: 0.5rem;
    
    & a {
        color: #000;
        transition: all .3s;
        font-size: small;
        margin: 2.5rem;

        &:hover {
            color: #fff;
        }
    }
`;