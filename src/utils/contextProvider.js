import { useState, createContext, useContext } from "react";

const stateContext = createContext();

export const ContextProvider = ({children}) => {
    const [ham, setHam] = useState("open");
    const triggerHam = () => {
        if (ham === "open") setHam("close");
        else {
            setHam("open");
        }
    };

    return <stateContext.Provider value={{ ham, setHam, triggerHam }}>
        {children}
    </stateContext.Provider>
}


export const useStateContext = ()=> useContext(stateContext);