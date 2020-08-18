import React from 'react';

import { Container } from './styles';
import { useNotification, useOptions, useProfile } from '../../context';

const Conteudo: React.FC = ({ children }) => {
    const { Notification, setNotification } = useNotification();
    const { Options, setOptions } = useOptions();
    const { Tema, setTema, Profile, setProfile } = useProfile();

    return (
        <Container
            onClick={() => {
                Notification &&  setNotification(false);
                Options && setOptions(false);
                Profile && setProfile(false);
                Tema && setTema(false);
            }}
        >
            {children}
        </Container>
    );
}

export default Conteudo;