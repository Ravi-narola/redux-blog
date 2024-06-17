import { createAsyncThunk } from "@reduxjs/toolkit";


// get method

export const showUser = createAsyncThunk(
    'showUser',async(args,{rejectWithValue})=>{
        let res = await fetch(`https://character-data.onrender.com/users`)
        try {
            let resBody = await  res.json()
            // console.log(resBody);
            return resBody
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

//delete action

export const deleteUser = createAsyncThunk('deleteuser',
async(data,{rejectWithValue})=>{
    let res = await fetch(`https://character-data.onrender.com/users/${data.id}`,{method:'DELETE'})
    try {
        let resBody = await  res.json()
        // console.log(resBody);
        return resBody
    } catch (error) {
        return rejectWithValue(error)
    }
})

//post 

export const postUser = createAsyncThunk('postuser',
async(data,{rejectWithValue})=>{
    let res = await fetch(`https://character-data.onrender.com/users`,{method:'POST',body:JSON.stringify(data),headers:{"Content-Type":"application/json"}})
    try {
        let resBody = await  res.json()
        // console.log(resBody);
        return resBody
    } catch (error) {
        return rejectWithValue(error)
    }
})

//update

export const updateUser = createAsyncThunk('updateuser',
async(data,{rejectWithValue})=>{
    let res = await fetch(`https://character-data.onrender.com/users/${data.id}`,{method:'PUT',body:JSON.stringify(data),headers:{"Content-Type":"application/json"}})
    try {
        let resBody = await  res.json()
        // console.log(resBody);
        return resBody
    } catch (error) {
        return rejectWithValue(error)
    }
})