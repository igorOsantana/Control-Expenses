import { Btn } from './StyleButton';

const Button = props => {
    return <Btn type={ props.type } >{ props.children }</Btn>;
};

export default Button;