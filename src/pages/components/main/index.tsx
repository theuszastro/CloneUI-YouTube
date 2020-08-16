import React from 'react';

import { Container } from './styles';
import { useNotification, useOptions } from '../../context';

const Conteudo: React.FC = ({ children }) => {
    const { Notification, setNotification } = useNotification();
    const { Options, setOptions } = useOptions();

    return (
        <Container
            onClick={() => {
                Notification &&  setNotification(false);
                Options && setOptions(false);
            }}
        >
            {children}
        </Container>
    );
}

export default Conteudo;