
import listDataReducer from './../Reducers/listDataReducer';
import listUserReducer from './../Reducers/listUserReducer';
import listQuestionReducer from './../Reducers/listQuestionReducer';

var redux = require("redux");

// var oldState = {
//     listData : [],
//     listUser : [],
//     listQuestion : []
// }

// var allReducers = (state = oldState , action) => {
//     switch (action.type) {
//         case 'getData':
//         return {...state,listData : action.data};
//         case "getUser":
//         return {...state,listUser : action.data};
//         case "getQuestion" :
//         return {...state,listQuestion : action.data};
//         case "searchData" :
//         return {...state,listData : action.data};
//         default:
//             return state
//     }
// }

var allReducers = redux.combineReducers({
    listData : listDataReducer,
    listUser : listUserReducer,
    listQuestion : listQuestionReducer
})

var store = redux.createStore(allReducers);

export default store;

