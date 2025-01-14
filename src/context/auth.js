import { createContext, useContext, useEffect, useState } from "react";



const AuthContext=createContext()

const AuthProvider=({children})=>{
  const[loading,setLoading]=useState(true)
    const [auth,setAuth]=useState({
        user:null,
        token:"",
    
    })
    useEffect(()=>{
        const data=localStorage.getItem("auth");
        if(data){
            const parseData=JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token,
               
            })
            setLoading(false)
           
        }
        //eslint-disable-next-line
    },[])

console.log(auth)
console.log(loading)
    return(
        <AuthContext.Provider value={[auth,setAuth,loading]}>
            {children}

        </AuthContext.Provider>
    )
}
//custom hooks:
const useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}
