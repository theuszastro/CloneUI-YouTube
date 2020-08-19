import styled, { css } from 'styled-components';
import { FaThList } from 'react-icons/fa'
import { BsFillGrid3X2GapFill } from 'react-icons/bs'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    margin: 5px 20px;

    &.sem{
        display: unset;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 10px 35px 10px 20px;
`; 

export const Label = styled.h2`
    color: ${props => props.theme.colors.label};

    &.Gerenciar{
        cursor: pointer;
    
        font-size: 16px;

        color: blue;
        font-weight: 600;
    }
`;

export const Separator = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const IconCss = css`
    margin-left: 20px;

    cursor: pointer;

    color: ${props => props.theme.colors.icons};

    &.activeIcon{
        color: ${props => props.theme.colors.like};
    }
`;

export const GridIcon = styled(BsFillGrid3X2GapFill)`
    width: 25px;
    height: 25px;
    
    ${IconCss}
`;

export const ListIcon = styled(FaThList)`
    width: 20px;
    height: 20px;

    ${IconCss}
`;
