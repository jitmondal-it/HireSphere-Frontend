import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./Slices/UserSlice";
import  profileReducer  from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice";
import sortReducer from "./Slices/SortSlice"
import jwtReducer from "./Slices/JwtSlice"
import ThemeReducer from "./Slices/ThemeSlice"
export default configureStore({
    reducer:{
        user : useReducer,
        profile : profileReducer,
        filter : filterReducer,
        sort: sortReducer,
        jwt: jwtReducer,
        theme: ThemeReducer

    }
})