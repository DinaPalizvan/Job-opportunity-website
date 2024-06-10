import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";

const store= configureStore({
    reducer:{
        skills: filterSlice
    }
})

export {store}