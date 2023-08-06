import { createContext, useContext, useState } from 'react';
import AddAnglerModel from '../Components/AddAnglerModal';

const AddAnglerModalContext = createContext<{
    show: boolean;
    showModal: () => void;
    hideModal: () => void;
} | undefined>(undefined);

function AddAnglerModalProvider({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);
    const hideModal = () => setShow(false);

    const value = {
        show,
        showModal,
        hideModal,
    };

    return (
        <AddAnglerModalContext.Provider value={value}>
            {children}
            <AddAnglerModel />
        </AddAnglerModalContext.Provider>
    );
}

function useAnglerModal() {
    const context = useContext(AddAnglerModalContext);

    if (!context) {
        throw new Error('useAnglerModal must be used within an AddAnglerModalProvider');
    }

    return context;
}

export { AddAnglerModalProvider, useAnglerModal };