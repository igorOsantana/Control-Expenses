import { Container, Content, ButtonSignout } from './StyleNavbar';
import firebase from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';



const Navbar = props => {
    const dispatch = useDispatch();
    const isAuth = useSelector( state => state.userLogin );

    const signout = event => {
        event.preventDefault();
        dispatch({ type: 'LOGOUT' });
        firebase.auth().signOut().then(() => {
            console.log('Usuário desconectado');
        }).catch( err => {
            console.log(err);
        });
    };

    return (
        <Container>
            <Content>
                <h2>Masraf</h2>
                <div>
                    <p>{ props.titlePage }</p>
                    { !!isAuth && 
                        <ButtonSignout 
                            onClick={ signout }
                            href="#"
                        >
                            Sair&nbsp;➡
                        </ButtonSignout> 
                    }
                </div>
            </Content>
        </Container>
    );
}

export default Navbar;