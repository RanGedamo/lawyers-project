import React, { createContext, useState, useContext } from 'react'
import Chat from '../component/features/chat/Chat'

const PopupContext = createContext()

export const PopupProvider = ({ children }) => {
   const [popChat, setPopChat] = useState(Chat)
 
   
   return (
     <PopupContext.Provider popChat={{ popChat}}>
       {children}
     </PopupContext.Provider>
    )
}

export const usePopup = () => useContext(PopupContext)