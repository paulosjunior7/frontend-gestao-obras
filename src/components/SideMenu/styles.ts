import styled , { css }  from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    position: fixed;
    width: 260px;
    height: 100%;
    background-color: #313a46;
    flex-direction: column;
`;

export const Logo = styled.div`
    display: flex;
    height: 70px;
    width: 260px;
    justify-content: center;
    align-items: center;
`

interface Props {
    size?: boolean;
}


export const MenuProfile = styled.div<Props>`
    display: flex;
    background-color: ${props => props.theme.colors.secundary};
    border: 1px solid ${props => props.theme.colors.primary};

    width: auto;
    height: auto;
    padding: 5px;
    border-radius: 4px;
    position: fixed;
    
    left:  6.2rem;
    transition: 0.5s;
    ${props => props.size && css`
        transition: 0.5s;
        left: 14.4rem;
    `};

    ul {
        list-style-type: none;
        padding: 0;
        li {
            line-height: 2.5rem;
            &:last-child {
                border: 0;
            }

            &:first-child {
               text-decoration: none;
            }
                color: ${props => props.theme.colors.background};
            a {
                text-decoration: none;
                &:first-child {
                    text-decoration: none;
                }
            }


            button {
                display: flex;
                flex: 1;
                height: auto;
                width: 195px;
                padding: 4px;
                border: 0;
                background-color: transparent;
                justify-content: center;
                align-items: center;
                color: ${props => props.theme.colors.background};
                &:hover {
                    background-color: #eaeaee;
                    border-radius: 4px;
                    cursor: pointer;
                    a {
                        color: #666;
                    }
                }
            }

        }
    }


    
`

export const Button = styled.div<Props>`
    display: flex;
    justify-content: center;
    padding: 5px;
    

    button {
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 38px;
        border: 0;
        background-color: ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.primary};
        border-radius: 4px;
        transform: scaleX(-1);
        float: right;
        transform: rotate(0deg);
        overflow: hidden;
        transition: all 0.3s ease-out;
        transform: ${props => (props.size ? `rotate(0deg); height: 32px` : 'rotate(180deg)')};
        &:hover {  
            background: ${props => shade(0.2, props.theme.colors.secundary)};
            border: 0;
        }    

        svg {
            color: #ccc;
            border: 0;
        }
    }
`


export const IconStyle = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;

        &:first-child {
    svg {
            /* margin-left: 1px; */
        }
    }
    
    a {
        /* margin-left: 2px; */
    }
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    ${props => !props.size && css`
        
        height: 3.5rem;    
    `}
    
`

export const IconSingleStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    height: 5.3rem;
    margin-right: 5px;

    svg {
        display: flex;
    }
   
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
`

export const Main = styled.div`
    nav {
        ul {
            display: flex;
            width: 100%;
            flex-direction: column;

            li {
                text-decoration: none;
                display: flex;
                justify-content: space-between;
                height: 4.35rem;

                svg {
                    margin-right: 12px;
                }

                a {
                    text-decoration: none;
                    color: #7b8999;
                    font-size: 1.5rem;
                    font-weight: 400;
                }

                &:hover {
                    a {
                        color: #dfe0e2;
                    }
                }
            }
        }
    }
`
