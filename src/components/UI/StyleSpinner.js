import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to { transform: rotate( 360deg ); }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;

    & div {
        border: 5px solid #fff;
        border-left-color: #90019D;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        animation: ${ rotate } 1s linear infinite;
    }
`;

