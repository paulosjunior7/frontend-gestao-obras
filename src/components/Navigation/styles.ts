import styled from 'styled-components';

export const Container = styled.div`   
    width: 100%;
    display: flex;

    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        padding-left: 50px;

        .selected {
            font-weight: bold;
        }


        li {
            width: auto;
            margin-right: 8px;
            cursor: pointer;
            color: #ffffff;
            margin-bottom: 3px;
            font-size: 1.5rem;
        }
    }
`;
