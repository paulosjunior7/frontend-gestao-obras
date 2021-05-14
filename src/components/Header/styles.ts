import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;  
    background-color: #ffffff;
    box-shadow: 0 0 35px 0 rgb(154 161 171 / 15%);
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    padding-right: 12px;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        
        input {
            border-radius: 4px;
            height: 38px;
            background-color: #f1f3fa;
            border: 0;
            width: 240px;
            padding-left: 12px;
            font-size: 1.6rem;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    display: center;
    background-color: #f9fafd;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 1px solid #f1f3fa;
    border-right: 1px solid #f1f3fa;
    margin-right: 20px;
    height: 100%;
 
    img {
        height: 3.2rem;
        width: 3.2rem;
        border-radius: 50%;
        object-fit: cover;
    }

    span {
            padding: 12px;
        p {
            color: #a0a8b8;
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 21.6px;
            letter-spacing: normal;
            white-space: nowrap;
            word-spacing: 0px;
            margin: 0;

            &:last-child {
                font-size: 1.22rem;
            }

            cursor: pointer;
        }
    }

`;

export const Menu = styled.div`
    display: flex;
    width: 65px;
    height: 100%;
    justify-content: center;
    align-items: center;
    
    svg {
        color: #a0a8b8;
        cursor: pointer;
    }
`

