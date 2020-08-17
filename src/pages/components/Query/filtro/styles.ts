import styled from 'styled-components';
import { FiSliders } from 'react-icons/fi'

export const Container = styled.div`
    margin: 25px;

    max-width: 80%;

    padding-bottom: 7.5px;

    border-bottom: 2px solid ${props => props.theme.colors.button_border};
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;

    width: 100px;

    cursor: pointer;

    color: ${props => props.theme.colors.icons};

    &:hover{
        color: ${props => props.theme.title === 'light'? props.theme.colors.icons : props.theme.colors.label };
    }
`;

export const Icon = styled.div`
    transform: rotate(-90deg);
`;

export const FiltroIcon = styled(FiSliders)`
    width: 25px;
    height: 25px;

    color: ${props => props.theme.colors.icons};
`;

export const Label = styled.h3`
    margin-left: 7.5px;

    font-weight: normal; 
`;