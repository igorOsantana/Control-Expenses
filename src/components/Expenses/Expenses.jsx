import { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import { ContainerExpenses } from './StyleExpenses.js';

const Expenses = props => {
    const [ filteredYear, setFilteredYear ] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear( selectedYear );
    };

    const filteredExpenses = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <ContainerExpenses>
            <ExpenseFilter 
                selected={ filteredYear } 
                onChangeFilter={ filterChangeHandler } 
            />
            <ExpenseChart expenses={ filteredExpenses } />
            <ExpenseList items={ filteredExpenses } yearSelected={ filteredYear }/>
        </ContainerExpenses>
    );
}

export default Expenses;