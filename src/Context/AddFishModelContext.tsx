import { createContext, useContext, useState } from 'react';
import AddFishModal from '../Components/AddFishModal';

type FishModalContextValue = {
    show: boolean;
    anglerName: string;
    showModal: (anglerName: string) => void;
    hideModal: () => void;
};

const AddFishModalContext = createContext<FishModalContextValue | undefined>(undefined);

function AddFishModalProvider({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(false);
    const [anglerName, setAnglerName] = useState('');

    const showModal = (name: string) => {
        setAnglerName(name);
        setShow(true);
    };

    const hideModal = () => {
        setAnglerName('');
        setShow(false);
    };

    const value: FishModalContextValue = {
        show,
        anglerName,
        showModal,
        hideModal,
    };

    return (
        <AddFishModalContext.Provider value={value}>
            {children}
            <AddFishModal />
        </AddFishModalContext.Provider>
    );
}

function useFishModal() {
    const context = useContext(AddFishModalContext);

    if (!context) {
        throw new Error('useFishModal must be used within an AddFishModalProvider');
    }

    return context;
}

export { AddFishModalProvider, useFishModal };