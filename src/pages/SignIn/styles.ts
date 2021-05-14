import styled from 'styled-components';
import { Form } from '@unform/web';
import { darken,  shade } from 'polished';

export const Formulario = styled(Form)`
    width: 100%;

    div {
        display: flex;
        width: 100%;

        h3 {
            align-self: center;
        }
    }

    span {
        margin-top: 1.2rem;
        display: flex;
        width: 100%;
        justify-content: flex-start;

        a {
            font-size: 1.2rem;
            text-decoration: none;
            font-weight: bold;
            color: ${props => props.theme.colors.text};
        }
    }

    button {
        background-color: #3eadcf;
    }
`;


export const Container = styled.div`
   // background: linear-gradient( #3eadcf, #abe9cd);
   background-color:  '#FAFAFA';
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 40rem;
    border-radius: 8px;
    padding: 10px;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    padding: 1.5rem;
`

export const Body = styled.div`
    height: 70%;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 1.3rem;
    padding-right: 1.3rem;

    h2 {
        font-weight: 800;
        font-size: 4.5rem;

    }
`

export const Footer = styled.div`
    width: 100%;
    padding: 15px;

    p {
        font-size: 1.3rem;
        &:hover {
            cursor: pointer;
            font-weight: bold;
        }
    }
`