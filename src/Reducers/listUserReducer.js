var oldState = [];
var listUserReducer = (state = oldState , action) => {
    switch (action.type) {
        case 'getUser':
            return action.data;
        default:
            return state
    }
}

export default listUserReducer;