var oldState = [];
var listQuestionReducer = (state = oldState , action) => {
    switch (action.type) {
        case 'getQuestion':
            return action.data;
        default:
            return state
    }
}

export default listQuestionReducer;