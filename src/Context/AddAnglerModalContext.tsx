import { createContext, useContext, useState } from 'react';
import { AddAnglerModel } from '../Components/AddAnglerModal';

const AddAnglerModalContext = createContext<{
    show:boolean,
    showModal:()=>void,
    hideModal:()=>void,
}| undefined
>(undefined)

function AddAnglerModalProvider({children}: {children: React.ReactNode}) {
    const [show, setShow] = useState(false)

    const value = {
        show: show,
        showModal:()=>setShow(true),
        hideModal:()=>setShow(false),
    }
  return (
    <AddAnglerModalContext.Provider value={value}>
      {children}
      <AddAnglerModel/>
    </AddAnglerModalContext.Provider>
  )
}

function useAnglerModal() : {
    show:boolean,
    showModal:()=>void,
    hideModal:()=>void,
} {
  const context = useContext(AddAnglerModalContext)
  if (context === undefined) {
    throw new Error('useAnglerModal must be used within a AddAnglerModalProvider')
  }
  return context
}

export {AddAnglerModalProvider, useAnglerModal}