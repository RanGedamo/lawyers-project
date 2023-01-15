import {configureStore} from "@reduxjs/toolkit"
import lawyerReducer from './lawyerReducer'
import userReducer from "./userReducer"

export const userStore=configureStore({

reducer:{userReducer,lawyerReducer},
middleware: getDefaultMiddleware =>
getDefaultMiddleware({
  serializableCheck: false,
}),
})

