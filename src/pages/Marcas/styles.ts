import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    padding: 12px;
`

export const Title = styled.div`
    display: flex;
    height: 7rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;

        padding-left: 40px;
        padding-right: 40px;
    a {
        font-size: 1.8rem;
        font-weight: 700;
        color: #7e757d;
    }


`
