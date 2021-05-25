import styled from 'styled-components';

export const ControlsNewExpense = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
`;

export const ControlNewExpense = styled.div`
    & label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }
    & input {
        font: inherit;
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
    }
`;

export const ActionsNewExpense = styled.div`
    text-align: right;
`;