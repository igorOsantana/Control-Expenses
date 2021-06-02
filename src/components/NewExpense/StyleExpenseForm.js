import styled from 'styled-components';

export const ControlsNewExpense = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
`;

export const TitleNewExpense = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: .5rem auto;
    
    & p {
        color: #90019D;
    }
`;

export const ControlNewExpense = styled.div`
    & label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }
`;

export const ActionsNewExpense = styled.div`
    text-align: ${ ({ isLoading }) => isLoading ? 'center' : 'right' };

    & button {
        white-space : nowrap; 
        height: min-content;
        width: min-content;
    }
`;