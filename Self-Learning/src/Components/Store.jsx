import { configureStore } from "@reduxjs/toolkit";
import About from "./About";

const Store = configureStore({

  reducer: {
    counter: About
  }

});

export default Store;