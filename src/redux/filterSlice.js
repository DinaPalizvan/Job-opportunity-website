import { createSlice } from "@reduxjs/toolkit";

const filterSlice= createSlice({
    name: "filteredSkills",
    initialState: [],
    reducers:{
        addSkills: (state, action)=>{
            state.push(action.payload)
        },
        deleteSkill: (state, action)=>{
            return state.filter(e=>e!== action.payload.text.slice(0,-1))
        },
        deleteAll: (state)=>{
            state.splice(0, state.length)
        }
    }
})

export const {addSkills, deleteAll, deleteSkill} = filterSlice.actions

export default filterSlice.reducer