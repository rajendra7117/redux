import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async() => {
  try {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
  
    if (response.status!==200) {
      throw new Error("sorry something went wrong, please try again later!");
    }
    return response.data
    
  } catch (err) {
   return err.message
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      console.log(action.payload)
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload.error;
    });
  },
});

export default usersSlice;
