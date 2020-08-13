import React, { useState, createContext, useContext } from 'react';

type SmallProps = {
    Pequeno: boolean;
    setPequeno: any;
}

const SmallContext = createContext<Partial<SmallProps>>({});

const SmallProvider: React.FC = ({ children }) => {
    const [Pequeno, setPequeno] = useState(false);

    return (
        <SmallContext.Provider
            value={{Pequeno, setPequeno}}
        >
            {children}
        </SmallContext.Provider>
    );
}

export function useSmall() {
    const context = useContext(SmallContext);
    const { Pequeno, setPequeno } = context;

    return { Pequeno, setPequeno };
}

export default SmallProvider;