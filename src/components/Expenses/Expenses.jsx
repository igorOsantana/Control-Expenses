import { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import { ContainerExpenses } from './StyleExpenses.js';

const Expenses = ({ items, isLoading }) => {   
    const [ filteredYear, setFilteredYear ] = useState('default');

    const hasExpenses = items.length > 0;

    const filterChangeHandler = selectedYear => setFilteredYear( selectedYear );

    const filteredExpenses = items.filter( expense => {
        const dateConverted = new Date( expense.date.split('-') ); 
        return dateConverted.getFullYear().toString() === filteredYear;
    });

    return (
        <ContainerExpenses>
            <ExpenseFilter 
                expenses={ items }
                selected={ filteredYear } 
                onChangeFilter={ filterChangeHandler } 
            />
            <ExpenseChart expenses={ filteredExpenses } />
            <ExpenseList 
                hasExpenses={ hasExpenses }
                isLoading={ isLoading } 
                items={ filteredExpenses } 
                yearSelected={ filteredYear }
            />
        </ContainerExpenses>
    );
}

export default Expenses;