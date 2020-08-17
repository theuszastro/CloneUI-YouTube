import styled from 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string;
    
        colors: {
            primary: string;
            secondary: string;
            icons: string;
            iconsActive: string;
            label: string;
            input_text: string;
            input_fundo: string;
            liActive: string;
            button: string;
            button_border: string;
            subscript: string;
            like: string;
        }
    }
}