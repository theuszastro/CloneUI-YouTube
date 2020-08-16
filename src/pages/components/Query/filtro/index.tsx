import React from 'react';

import { Container, Icon, FiltroIcon, Separator, Label } from './styles';

const Filter: React.FC = () => {
    return (
        <Container>
            <Separator>
                <Icon>
                    <FiltroIcon />
                </Icon>
                <Label>FILTRO</Label>
            </Separator>
        </Container>
    );
}

export default Filter;