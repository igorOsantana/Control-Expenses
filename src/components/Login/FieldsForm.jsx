import { Fields } from './StyleFieldsForm';
import Input from '../UI/Input';
import { useState } from 'react';

const FieldsForm = ({ setEmail, setPassword, borderColorEmail, borderColorPassword }) => {
    const [ colorEmail, setColorEmail ] = useState( borderColorEmail );
    return (
        <Fields>
            <Input 
                border={ colorEmail }
                type="text" 
                placeholder="email@exemplo.com" 
                onChange={ event => {
                    setEmail( event.target.value );
                    setColorEmail('#40015D' );
                }}
            />
            <Input 
                border={ borderColorPassword }
                type="password" 
                placeholder="Senha" 
                onChange={ event => setPassword( event.target.value ) } 
            />
        </Fields>
    );
};

export default FieldsForm;