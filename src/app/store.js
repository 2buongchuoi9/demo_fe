import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./slice/auth.slice"
import infosReducer from "./slice/info.slide"
import categoryReducer from "./slice/category.slice"

const rootReducer = combineReducers({
    auth: authReducer,
    info: infosReducer,
    category: categoryReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store
