import styled from 'styled-components';

export const Inp = styled.input`
    margin: 0.5rem auto;
    padding: 10px;
    width: 20rem;
    border-radius: 10px;
    outline-style: none;
    transition: all .3s;
    border: 3px solid ${ ( props => props.border ) } ;

    &:focus {
        border: 3px solid #40015D;
        &::placeholder {
            color: #40015D;
            opacity: .8;
        }
    }
`; 