import React from 'react';

import { Container } from './styles';
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md';

interface Props {
    head: any;
    data: any[];
}

const Table: React.FC<Props> = ({ head, data }) => {
    const colunas = Object.keys(head);
    const keys = Object.keys(data);
    return (
        <Container>
            <div>
                <button>
                    <MdAddCircle size={'1.5rem'} />
                 Nova Marca
                 </button>
            </div>

            <table className="table table-hover table-fixed" style={{ marginTop: '12px', marginBottom: '12px' }}>
                <thead>
                    <tr>
                        {colunas.map(p =>
                            <th key={p} scope="col">
                                {head[p]}
                            </th>
                        )
                        }
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody style={{ cursor: 'pointer' }}>
                    {data.map((record: any) =>
                        <Row record={record} />
                    )}
                </tbody>
            </table>
        </Container>
    );
}

export default Table;


interface RowProps {
    record: any;
}

const Row: React.FC<RowProps> = ({ record, ...rest }) => {

    const keys = Object.keys(record);

    return (
        <tr>
            {
                keys.map((key, index) =>
                    <td scope="row" key={index}>
                        {record[key]}
                    </td>
                )
            }
            <td scope="row">
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <MdModeEdit size={'1.8rem'} />
                    <MdDelete size={'1.8rem'} />
                </div>
            </td>
        </tr>

    )
}


{/* <tr key={record.id} onDoubleClick={() => edit(record)}>
{
    keys.map((key, index) =>
        <td key={key} className={index > 5 ? "ocultar" : ""}>
            {typeof record[key] === 'boolean' ? (
                record[key] ? <Ativo /> : <Inativo />
            ) : key === 'createdAt' ? (record[key] ? format(parseISO(record[key]), 'dd/MM/yyyy') : '') :
                key === 'updatedAt' ? (record[key] ? format(parseISO(record[key]), 'dd/MM/yyyy') : '') : record[key]}
        </td>
    )
}

<td>
    <Action>
        { info && <button onClick={() => { info(record) }}>
            <BiStats size={18} /> 
        </button>}
        <button onClick={() => { edit(record) }}>
            <FiEdit size={17} />
        </button>

        {remove && <button onClick={() => { remove(record) }}>
            <FiTrash size={17} />
        </button>}
    </Action>
</td>
</tr> */}