import ReactDOM from 'react-dom';
import { Backdrop, Form, Header, Body, Footer } from './StyleRegisterModal';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useState } from 'react';

const RegisterModal = ({ onNewUser }) => {
    const getBackToLogin = () => onNewUser( false );
    return (
        <>
            { ReactDOM.createPortal ( 
                <Backdrop onClick={ getBackToLogin }/>, 
                document.getElementById( 'backdrop-root' )
            )}
            <Form>
                <Header>
                    <h1>Cadastrar-se</h1>
                    <p>Rápido e fácil</p>
                </Header>
                <Body>
                    <label htmlFor="name" >Nome:</label>
                    <Input type="text" id="name" placeholder="Peter" />
                    <label htmlFor="lastname" >Sobrenome:</label>
                    <Input type="text" id="lastname" placeholder="Parker" />
                    <label htmlFor="email" >Email:</label>
                    <Input type="email" id="email" placeholder="email@exemplo.com" />
                    <label htmlFor="password" >Senha:</label>
                    <Input type="password" id="password" placeholder="senha" />
                    <label htmlFor="confirmPassword" >Confirmar senha:</label>
                    <Input type="password" id="confirmPassword" placeholder="confirmar senha" />
                </Body>
                <Footer>
                    <Button 
                        color="#d90429" 
                        type="button"
                        onClick={ getBackToLogin }
                    >
                        Fechar
                    </Button>
                    <Button 
                        color="#0dad28" 
                        type="submit"
                    >
                        Salvar
                    </Button>
                </Footer>
            </Form>
        </>
    );
};

export default RegisterModal;