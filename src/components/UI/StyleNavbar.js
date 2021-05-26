import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: min-content;
    background-color: #000;

`;

export const Content = styled.div`
    width: 100%;
    padding: 1rem;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & div {
        display: flex;
        align-items: center;
    }
`;

export const ButtonSignout = styled.a`
    width: min-content;
    height: min-content;
    margin-left: 2rem;
    transition: all .2s ease;

    &:hover {
        opacity: .3;
    }
`;
