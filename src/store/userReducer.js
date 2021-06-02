const INITIAL_STATE = {
    userLogin: false,
    email: ""
};

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case 'LOGIN':
            return { 
                userLogin: true,
                email: action.email,
            }
        case 'LOGOUT':
            return { 
                userLogin: false,
                email: null
            }
        default:    
            return state;
    }
};

export default userReducer;