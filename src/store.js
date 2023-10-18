const { configureStore } = require("@reduxjs/toolkit");
import menuReducer from "@/slice/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
