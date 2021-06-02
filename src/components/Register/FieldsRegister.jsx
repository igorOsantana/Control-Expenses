import Input from '../UI/Input';
import { Fields } from './StyleFieldsRegister';

const FieldsRegister = () => {
    return (
        <Fields>
            <label htmlFor="name" >Nome:</label>
            <Input
                type="text" 
                id="name"
                name="name" 
                placeholder="Peter"
            />
            <label htmlFor="lastName" >Sobrenome:</label>
            <Input
                type="text" 
                id="lastName"
                name="lastName" 
                placeholder="Parker"
            />
            <label htmlFor="email" >Email:</label>
            <Input
                type="email" 
                id="email"
                name="email" 
                placeholder="email@exemplo.com"
            />
            <label htmlFor="password" >Senha:</label>
            <Input
                type="password" 
                id="password"
                name="password" 
                placeholder="senha"
            />
            <label htmlFor="passwordConfirmation" >Confirmar senha:</label>
            <Input
                type="password" 
                id="passwordConfirmation"
                name="passwordConfirmation" 
                placeholder="confirmar senha"
            />
        </Fields>
    );
};

export default FieldsRegister;