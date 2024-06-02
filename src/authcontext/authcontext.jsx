
import { createContext,useState } from "react";

export const AuthContext=createContext()

export const AuthContextProvider=(props)=>{

const[authState,setAuthState]=useState({isAuthenticated: false, token: null, email: null })

return(
    <AuthContext.Provider value={{authState,setAuthState}}>
    {
        props.children
    }
    </AuthContext.Provider>
)
}