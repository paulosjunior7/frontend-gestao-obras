import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
    restType?: string;
}

export const Container = styled.div<ContainerProps>`
    margin-top: 25px;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    height: 4.0rem;
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    background-color: shade(0.1, ${props => props.theme.colors.primary} );
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;

    margin-right: 12px;


      label {
          margin-bottom : 62px;
          /* background: #FFF; */
          display: flex;  
          margin-left: -11px;
          position: absolute;
          font-size: 1.3rem;
      }

    & + div {
        /* margin-left: 8px; */
    }
    
     ${(props) => props.isErrored && css`
        border: 2px solid   #c53030;
    `}
    
    ${(props) => props.isFocused && css`
            /* border: 2px solid #3eadcf; */
    `} 

    ${(props) => props.isFilled && css`
        color: #3eadcf;
    `}

    input {
        width: 100%;
        border: 0px;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        outline: none !important;
        /* font-size: 1.3rem; */

        .inative {
          background: red;
        }

       //text-transform: lowercase;
        ${(props) => props.restType !== "email" && css`
          //text-transform: uppercase;
        `}

        &::placeholder {
            color: #666360; 
            outline: none !important;
        }
    }

    
    textarea {
        flex: 1;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
        outline: none !important;
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 4px;
        
        .inative {
          background: red;
        }

       //text-transform: lowercase;
        ${(props) => props.restType !== "email" && css`
          //text-transform: uppercase;
        `}

        &::placeholder {
            color: #666360; 
            outline: none !important;
        }
    }
    > svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #f4ede8;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;