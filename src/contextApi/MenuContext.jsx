import {createContext,useContext,useState} from "react";

const MenuContext = createContext(null);
export const useMenu = ()=> useContext(MenuContext);

export const MenuProvider = ({children})=>{
    const [open,setOpen] = useState(false);
    return (
        <MenuContext.Provider value={{open,setOpen}}>
            {children}
        </MenuContext.Provider>
    );
}
