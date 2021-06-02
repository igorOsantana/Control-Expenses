import { Inp } from './StyleInput';
import { Field, ErrorMessage, useField } from 'formik';

const Input = props => {
    const [ , meta ] = useField( props );
    return (
        <Inp hasError={ meta.error && meta.touched }>
            <Field { ...props }/>
            <ErrorMessage component="span" name={ props.name }/>
        </Inp>
    );
};

export default Input;