import React from 'react';
import Table from '../../components/Table';
import { Container, Content, Title } from './styles';

const Marcas: React.FC = () => {

  const head = {
    area: "Área",
    nome: "Nome",
    telefone1: "Telefone",
    telefone2: "Telefone",
    email: "E-mail",
    ativo: "Ativo",
    createdAt: "Dt. Criação",
    updatedAt: "Dt. Edição"
  };

  const data = [{
    area: 'Administrativo',
    nome: 'Marca Exemplo',
    telefone1: '(62) 98271-2767',
    telefone2: '(62) 98271-2767',
    email: 'paulosjunior7@gmail.com',
    ativo: 'Ativo',
    createdAt: '29/03/2021',
    updatedAt: '29/03/2021'
  }];

  return (
    <Container>
      <Title>
        <a>Marcas</a>
      </Title>

      <Content>
        <div className="card border-0 rounded-4 shadow-sm" style={{ padding: '1.5rem' }}>
          <Table head={head} data={data}/>
          {/* <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> */}

          <div style={{ display: 'flex', justifyContent: 'space-between' , color: '#666'  }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
          </div>

      </Content>
    </Container>
  );
}

export default Marcas;