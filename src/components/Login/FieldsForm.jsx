import { Fields, Input } from './StyleFieldsForm';

const FieldsForm = props => {
    return (
        <Fields>
            <Input 
                border={ props.borderColorEmail }
                type="text" 
                placeholder="email@exemplo.com" 
                onChange={ event => props.setEmail( event.target.value ) } 
            />
            <Input 
                border={ props.borderColorPassword }
                type="password" 
                placeholder="Senha" 
                onChange={ event => props.setPassword( event.target.value ) } 
            />
        </Fields>
    );
};

export default FieldsForm;