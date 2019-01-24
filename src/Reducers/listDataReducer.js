var oldState = [];
var listDataReducer = (state = oldState, action) => {
    switch (action.type) {
        case 'getData':
            return action.data;
        case "searchData" :
            return action.data;
        default:
            return state
    }
}

export default listDataReducer;