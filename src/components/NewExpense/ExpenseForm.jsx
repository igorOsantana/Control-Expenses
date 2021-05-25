import { useState } from 'react';
import { ActionsNewExpense, ControlsNewExpense, ControlNewExpense } from './StyleExpenseForm.js';

const ExpenseForm = props => {
    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');

    const titleChangeHandler = event => {
        setEnteredTitle( event.target.value );
    };

    const amountChangeHandler = event => {
        setEnteredAmount( event.target.value );
    };

    const dateChangeHandler = event => {
        setEnteredDate( event.target.value );
    };

    const submitHandler = event => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: Number( enteredAmount ),
            date: new Date( enteredDate.split('-').join(',') )
        };

        props.onSaveExpenseData( expenseData );

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={ submitHandler }>
            <ControlsNewExpense>
                <ControlNewExpense>
                    <label>Título</label>
                    <input 
                        type="text" 
                        placeholder="Compras mercado" 
                        value={ enteredTitle }
                        onChange={ titleChangeHandler } 
                    />
                </ControlNewExpense>
                <ControlNewExpense>
                    <label>Valor</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        placeholder="R$"
                        value={ enteredAmount }
                        onChange={ amountChangeHandler } 
                    />
                </ControlNewExpense>
                <ControlNewExpense>
                    <label>Data</label>
                    <input 
                        type="date" 
                        min="2021-01-01" 
                        max="2026-12-31" 
                        value={ enteredDate }
                        onChange={ dateChangeHandler } 
                    />
                </ControlNewExpense>
            </ControlsNewExpense>
            <ActionsNewExpense>
                <button type="submit">Adicionar Gasto</button>
            </ActionsNewExpense>
        </form>
    );
}

export default ExpenseForm;