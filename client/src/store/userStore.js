import {configureStore} from "@reduxjs/toolkit"

import userReducer from "./userReducer"

export const userStore=configureStore({

reducer:userReducer,
middleware: getDefaultMiddleware =>
getDefaultMiddleware({
  serializableCheck: false,
}),
})

