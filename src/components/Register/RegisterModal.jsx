import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import firebase from '../../config/firebase';

import FieldsRegister from '../Register/FieldsRegister';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';
import { Backdrop, ContentForm, Header, Body, Footer } from './StyleRegisterModal';

const RegisterModal = ({ onNewUser }) => {
    const [ isOpen, setIsOpen ] = useState( true );
    const [ messageError, setMessageError ] = useState('');
    const [ isLoading, setIsLoading ] = useState( false );

    const db = firebase.firestore();
    const dispatch = useDispatch();
   
    const INITIAL_VALUES = { 
        name: '', 
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '' 
    };
    const validationYup = Yup.object({
        name: Yup
            .string().min(3, 'Nome deve conter ao menos 3 letras.')
            .max(20, 'Limite de 20 letras atingido.')
            .required( 'Campo obrigatório.' ),
        lastName: Yup
            .string()
            .max(30, 'Limite de 30 letras atingido.')
            .required( 'Campo obrigatório.' ),
        email: Yup
            .string()
            .email( 'Email inválido.' )
            .required( 'Campo obrigatório.' ),
        password: Yup
            .string()
            .min( 6, 'A senha deve ter ao menos 6 caracteres.' )
            .required( 'Campo obrigatório.' ),
        passwordConfirmation: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais.')
            .required( 'Campo obrigatório.' ),
    });

    const submitHandler = ( values, { setSubmitting }) => {
        signUpNewUser( values );
        setSubmitting( false );
    };

    const signUpNewUser = dataUser => {
        const { email, password } = dataUser;
        setIsLoading( true );

        firebase.auth()
        .createUserWithEmailAndPassword( email, password )
        .then(() => {
            createProfileNewUser( dataUser );
        }).catch(err => {
            setIsLoading( false );
            console.log( 'Error to create a new account.', err );
        });
    };

    const createProfileNewUser = dataUser => {
        const { name, lastName, email } = dataUser;
        db.collection( 'userProfile' ).add({
            name: name,
            lastName: lastName,
            email: email,
            create: new Date()
        }).then(() => {
            setIsLoading( false );
            dispatch({ 
                type: 'LOGIN',
                email: email
            });
        }).catch( err => {
            console.log( 'Error to create a new profile user.', err );
            setIsLoading( false );
        });
    };

    const getBackToLogin = () => {
        setIsOpen( false );
        setTimeout(() => {
            onNewUser( false );
        }, 300 );
    };

    return (
        <>
            { ReactDOM.createPortal ( 
                <Backdrop onClick={ getBackToLogin }/>, 
                document.getElementById( 'backdrop-root' )
            )}
            <Formik
                initialValues={ INITIAL_VALUES }
                validationSchema={ validationYup }
                onSubmit={ submitHandler }
            >
                <Form>
                    <ContentForm isOpen={ isOpen } >
                        <Header>
                            <h1>Cadastrar-se</h1>
                            <p>Rápido e fácil</p>
                        </Header>
                        <Body>
                            <FieldsRegister/>
                        </Body>
                        <Footer isLoading={ isLoading }>
                            { !!isLoading ? <Spinner /> 
                            : 
                                <>
                                    <Button 
                                        color="#d90429" 
                                        type="button"
                                        onClick={ getBackToLogin }
                                    >
                                        Fechar
                                    </Button>
                                    <Button color="#0dad28" type="submit">
                                        Salvar
                                    </Button>
                                </>
                            }
                        </Footer>
                    </ContentForm>
                </Form>
            </Formik>
            { useSelector( state => state.userLogin === true && <Redirect to="/"/> )}
        </>
    );
};

export default RegisterModal;