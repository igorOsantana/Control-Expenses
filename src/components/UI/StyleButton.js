import styled from 'styled-components';

export const Btn = styled.button`
    margin: 1rem auto;
    width: 10rem;
    height: 2.5rem;
    border-style: none;
    border-radius: 10px;
    background-color: ${ (({ color }) => color ? color : '#90019D' ) };
    color: #fff;
    transition: all .3s ease;

    &:hover:enabled {
        filter: brightness(75%);
    }
    &:disabled {
        cursor: not-allowed;
        filter: brightness(50%);
    }
`;