import { createSlice } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'
// import { useHistory } from 'react-router-dom'




const initialState = {
    userData: {},
    isLoggedIn: false,
    token: ''   ,
    isLoading: false,
    error:""
};


const authSlice = createSlice({
    name: 'authentication',
    initialState,
    
    reducers: {
        startLoading:(state)=>{
            state.isLoading= true
        },
        endLoading:(state,action) =>{
            console.log("end")
            state.isLoading= false
            state.error= action.payload
        },

        signUp: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
        },
        login: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
            state.isLoading=false

        },
        storeToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.userData = null;
            state.isLoggedIn = false;
            state.token = ''
        },
        editUser: (state, action) => {
            state.userData = action.payload;
        }

    }
})

export const { signUp, login, logout,editUser,isLoading,endLoading,startLoading} = authSlice.actions;
export default authSlice.reducer;


export const loginUser = (info) => async(dispatch) => {
    console.log(info)
    try {
        dispatch(startLoading())
        const response = await axios ({
            method: 'POST',
            url: 'https://tresor.onrender.com/api/auth/login',
            data: info,
        });
        dispatch(login(response.data.data));
        setItemAsync('userInformation', JSON.stringify(response.data));
        dispatch(storeToken(response.data.token));
        setItemAsync('userToken', JSON.stringify(response.data.data.others.token))
        console.log(response.data.data, 'data given')
    } catch (error) {
        dispatch(endLoading(error.response.data))
        console.log(error.response.data,  'message error')
        
    }
    // if(data.isLoggedIn) {
    //     history.push('/MainNavigates')
    // }
}

export const LogoutUser = () => async (dispatch) => {
    deleteItemAsync('userInformation');
    deleteItemAsync('userToken');
    dispatch(logout(''));
}

export const signUpData = (useInfo) => async(dispatch) => {
    try{
        const response = await axios({
            method: 'POST',
            url: 'https://tresor.onrender.com/api/auth/register',
            data: useInfo,
        });
        // console.log(response.data);
        dispatch(signUp(response.data));
        setItemAsync('userInformation', JSON.stringify(response.data));
        setItemAsync('userToken', JSON.stringify(response.data.data.others.token))
        // getItemAsync('userSignUpInfo').then((data)=>console.log(data))
    } catch (error) {
        console.log(error)
    }
} 

export const editUserData = (id, data) => (dispatch) => {
    let token="";
    getItemAsync("userToken").then((res)=>{
        console.log(res)
        token = res
    })
    axios({
        method: "PATCH",
        url: `https://tresor.onrender.com/api/users/update/${id}`,
        data: data,
        headers: {
            Authorization: `bearer ${token}`
        }
    }).then((res)=>{
        console.log(res)
    })
}



