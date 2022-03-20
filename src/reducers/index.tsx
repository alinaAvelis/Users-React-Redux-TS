const initialState = {
    users: [],
    loading: true,
    error: false,
}

type ACTIONTYPE =
  | { type: 'USERS_LOADED'; payload: Array<object> }
  | { type: 'USERS_REQUSTED';}
  | { type: 'USERS_ERROR'; }


const reducer = (state = initialState, action: ACTIONTYPE) => {
    switch (action.type) {
     
        case 'USERS_LOADED':
            return {
                users: action.payload,
                loading: false,
                error: state.error,
            };
        case 'USERS_REQUSTED':
            return {
                users: state.users,
                loading: state.loading,
                error: state.error,
            };
        case 'USERS_ERROR':
            return {
                users: state.users,
                loading: state.loading,
                error: true
            };
        default: 
            return state;
    }
}

export default reducer;