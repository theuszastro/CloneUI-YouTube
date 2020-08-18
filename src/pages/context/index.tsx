import React, { useState, createContext, useContext } from 'react';

type ContextProps = {
    Pequeno: boolean;
    setPequeno: any;

    Notification: boolean;
    setNotification: any;

    NotificationNumber: number;
    setNotificationNumber: any;

    Options: boolean;
    setOptions: any;

    Profile: boolean;
    setProfile: any;
    Tema: boolean;
    setTema: any;
}

const GeralContext = createContext<Partial<ContextProps>>({});

const ContextProvider: React.FC = ({ children }) => {;
    const [Pequeno, setPequeno] = useState(false);
    const [Notification, setNotification] = useState(false);
    const [NotificationNumber, setNotificationNumber] = useState(2);
    const [Options, setOptions] = useState(false);
    const [Profile, setProfile] = useState(false);
    const [Tema, setTema] = useState(false);

    return (
        <GeralContext.Provider
            value={{
                Pequeno, setPequeno,
                Notification, setNotification,
                NotificationNumber, setNotificationNumber,
                Options, setOptions,
                Profile, setProfile,
                Tema, setTema,
            }}
        >
            {children}
        </GeralContext.Provider>
    );
}

export function useSmall() {
    const context = useContext(GeralContext);
    const { Pequeno, setPequeno } = context;

    return { Pequeno, setPequeno };
}

export function useNotification() {
    const context = useContext(GeralContext);
    const { Notification, setNotification, NotificationNumber, setNotificationNumber } = context;

    return { Notification, setNotification, NotificationNumber, setNotificationNumber };
}

export function useOptions(){
    const context = useContext(GeralContext);
    const { Options, setOptions } = context;

    return { Options, setOptions };
}

export function useProfile(){
    const context = useContext(GeralContext);
    const { Profile, setProfile, Tema, setTema } = context;

    return { Profile, setProfile, Tema, setTema };
}

export default ContextProvider;