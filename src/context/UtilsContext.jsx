import { createContext, useState, useContext } from 'react';

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [mobileShow, setMobileShow] = useState(false);

    return (
        <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}>
            {children}
        </UtilsContext.Provider>
    );
};

export const useUtils = () => {
    const utilsContext = useContext(UtilsContext);

    if (!utilsContext) {
        throw new Error('useUtils must be used within a UtilsContextProvider');
    }

    return utilsContext;
};
