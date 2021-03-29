import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;  
    background-color: #ffff;
    border-bottom: 1px solid #eaeaea;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding-right: 12px;
    padding-top: 4px;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row-reverse;
    display: center;
    padding-right: 50px;
 
    img {
        height: 3.3rem;
        width: 3.3rem;
        border-radius: 50%;
        object-fit: cover;
    }


    div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: row;

        p {
            color: #666666;
            font-size: 1.5rem;
            margin-right: 10px;
        }

    }
`;
