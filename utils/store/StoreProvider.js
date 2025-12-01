import React, { useContext, useState, createContext, useEffect } from "react";
import { getProjects } from "../getProjects";
import initialStore from "./initialStore";
import rootReducer from "./reducer";

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children, ...props }) => {

  const [store, setStore] = useState(initialStore);
  const dispatch = (action) => {
    setStore(rootReducer(store,action))
  }
 

  useEffect(()=>{
 setTimeout(()=>{
  setStore({...store,loading:false})
 },5000)
    //console.log(store)

  },[])

  return (
    <StoreContext.Provider value={{ store, dispatch }} {...props}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
