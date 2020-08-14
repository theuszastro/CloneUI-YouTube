import React from 'react';

import { Container } from './styles';
import { useNotification } from '../../context';

const Conteudo: React.FC = ({ children }) => {
    const { Notification, setNotification } = useNotification();

    return (
        <Container
            onClick={() => {
                Notification &&  setNotification(false);
            }}
        >
            {children}
        </Container>
    );
}

export default Conteudo;