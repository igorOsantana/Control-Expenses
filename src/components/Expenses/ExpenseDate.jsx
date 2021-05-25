import { ContainerExpenseDate, DayExpenseDate, MonthExpenseDate, YearExpenseDate } from './StyleExpenseDate.js';

const ExpenseDate = props => {
    const month = props.date.toLocaleString( 'pt-BR', { month: 'long' } );
    const day = props.date.toLocaleString( 'pt-BR', { day: '2-digit' } );
    const year = props.date.getFullYear();

    return (
        <ContainerExpenseDate>
            <DayExpenseDate>{ day }</DayExpenseDate>
            <MonthExpenseDate>{ month }</MonthExpenseDate>
            <YearExpenseDate>{ year }</YearExpenseDate>
        </ContainerExpenseDate>
    );
}

export default ExpenseDate;