import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --gray-light: #909090;
        --gray-light-text: #9e9e9e;
        --gray-dark: #606060;
        --gray-background: #212121;
        --blue-dark: #065fd4;
        --gray-single: #aaa;
        --main-background: #181818;
        --background-color-button: rgb(59, 59, 59);
        --white: #FFF;
        --hover-gray: #646464;      
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: content-box;
    }

    body{
        overflow: hidden;
    }

    a{
        text-decoration: none;
    }
`;
