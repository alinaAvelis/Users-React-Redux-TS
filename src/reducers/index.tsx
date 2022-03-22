const initialState = {
    users: [],
    sortUsers: [],
    loading: true,
    error: false,
}

type ACTIONTYPE =
  | { type: 'USERS_LOADED'; payload: Array<object> }
  | { type: 'USERS_SORTING'; payload: Array<object> }
  | { type: 'STOP_LOADING'; }
  | { type: 'USERS_REQUSTED';}
  | { type: 'USERS_ERROR'; }


const reducer = (state = initialState, action: ACTIONTYPE) => {
    switch (action.type) {
     
        case 'USERS_LOADED':
            return {
                users: action.payload,
                sortUsers: state.sortUsers,
                loading: false,
                error: state.error,
            };
        case 'USERS_SORTING':
            return {
                users: state.users,
                sortUsers: action.payload,
                loading: false,
                error: state.error,
            };
        case 'USERS_REQUSTED':
            return {
                users: state.users,
                sortUsers: state.sortUsers,
                loading: state.loading,
                error: state.error,
            };
        case 'USERS_ERROR':
            return {
                users: state.users,
                sortUsers: state.sortUsers,
                loading: state.loading,
                error: true
            };
        case 'STOP_LOADING':
            return {
                users: state.users,
                sortUsers: state.sortUsers,
                loading: false,
                error: state.error,
            }
        default: 
            return state;
    }
}

export default reducer;