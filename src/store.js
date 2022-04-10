import { configureStore } from "@reduxjs/toolkit";
// import keywordsReducer from "./reduxOldWay/reducer.js";
import  keySliceReducer  from "./reduxSlice/slice.js";

export default configureStore({
    reducer: {
        keywords: keySliceReducer
    }
});