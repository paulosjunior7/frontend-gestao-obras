import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius : 4px;
    background-color: ${props => props.theme.colors.background};
    right: 0;
    margin-right: 38px;
    top: 170px;

    position: fixed;
    z-index: 9999;
    
    ul {
        padding: 12px;
        li {
           
            display: flex;
            list-style: none;
            margin-top: 3px;
            input {
                cursor: pointer;
            }

            label {
                margin-left: 5px;
                color: ${props => props.theme.colors.text};
            }
        }
    }
   
` 

export const Head = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.primary};
    height: 40px;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors.select};
    text-align: center;
    align-items: center;
    padding: 0 8px 0 8px;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    

    a {
        font-weight: 500;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.text};
    }
    svg {
        cursor: pointer;
        color: ${props => props.theme.colors.text};
    }
`


export const CloseModalButton = styled(FiX)`
    cursor: pointer;
    right: 20px;
    width: 23px;
    height: 23px;
    padding: 0;
    z-index: 10;
    color: #fff;
    margin-left: 3px;
`;