import React,{useContext,useState} from 'react'

const UserContext=React.createContext();

export const UserContextProvider=({children})=>{
    const [userData,setUserData]= useState({})
    return(
       <UserContext.Provider value={{userData,setUserData}}>
            {children}
       </UserContext.Provider>
    )
}

export const useUserContext=()=>{
    return useContext(UserContext);
}