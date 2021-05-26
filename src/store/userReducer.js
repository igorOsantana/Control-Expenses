const INITIAL_STATE = {
    userLogin: false,
    email: "",
    name: "",
    lastName: "",
};

function userReducer ( state = INITIAL_STATE, action ) {
    switch ( action.type ) {
        case 'REGISTER':
            return { 
                ...state,
                userLogin: true,
                email: action.email,
                name: action.name,
                lastName: action.lastName,
            }
        case 'LOGIN':
            return { 
                ...state,
                userLogin: true,
                email: action.email,
            }
        case 'LOGOUT':
            return { 
                ...state,
                userLogin: false,
                email: null,
                name: null,
                lastName: null,
            }
        default:    
            return state;
    }
}

export default userReducer;