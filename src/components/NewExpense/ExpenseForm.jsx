import { useState } from 'react';
import { ActionsNewExpense, ControlsNewExpense, ControlNewExpense } from './StyleExpenseForm.js';
import Input from '../UI/Input';
import Button from '../UI/Button';
import firebase from '../../config/firebase';

const ExpenseForm = props => {
    const db = firebase.firestore();

    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredAmount, setEnteredAmount ] = useState('');
    const [ enteredDate, setEnteredDate ] = useState('');
    const [ loading, setLoading ] = useState( false );

    const titleChangeHandler = event => {
        setEnteredTitle( event.target.value );
    };

    const amountChangeHandler = event => {
        setEnteredAmount( event.target.value );
    };

    const dateChangeHandler = event => {
        setEnteredDate( event.target.value );
    };

    const addNewExpenseOnDb = data => {
        setLoading( true );
        db.collection( 'userExpense' )
        .add({
            title: data.title,
            amount: data.amount,
            date: data.date
        })
        .then(() => {
            setLoading( false );
        })
        .catch( error => console.log( 'error in add a new expense user', error ));
    };

    const submitHandler = event => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: Number( enteredAmount ),
            date: new Date( enteredDate.split('-').join(',') )
        };

        props.onSaveExpenseData( expenseData );
        addNewExpenseOnDb( expenseData );

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={ submitHandler }>
            <ControlsNewExpense>
                <ControlNewExpense>
                    <label>Título</label>
                    <Input 
                        type="text" 
                        placeholder="Compras mercado" 
                        value={ enteredTitle }
                        onChange={ titleChangeHandler } 
                    />
                </ControlNewExpense>
                <ControlNewExpense>
                    <label>Valor</label>
                    <Input 
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
                    <Input 
                        type="date" 
                        min="2021-01-01" 
                        max="2026-12-31" 
                        value={ enteredDate }
                        onChange={ dateChangeHandler } 
                    />
                </ControlNewExpense>
            </ControlsNewExpense>
            <ActionsNewExpense>
                <Button type="submit">Adicionar Gasto</Button>
            </ActionsNewExpense>
        </form>
    );
}

export default ExpenseForm;