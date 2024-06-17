import { createSlice } from "@reduxjs/toolkit";
import {deleteUser, postUser, showUser, updateUser} from './thunk/fetchUser'


const usersSlice = createSlice({
    name:"users",
    initialState:{
        isLoading:false,data:null,error:null,searchData:null
    },
    reducers:{
searchData:(state,action)=>{
    state.searchData = action.payload
}
    }
    ,
    extraReducers(builder){
        // get req
        builder.addCase(showUser.pending,(state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(showUser.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.data = action.payload
            state.isLoading=false
            state.error=null
          
        }),
        builder.addCase(showUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.payload
            state.data = null
        }),
        //delete req
        builder.addCase(deleteUser.pending,(state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=null

            console.log(action.payload);
            let {id} = action.payload
if(id){
    state.data = state.data.filter(ele=>ele.id != id)
}
          
        }),
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.payload
            state.data = null
        }),
        // post
        builder.addCase(postUser.pending,(state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(postUser.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.data.push(action.payload)
            state.isLoading=false
            state.error=null
          
        }),
        builder.addCase(postUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.payload
            state.data = null
        }),
          // update
          builder.addCase(updateUser.pending,(state,action)=>{
            state.isLoading=true
        }),
        builder.addCase(updateUser.fulfilled,(state,action)=>{
            
            state.isLoading=false
            state.error=null
            state.data = state.data.map(ele=>{
                return ele.id == action.payload.id ? action.payload : ele
            })
          
        }),
        builder.addCase(updateUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.payload
            state.data = null
        })



    }

})

export const {searchData} = usersSlice.actions
export const usersData = usersSlice.reducer