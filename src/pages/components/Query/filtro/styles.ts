import styled from 'styled-components';
import { FiSliders } from 'react-icons/fi'

export const Container = styled.div`
    margin: 25px;

    max-width: 80%;

    padding-bottom: 7.5px;

    border-bottom: 2px solid var(--background-color-button);
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;

    width: 100px;

    cursor: pointer;

    color: var(--gray-light);

    &:hover{
        color: var(--white);
    }
`;

export const Icon = styled.div`
    transform: rotate(-90deg);
`;

export const FiltroIcon = styled(FiSliders)`
    width: 25px;
    height: 25px;
`;

export const Label = styled.h3`
    margin-left: 7.5px;

    font-weight: normal; 
`;