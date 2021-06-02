import { ContainerExpenseDate, DayExpenseDate, MonthExpenseDate, YearExpenseDate } from './StyleExpenseDate.js';

const ExpenseDate = ({ date }) => {
    const dateConverted = new Date( date.split('-') );
    const month = dateConverted.toLocaleString( 'pt-BR', { month: 'long' } );
    const day = dateConverted.toLocaleString( 'pt-BR', { day: '2-digit' } );
    const year = dateConverted.getFullYear();

    return (
        <ContainerExpenseDate>
            <DayExpenseDate>{ day }</DayExpenseDate>
            <MonthExpenseDate>{ month }</MonthExpenseDate>
            <YearExpenseDate>{ year }</YearExpenseDate>
        </ContainerExpenseDate>
    );
}

export default ExpenseDate;