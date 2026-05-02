import {configureStore} from "@reduxjs/toolkit";

import counterReduce from '../features/counter/CounterSllice'

export const store=configureStore({
    reducer:{
        counter:counterReduce,
    }
})