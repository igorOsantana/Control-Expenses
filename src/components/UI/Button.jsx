import { Btn } from './StyleButton';

const Button = props => {
    return <Btn { ...props } >{ props.children }</Btn>;
};

export default Button;