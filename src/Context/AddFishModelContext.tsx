import { createContext, useContext, useState } from 'react';
import { AddFishModal } from '../Components/AddFishModal';

const AddFishModalContext = createContext<{
    show:boolean,
    anglerName:string,
    showModal:(anglerName:string)=>void,
    hideModal:()=>void,
}| undefined
>(undefined)

function AddFishModalProvider({children}: {children: React.ReactNode}) {
    const [show, setShow] = useState(false)
    const [anglerName, setAnglerName] = useState("");
    const value = {
        show: show,
        anglerName:anglerName,
        showModal:(anglerName:string)=>{setAnglerName(anglerName); setShow(true);},
        hideModal:()=>{setAnglerName(""); setShow(false);},
    }
  return (
    <AddFishModalContext.Provider value={value}>
      {children}
      <AddFishModal/>
    </AddFishModalContext.Provider>
  )
}

function useFishModal() : {
    show:boolean,
    anglerName:string,
    showModal:(anglerName:string)=>void,
    hideModal:()=>void,
} {
  const context = useContext(AddFishModalContext)
  if (context === undefined) {
    throw new Error('useFishModal must be used within a AddFishModalProvider')
  }
  return context
}

export {AddFishModalProvider , useFishModal}