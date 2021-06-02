import { useState } from 'react';
import { Fields } from './StyleFieldsLogin';
import Input from '../UI/Input';

const FieldsLogin = ({ 
    email,
    setEmail,
    setValidatedEmail,
    password,
    setPassword,
    setValidatedPassword,
    errorClientSide,
    setErrorClientSide,
    errorServerSide,
    setErrorServerSide,
    messageError,
    setMsgError    
}) => {
    const [ borderErrorEmail, setBorderErrorEmail ] = useState( false );
    const [ borderErrorPassword, setBorderErrorPassword ] = useState( false );
    const regexEmailValidation = /\w+@\w+\.\w{2,}/;
  
    const validateEmailHandler = event => {
        setValidatedEmail( false );
        setErrorClientSide( false );
        setErrorServerSide( false );
        setEmail( event.target.value );

        let validation = event.target.value.match( regexEmailValidation );

        if ( validation === null ) {
            setMsgError('badlyEmail');
            setErrorClientSide( true );
            return setBorderErrorEmail( true );
        }

        setBorderErrorEmail( false );
        setValidatedEmail( true );
    };

    const validatePasswordHandler = event => {
        setValidatedPassword( false );
        setErrorClientSide( false );
        setErrorServerSide( false );
        setPassword( event.target.value );

        if ( event.target.value.length < 6 ) {
            setMsgError( 'smallPassword' );
            setBorderErrorPassword( true );
            return;
        } 
        setBorderErrorPassword( false );
        setValidatedPassword( true );
    };

    return (
        <Fields>
            <Input 
                value={ email }
                borderError={ borderErrorEmail ? '#f00' : false }
                type="email" 
                placeholder="email@exemplo.com" 
                onChange={ validateEmailHandler }
            />
            <Input 
                value={ password }
                borderError={ borderErrorPassword ? '#f00' : false }
                type="password" 
                placeholder="Senha" 
                onChange={ validatePasswordHandler } 
            />
            { !!errorClientSide && <small>{ messageError }</small> }
            { !!errorServerSide && <small>Email ou senha incorretos.</small> }
        </Fields>
    );
};

export default FieldsLogin;