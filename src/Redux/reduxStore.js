import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profilePageReducer";
import { dialogsReducer } from "./dialogsPageReducer";
import { sidebarReducer } from "./sidebarPageReducer";


// Импортируем 3 редюссера 


// Редюссеры +
let reducers = combineReducers({
    
    // Profile Page Редюссер
    ProfilePage:profileReducer,
    // Dialog Page Редюссер 
    DialogsPage:dialogsReducer,
    // Side Bar Редюссер 
    sideBar:sidebarReducer
    
});
let store = createStore(reducers)

window.store = store;

export default store;