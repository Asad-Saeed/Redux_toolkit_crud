import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsersIMP } from "../Actions/Action";

const userSlice = createSlice({
  // name of Slice
  name: "user",
  // initial state
  initialState: [],
  // main reducer object
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
      console.log(action.payload);
    },
    clearAllUser(state, action) {
      // it means we add new data instead of previous
      // return (state = []);
      // this mean initail state now empty
      return [];
    },
  },
  // Extra reducers we suppose we write it in anothe slice like admin
  extraReducers(buider) {
    buider.addCase(clearAllUsersIMP, () => {
      // paste repeated part in callback
      return [];
    });
  },
});
console.log(userSlice.actions);
// this means store can now get all micro reducers access userSlice.reducer;
export default userSlice.reducer;
// this means you can now get all action creater access userSlice.actions;
export const { addUser, removeUser, clearAllUser } = userSlice.actions;
