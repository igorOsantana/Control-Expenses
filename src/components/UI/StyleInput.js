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

export const Inp = styled.div`
    display: flex;
    flex-direction: column;
    color: #f00;
    text-align: end;
    font-size: small;

    & span {
        animation: ${ errorShake } .4s ease-in-out alternate;
    }
    & input {
        margin: 0.5rem auto;
        padding: 10px;
        width: 20rem;
        border-radius: 10px;
        outline-style: none;
        transition: all .3s;
        border: 3px solid ${ ({ hasError }) => hasError ? '#f00' : '#fff' };
        background-color: ${ ({ hasError }) => hasError ? 'rgba(255, 0, 35, 0.3)' : '#fff' };

        &:focus {
            color: #fff;
            background-color: rgba(230, 0, 235, 0.1);
            border-color: #90019D;
            &::placeholder {
                color: #90019D;
                opacity: .8;
            }
        }
    }
`; 