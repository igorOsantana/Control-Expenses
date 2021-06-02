import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'

import Spinner from '../UI/Spinner';
import Input from '../UI/Input';
import Button from '../UI/Button';
import firebase from '../../config/firebase';
import { ActionsNewExpense, ControlsNewExpense, ControlNewExpense, TitleNewExpense } from './StyleExpenseForm.js';

const ExpenseForm = ({ addNewExpense }) => {
    const db = firebase.firestore();
    const emailUser = useSelector( state => state.email );

    const [ isLoading, setIsLoading ] = useState( false );

    const INITIAL_VALUES = { 
        title: '', 
        amount: '',
        date: ''
    };
    const validationYup = Yup.object({
        title: Yup
            .string().min(3, 'Título deve conter ao menos 3 letras.')
            .max(30, 'Limite de 30 letras atingido.')
            .required( 'Campo obrigatório.' ),
        amount: Yup
            .number()
            .min(0.01, 'Valor mínimo é de R$0,01.' )
            .required( 'Campo obrigatório.' ),
        date: Yup
            .date()
            .required( 'Campo obrigatório.' )
    });

    const submitHandler = ( values, { setSubmitting, resetForm }) => {  
        const { title, amount, date } = values;      
        const expenseData = {
            title: title,
            amount: Number( amount ),
            date: date
        };
        addNewExpenseOnDb( expenseData );
        setSubmitting( false );
        resetForm({});
    };

    const addNewExpenseOnDb = data => {
        setIsLoading( true );
        db.collection( 'userExpense' )
        .add({
            title: data.title,
            amount: data.amount,
            date: data.date,
            email: emailUser
        })
        .then(() => {
            setIsLoading( false );
            addNewExpense();
        })
        .catch( error => {
            setIsLoading( false );
            console.log( 'Error in add a new expense user', error );
        });
    };

    return (
        <Formik
            initialValues={ INITIAL_VALUES }
            validationSchema={ validationYup }
            onSubmit={ submitHandler }
        >
            <Form>
                <ControlsNewExpense>
                    <TitleNewExpense>
                        <h3>Nova</h3>&nbsp;
                        <h3><p>despesa</p></h3>
                    </TitleNewExpense>
                    <ControlNewExpense>
                        <label htmlFor="title">Título</label>
                        <Input 
                            id="title"
                            name="title"
                            type="text" 
                            placeholder="Compras mercado" 
                        />
                    </ControlNewExpense>
                    <ControlNewExpense>
                        <label htmlFor="amount">Valor</label>
                        <Input 
                            id="amount"
                            name="amount"
                            type="number" 
                            step="0.01" 
                            placeholder="R$"
                        />
                    </ControlNewExpense>
                    <ControlNewExpense>
                        <label htmlFor="date">Data</label>
                        <Input 
                            id="date"
                            name="date"
                            type="date" 
                        />
                    </ControlNewExpense>
                    </ControlsNewExpense>
                <ActionsNewExpense isLoading={ isLoading }>
                    { !!isLoading ? <Spinner />
                    : <Button type="submit">Adicionar</Button> 
                    }
                </ActionsNewExpense>
            </Form>
        </Formik>
    );
};

export default ExpenseForm;