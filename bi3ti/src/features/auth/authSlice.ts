import {createSlice} from '@reduxjs/toolkit'
import { DisplayUser } from './models/DisplayUser.interface'
import { Jwt } from './models/Jwt';
interface AsyncState {isLoading : boolean, isSuccess: boolean, isError: boolean}

interface AuthState extends AsyncState {
    user?: DisplayUser |null 
    jwt: Jwt;
    isAuthenticated: boolean;

}

const initialState : AuthState={
    isLoading :  false , 
     isSuccess:  false,   
    isError:  false  ,
     user?: null,//user 
    jwt:   null,//jwt ,
     isAuthenticated: false  ,


}

export const authSlice = createSlice({
    name : "auth", initialState
})