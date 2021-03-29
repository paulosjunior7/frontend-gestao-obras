import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,
            background: string,
            text: string,
            select: string,
            border: string;
            textSideMenu: string;
        },
    }
}