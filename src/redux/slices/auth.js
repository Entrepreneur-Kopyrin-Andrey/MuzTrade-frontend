import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.post("/auth/login", params);
  return data;
});

export const fetchAuthUser = createAsyncThunk(
  "auth/fetchAuthUser",
  async () => {
    const { data } = await axios.get("/auth/user");
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },

    [fetchAuthUser.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthUser.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuthUser.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});
// console.log(data)
export const selectIsAuth = (state) => Boolean(state.auth.data);
export const authRuducer = authSlice.reducer;

export const { logout } = authSlice.actions;
