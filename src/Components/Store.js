import listDataReducer from "../Reducers/listDataReducer";
import listUserReducer from "../Reducers/listUserReducer";
import listQuestionReducer from "../Reducers/listQuestionReducer";

var redux = require("redux");
var allReducers = redux.combineReducers({
    listData : listDataReducer,
    listUser : listUserReducer,
    listQuestion : listQuestionReducer
})
var store = redux.createStore(allReducers);

export default store;