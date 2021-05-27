import ReactDOM from 'react-dom';
import { useState } from 'react';
import FormLogin from '../components/Login/FormLogin';
import Navbar from '../components/UI/Navbar';
import RegisterModal from '../components/Login/RegisterModal';

const Login = () => {
    const [ showModalRegister, setShowModalRegister ] = useState( false );
    const isNewUser = booleanValue => setShowModalRegister( booleanValue );
    return (
        <>                    
            <Navbar titlePage="Entrar" />
            <FormLogin onNewUser={ isNewUser } />
            
            { !!showModalRegister && ReactDOM.createPortal(
                <RegisterModal onNewUser={ isNewUser }/>,
                document.getElementById( 'overlay-root' )
            )}
        </>
    );
};

export default Login;