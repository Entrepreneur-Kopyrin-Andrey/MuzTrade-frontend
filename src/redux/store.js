import { configureStore } from "@reduxjs/toolkit";
import {authRuducer} from "./slices/auth";
import {newsReducer} from "./slices/news"

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authRuducer,

  },
});

export default store;
