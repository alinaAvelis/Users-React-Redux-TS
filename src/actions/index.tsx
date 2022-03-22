

const usersLoaded = (newData: Array<object>) => {
    return {
        type: 'USERS_LOADED',
        payload: newData
    };
};

const usersSorting = (newData: Array<object>) => {
    return {
        type: 'USERS_SORTING',
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

const stopLoading = () => {
    return {
        type: 'STOP_LOADING'
    };
};



export {
    usersLoaded,
    usersSorting,
    usersRequested,
    usersError,
    stopLoading
};