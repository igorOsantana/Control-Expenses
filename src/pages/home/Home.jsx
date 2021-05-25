import { useState } from 'react';
import Expenses from "../../components/Expenses/Expenses";
import NewExpense from '../../components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "Cartão de crédito",
      amount: 588.45,
      date: new Date( 2021, 6, 21 ),
    },
    {
      id: "e2",
      title: "Conserto do carro",
      amount: 89.99,
      date: new Date( 2021, 3, 5 ),
    },
    {
      id: "e3",
      title: "Mercado",
      amount: 430.0,
      date: new Date( 2021, 6, 11 ),
    },
    {
      id: "e4",
      title: "Viagem",
      amount: 699.99,
      date: new Date( 2021, 7, 8 ),
    }
  ];  

const Home = () => {
    const [ expenses, setExpenses ] = useState( INITIAL_EXPENSES );  

    const appExpenseHandler = expense => {
        setExpenses( prevState => {
        return [ expense, ...prevState ];
        });
    };
    return (
        <>
            <NewExpense onAddExpense={ appExpenseHandler } />
            <Expenses items={ expenses } />
        </>
    );
};

export default Home;