import styled from 'styled-components';

export const Container = styled.div`
    /* table {
        border-collapse: collapse;
        border-radius: 8px;
        thead {
        
            overflow: hidden;
            background-color: #eaeaea;
            border-radius: 8px;
            tr {
                th {
                    width: auto;
                    color: #333;
                    height: 30px;
                    font-size: 1.4rem;
                    padding: 8px;
                }
            }
        }

        tbody {
            tr {
                td {
                    border-bottom: 1px solid #eaeaea;
                    height: 30px;
                    padding: 8px;
                    font-size: 1.4rem;
                }
            }
        }
    } */

    
    
    div {
        display: flex;
        button {
            justify-content: space-evenly;
            display: flex;
            align-items: center;
            height: 3.5rem;
            width: 13.2rem;
            border-radius: 4px;
            background-color: #fa5c7c;
            border: 0;
            
            font-size: 1.5rem;
            color: #fff;
            box-shadow: 0 0 2px 0 #fa5c7c;

            &:hover {
                background-color: #d64562;
            }
        }
    }
`;

// <table>
// <thead>
//     <tr>
//         <th>
            
//         </th>
//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <td>

//         </td>
//     </tr>
// </tbody>
// </table>