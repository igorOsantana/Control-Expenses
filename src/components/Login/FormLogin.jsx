import { Container, LinkLogin, Form } from './StyleFormLogin';
import { Redirect } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';
import FieldsForm from './FieldsForm';
import firebase from '../../config/firebase';
import 'firebase/auth';

const FormLogin = ({ onNewUser }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState( false );
    const [ errorClientSide, setErrorClientSide ] = useState( false );
    const [ errorServerSide, setErrorServerSide ] = useState();
    const [ messageError, setMessageError ] = useState('');
    const [ borderColorEmail, setBorderColorEmail ] = useState( '#fff' );
    const [ borderColorPassword, setBorderColorPassword ] = useState( '#fff' );

    const dispatch = useDispatch();

    const submitHandler = event => {
        event.preventDefault();
        clearBorders();
        setErrorClientSide( false );
        setErrorServerSide( null );
        let validate = validateFields();
        if ( validate ) {
            setErrorClientSide( true );
            getMessageError( validate );
            return;
        }
        signInUser();
    }

    const clearBorders = () => {
        setBorderColorEmail( '#fff' );
        setBorderColorPassword( '#fff' );
    }

    const validateFields = () => {
        if ( email.trim().length === 0 && password.trim().length === 0 ) {
            setBorderError( 'both' );
            return 1;
        } else if ( email.trim().length === 0 ) {
            setBorderError( 'email' );
            return 2;
        } else if ( password.trim().length === 0 ) {
            setBorderError( 'password' );
            return 3;
        } else if ( password.length < 6 ) {
            setBorderError( 'password' );
            return 4;
        } 
        return 0;
    }

    const setBorderError = whichBorder => {
        switch ( whichBorder ) {
            case 'both': 
                setBorderColorEmail( '#f00' ); 
                setBorderColorPassword( '#f00' );
                break;
            case 'email':
                setBorderColorEmail( '#f00' ); 
                break;
            case 'password':
                setBorderColorPassword( '#f00' ); 
                break;
            default:
                alert('Erro inesperado, tente mais tarde.');
        };
    }

    const getMessageError = error => {
        switch ( error ) {
            case 1: setMessageError( 'Email e Senha vazios.' );
                break;
            case 2: setMessageError( 'Email vazio.' );
                break;
            case 3: setMessageError( 'Senha vazia.' );
                break;
            case 4: setMessageError( 'A senha precisa ter ao menos 6 caracteres.' );
                break;
            default: setMessageError('');
        }
    }

    const signInUser = () => {
        setLoading( true );
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then(() => {
            setLoading( false );
            setErrorServerSide( false );
            dispatch({
                type: 'LOGIN',
                email: email
            });
        })
        .catch( error => {
            setLoading( false );
            setErrorServerSide( true );
            setBorderError( 'both' );
            console.log( 'Error code', error.code );
            console.log( 'Error message', error.message );
        });
    }

    const getModalToRegisterNewUser = () => onNewUser( true );

    return (
        <Container>
            <Form onSubmit={ submitHandler }>
                <h2>LOGIN</h2>
                <FieldsForm 
                    setEmail={ setEmail }
                    setPassword={ setPassword }
                    borderColorEmail={ borderColorEmail }
                    borderColorPassword={ borderColorPassword }
                />
                { !!errorClientSide && <small>{ messageError }</small> }
                { !!errorServerSide && <small>Email ou senha incorretos.</small> }
                <LinkLogin>
                    <a href="#">Esqueci minha senha</a>
                    <a href="#" onClick={ getModalToRegisterNewUser }>Cadastrar-se</a>
                </LinkLogin>
                { !!loading ? <Spinner />
                :   <Button type="submit">
                        Entrar
                    </Button>
                }
            </Form>
            { useSelector( state => state.userLogin ) === true && <Redirect to='/' />}
        </Container>
    );
};

export default FormLogin;