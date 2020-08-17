import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 56px;

    flex: 1;
    height: 100vh;

    background-color: ${props => props.theme.colors.secondary};
    color: #fff;

    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;       
    }
  
    &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.secondary};        
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.button_border};         
        border: 3px solid ${props => props.theme.colors.button_border};   
    }
`;