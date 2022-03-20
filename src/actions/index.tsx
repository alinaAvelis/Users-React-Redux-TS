

const usersLoaded = (newData: Array<object>) => {
    return {
        type: 'USERS_LOADED',
        payload: newData
    };
};


const usersRequested = () => {
    return {
        type: 'USERS_REQUSTED'
    };
};

const usersError = () => {
    return {
        type: 'USERS_ERROR'
    };
};



export {
    usersLoaded,
    usersRequested,
    usersError
};