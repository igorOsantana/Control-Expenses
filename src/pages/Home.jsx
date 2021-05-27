import { useEffect, useState } from 'react';
import { Container } from './StyleHome';
import Navbar from '../components/UI/Navbar';
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
        <Navbar titlePage="Início" />
        <Container>
            <Expenses items={ expenses } />
            <NewExpense onAddExpense={ appExpenseHandler } />
        </Container>
      </>
    );
};

export default Home;