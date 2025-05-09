import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../services/apiAuth";
const initialState={
    email:"",
    username:"",
    password:"",
    role:"",
    isLogin:false
}
const userSlice = createSlice({
    name:"user",initialState,reducers:{
        signUp:(state,action)=>{
           const{email,username,password,role} = action.payload
           state.email = email
           state.username = username
           state.password = password
           state.role = role
        },
        loginUser:(state,action)=>{
            const{email,username,role,}= action.payload
            state.email = email
            state.username = username
            state.role = role
            state.isLogin= true
        },
        logOutUser:(state)=>{
            state.isLogin = false
        }
    }
})
export const {signUp,loginUser,logOutUser} = userSlice.actions
export default userSlice.reducer