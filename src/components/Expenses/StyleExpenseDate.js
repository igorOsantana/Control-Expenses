import styled from 'styled-components';

export const ContainerExpenseDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    border-radius: 12px;
    align-items: center;
    justify-content: center; 
`;

export const MonthExpenseDate = styled.div`
    font-size: 0.75rem;
    font-weight: bold;
`;

export const YearExpenseDate = styled.div`
    font-size: 0.75rem;
`;

export const DayExpenseDate = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;