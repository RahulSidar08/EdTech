import  { createSlice } from "@reduxjs/toolkit";


const initialState = {
    students : [],
    agents : []
}

const entitiesSlice = createSlice({
    name : "entities",
    initialState,
    reducers : {
        setStudent : (state,action) => {
            state.students = action.payload
        },

        setAgent : (state,action) => {
            state.agents = action.payload
        }
    }
})


export const {setStudent,setAgent} = entitiesSlice.actions
export default entitiesSlice.reducer