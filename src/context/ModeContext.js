import React, { useState, useEffect, createContext } from "react"

export const ModeContext = createContext()

const ModeContextProvider = ({ children }) => {
  //meth2 mise en fonction local storage
  const getLocalStorage= () => localStorage.getItem("mode") || "light"
  const [mode, setMode] = useState(getLocalStorage)
  useEffect(()=>{
    localStorage.setItem("mode", mode)
  }, [mode])
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeContextProvider
