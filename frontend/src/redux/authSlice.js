import  { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    user : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setLoading : (state,action) => {
            state.loading = action.payload 
        },
        setUser : (state , action) => {
            state.user = action.payload
        },
        logout : (state,action) => {
            state.user = null
        }
    }
})

export const {setLoading,setUser,logout} = authSlice.actions
export default authSlice.reducer