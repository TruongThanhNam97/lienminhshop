var redux = require("redux");
var oldState = {
    listData : [],
    listUser : [],
    listQuestion : []
}
var allReducers = (state =oldState , action) => {
    switch (action.type) {
        case 'getData':
            return {...state,listData : action.data};
        case "getUser" :
            return {...state,listUser : action.data};
        case "getQuestion" :
            return {...state,listQuestion : action.data};
        default:
            return state
    }
}
var store = redux.createStore(allReducers);
store.subscribe(()=>{
    console.log(store.getState()); 
})

export default store;