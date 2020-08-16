import styled, { css } from 'styled-components';
import { GoVerified } from 'react-icons/go';
import { FiBellOff } from 'react-icons/fi';
import { MdNotificationsActive } from 'react-icons/md'
import { BsBell } from 'react-icons/bs'

export const Container = styled.div`
    padding-bottom: 19.5px;
    
    border-bottom: 2px solid var(--background-color-button);
    
    max-width: 80%;
    
    margin-left: 25px;

    font-family: 'Montserrat';
    font-size: 17px;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left: 0px;
`;

export const Image = styled.img`
    width: 140px;
    height: 135px;

    margin: 0px 55px;

    border-radius: calc(135px / 2);
`;

export const Separator = styled.div`
    &.Inscrito{
        display: flex;
        align-items: center;

        width: 150px; 
        height: 50px;

        position: relative;
    }
`;

export const Nome = styled.h2`
    color: var(--white);

    font-size: 20px;
`;

export const Inscritos = styled.p``;

export const Videos = styled.p`
    margin-left: 10px;
`;

export const Bio = styled.p`
    width: 490px;

    margin-right: 10px;

    color: var(--gray-light-text);
    font-size: 14px;
`;

export const Inscrever = styled.a`
    width: 150px;
    height: 50px;

    background-color: red;
    color: var(--white);

    outline: 0;

    cursor: pointer;

    border: 0px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 500;
`;

export const Inscrito = styled.button`
    width: 100px;
    height: 50px;

    background-color: var(--background-color-button);
    color: var(--gray-light);

    outline: 0;
    
    border: 0px;
    border-radius: 5px;

    font-size: 18px;

    cursor: pointer;
`;

export const Bell = styled(MdNotificationsActive)`
    width: 30px;
    height: 30px;

    margin-left: 10px;

    color: var(--gray-light);

    cursor: pointer;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    color: var(--gray-light-text);
    font-size: 14px;
`;

export const Verify = styled(GoVerified)`
    margin-left: 7px;

    color: var(--gray-light);
`;

export const ChangeBell = styled.div`
    background-color: var(--background-color-button);
    
    width: 200px;

    position: absolute;
    top: 50px;
    left: 105px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 15px;

    &:hover{
        background-color: rgba(0, 0, 0, .4);
    }

    &.active{
        svg{
            color: var(--blue-dark);
        }
    }
`;

export const Label = styled.p``;

export const CssIcons = css`
    width: 30px;
    height: 30px;

    margin-left: 10px;

    color: var(--gray-light);

    cursor: pointer;
`;

export const Personalizado = styled(BsBell)`
    ${CssIcons}
`;

export const Off = styled(FiBellOff)`
    ${CssIcons}
`;
