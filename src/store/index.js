import { configureStore } from "@reduxjs/toolkit";
import  {usersData} from './usersSlice'


export const store = configureStore({
    reducer:{
        allusers:usersData
    }
})