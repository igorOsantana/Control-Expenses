import { useEffect, useState, useCallback } from 'react';

import Navbar from '../components/UI/Navbar';
import Expenses from "../components/Expenses/Expenses";
import NewExpense from '../components/NewExpense/NewExpense';
import firebase from '../config/firebase';
import { Container } from './StyleHome';
import { useSelector } from 'react-redux';

const Home = () => {
  const [ expenses, setExpenses ] = useState([]);  
  const [ isLoading, setIsLoading ] = useState( true );  

  const db = firebase.firestore();
  const emailUser = useSelector( state => state.email );

  const getExpensesFromDataBase = useCallback(() => {
    let arrayOfExpenses = [];
    db.collection( 'userExpense' )
    .where( 'email', '==', emailUser )
    .get().then( response => {
      response.forEach( doc => {
        arrayOfExpenses.push({
            id: doc.id,
            ...doc.data()
        });
      });
      setExpenses( arrayOfExpenses );
      setIsLoading( false );
    }).catch( err => {
      setIsLoading( false );
      console.log( 'Error to get expenses user from database.', err );
    });
  }, [ db, emailUser ] );

  useEffect(() => {
    getExpensesFromDataBase();
  }, [ getExpensesFromDataBase ]);

  return (
    <>
      <Navbar titlePage="Início" />
      <Container>
          <Expenses isLoading={ isLoading } items={ expenses } />
          <NewExpense onNewExpense={ getExpensesFromDataBase }/>
      </Container>
    </>
  );
};

export default Home;