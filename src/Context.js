import React,{ useState,useEffect,useContext,createContext } from "react"
import axios from "axios";

const Context=createContext();

export function ContextProvider({children}){
    const [allPhotos,setAllPhotos] =useState([])

    useEffect(()=>{
        async function fetchData(){
            const { data }= await axios.get(
            `https://fakestoreapi.com/products`
            );
            console.log(data)
            setAllPhotos(data)
    }
    fetchData();
    },[]);


    return(
        <Context.Provider 
        value={{
            allPhotos
            }}
        >
              {children}
        </Context.Provider>
    );
}

export function useApi(){
   const context_api= useContext(Context);
   if(context_api === undefined){
    throw new Error("Context must be used within a Provider")
   }
   return context_api;
}
