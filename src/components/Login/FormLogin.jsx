import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';
import firebase from '../../config/firebase';
import 'firebase/auth';

import { Container, LinkLogin, ContentForm, Fields } from './StyleFormLogin';

const FormLogin = ({ onNewUser }) => {
    const [ loading, setLoading ] = useState( false );
    const [ errorCredencials, setErrorCredencials ] = useState( false );

    const dispatch = useDispatch();
    const INITIAL_VALUES = { email: '', password: '' };
    const validationYup = Yup.object({
        email: Yup
        .string()
        .email( 'Email inválido.' )
        .required( 'Campo obrigatório.' ),
        password: Yup
        .string()
        .min( 6, 'A senha deve ter ao menos 6 caracteres.' )
        .required( 'Campo obrigatório.' )
    });

    const submitHandler = ( values, { setSubmitting } ) => {
        const { email, password } = values;
        setErrorCredencials( false );
        signInUser( email, password );
        setSubmitting( false );
    };

    const signInUser = ( email, password ) => {
        setLoading( true );
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then(() => {
            setErrorCredencials( false );
            setLoading( false );
            dispatch({
                type: 'LOGIN',
                email: email
            });
        })
        .catch( error => {
            setErrorCredencials( true );
            setLoading( false );
            console.log( 'Error code', error.code );
            console.log( 'Error message', error.message );
        });
    };

    const getModalToRegisterNewUser = () => onNewUser( true );

    return (
        <Container>
            <Formik
                initialValues={ INITIAL_VALUES }
                validationSchema={ validationYup }
                onSubmit={ submitHandler }
            >
                <Form>
                    <ContentForm>
                        <h2>LOGIN</h2>
                        <Fields>
                            <Input 
                                name="email"
                                type="text" 
                                placeholder="email@exemplo.com" 
                            />
                            <Input 
                                name="password"
                                type="password" 
                                placeholder="senha" 
                            />
                        </Fields>
                        { !!errorCredencials && <small>Email ou senha incorreto.</small> }
                        <LinkLogin>
                            <button type="button">Esqueci minha senha</button>
                            <button type="button" onClick={ getModalToRegisterNewUser }>Cadastrar-se</button>
                        </LinkLogin>
                        { !!loading ? <Spinner />
                        :   <Button type="submit">
                                Entrar
                            </Button>
                        }
                    </ContentForm>
                </Form>
            </Formik>
                { useSelector( state => state.userLogin ) === true && <Redirect to='/' />}
        </Container>
    );
};

export default FormLogin;