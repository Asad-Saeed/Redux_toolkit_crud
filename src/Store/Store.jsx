import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserDetailsSlice";

const store = configureStore({
  // this reducer work as combine reducer with multiple slices and work as root reducer with one slice
  reducer: {
    // this means store can now get all micro reducers access
    users: userSlice,
  },
});

export default store;
