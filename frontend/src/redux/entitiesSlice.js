import  { createSlice } from "@reduxjs/toolkit";


const initialState = {
    students : [],
    agents : [],
    scholarships : []
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
        },

        setScholarship : (state,action) => {
            state.scholarships = action.payload
        }
    }
})


export const {setStudent,setAgent,setScholarship} = entitiesSlice.actions
export default entitiesSlice.reducer