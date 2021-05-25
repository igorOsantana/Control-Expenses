import styled from 'styled-components';

export const ContainerLogin = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4B4B4B;
    transition: all .3s;

    & h2 {
        color: #fff;
    }
`;

export const FieldsLogin = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;

    & input {
        margin: 0.5rem auto;
        padding: 10px;
        width: 20rem;
        border: 3px solid #fff;
        border-radius: 10px;
        outline-style: none;
        transition: all .3s;

        &:focus {
            border: 3px solid #40015D;
            &::placeholder {
                color: #40015D;
                opacity: .7;
            }
        }
    }
`;

export const RegisterLogin = styled.a`
    color: #000;
    transition: all .3s;

    &:hover {
        color: #fff;
    }
`;

export const ButtonLogin = styled.button`
    margin: 1rem auto;
    width: 10rem;
    height: 2.5rem;
    border-style: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: #40015D;
    color: #fff;
    transition: all .3s;

    &:hover {
        opacity: .6;
    }
`;