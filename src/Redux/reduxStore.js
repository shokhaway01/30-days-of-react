import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profilePageReducer";
import { dialogsReducer } from "./dialogsPageReducer";
import { sidebarReducer } from "./sidebarPageReducer";



// Редюссеры 
let reducers = combineReducers({
    
    // Profile Page Редюссер
    ProfilePage:profileReducer,
    // Dialog Page Редюссер 
    DialogsPage:dialogsReducer,
    // Side Bar Редюссер 
    sideBar:sidebarReducer
});
let store = createStore(reducers)
console.log(store.getState());

export default store;