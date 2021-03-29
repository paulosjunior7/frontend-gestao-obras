import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: ${(props) => props.theme.colors.secundary};
  height: 3.6rem;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 16px; */
  transition: background-color 0.2s;
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.secundary};
  background: ${(props) => props.theme.colors.secundary};
`;
