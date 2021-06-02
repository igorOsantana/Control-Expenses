import styled from 'styled-components';

export const ContainerNewExpense = styled.div`
    color: #fff;
    background-color: #000;
    padding: 1rem;
    margin: 7rem 0 2rem 1rem;
    width: min-content;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

    & button {
        font: inherit;
        cursor: pointer;
        padding: 1rem 2rem;
        background-color: #90019D;
        color: white;
        border-radius: 12px;
        margin-right: 1rem;
    }
`;