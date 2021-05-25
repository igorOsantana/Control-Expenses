import { ContainerLogin, FieldsLogin, RegisterLogin ,ButtonLogin } from './StyleFormLogin';
import { Link } from 'react-router-dom';

const FormLogin = () => {
    return (
        <ContainerLogin>
            <h2>LOGIN</h2>
            <FieldsLogin>
                <input type="text" placeholder="email@exemplo.com" />
                <input type="password" placeholder="Senha" />
            </FieldsLogin>
            <Link to="/register">
                <RegisterLogin>
                    Registrar-se
                </RegisterLogin>
            </Link>
            <ButtonLogin type="submit">Entrar</ButtonLogin>
        </ContainerLogin>
    );
};

export default FormLogin;