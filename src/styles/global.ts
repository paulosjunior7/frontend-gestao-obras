import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        height: 100vh;
        font: 62.5% inter, sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    body {
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
    }
    body  , input , button   {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
    }
    ul, li , table, tr, td, th , thead {
        color: ${props => props.theme.colors.text};
    }
    @media (max-width: 1440px) {
        html {
            font-size: 57.5% ;
        }
    }
    @media (max-width: 1205px) {
        html {
            font-size: 51.5% ;
        }
    }
    @media (max-width: 1024px) {
        html {
            font-size: 46.5% ;
        }
    }
    @media (max-width: 768px) {
        html {
            font-size: 41.5% ;
        }
    }
 
`;