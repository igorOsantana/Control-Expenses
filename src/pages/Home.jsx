import { useEffect, useState } from 'react';
import Expenses from "../components/Expenses/Expenses";
import NewExpense from '../components/NewExpense/NewExpense';
import firebase from '../config/firebase';



const Home = () => {
    const db = firebase.firestore();
    
    const [ expenses, setExpenses ] = useState([]);  

    const appExpenseHandler = expense => {
        setExpenses( prevState => {
          return [ expense, ...prevState ];
        });
    };

    useEffect(() => {
      console.log(expenses);
    }, [expenses] );

    return (
        <>
            <NewExpense onAddExpense={ appExpenseHandler } />
            <Expenses items={ expenses } />
        </>
    );
};

export default Home;