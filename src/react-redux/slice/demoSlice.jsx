import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../services/index'
const demoSlice = createSlice({
  name: "demo",
  initialState: { value: 0,demoData: [] },
  reducers: {
    getDemoDataSuccess:(state,action)=>{
        state.demoData=action.payload
    }
  },
});
export const { getDemoDataSuccess } = demoSlice.actions;

  export const getMatchData = ()=> async(dispatch)=>{
    try{
        const res = await axiosInstance.get('/posts');
        if (res?.status === 200) {
          dispatch(getDemoDataSuccess(res?.data));
        }
        
    }catch{}
      
  }



export default demoSlice.reducer;
