import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 56px;

    flex: 1;
    height: 100vh;

    background-color: var(--main-background);
    color: #fff;

    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;       
    }
  
    &::-webkit-scrollbar-track {
        background: var(--main-background);        
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--background-color-button);         
        border: 3px solid var(--background-color-button);   
    }
`;