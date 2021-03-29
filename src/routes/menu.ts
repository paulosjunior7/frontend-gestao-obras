import Cargos from "../pages/Cargos";
import Contatos from "../pages/Contatos";
import Despesas from "../pages/Despesas";
import Documentos from "../pages/Documentos";
import Empresas from "../pages/Empresas";
import Fornecedores from "../pages/Fornecedores";
import Funcionarios from "../pages/Funcionarios";
import Marcas from "../pages/Marcas";
import Obras from "../pages/Obras";
import Produtos from "../pages/Produtos";
import Terceirizados from "../pages/Terceirizados";
import Usuarios from "../pages/Usuarios";


export const Menu = [
    {
        id: 1,
        name: 'Obras',
        path: '/obras',
        component: Obras
       
    },
    {
        id: 2,
        name: 'Produtos',
        path: '/produtos',
        component: Produtos
    },
    {
        id: 3,
        name: 'Contatos',
        path: '/contatos',
        component: Contatos
    },
    {
        id: 4,
        name: 'Documentação',
        path: '/documentacao',
        component: Documentos
    },
    {
        id: 5,
        name: 'Despesas',
        path: '/despesas', 
        component: Despesas
    },
    {
        id: 6,
        name: 'Marcas',
        path: '/marcas',
        component: Marcas
    },
    {
        id: 7,
        name: 'Fornecedores',
        path: '/fornecedores',
        component: Fornecedores
    },
    {
        id: 8,
        name: 'Usuários',
        path: '/usuarios',
        component: Usuarios
    },
    {
        id: 9,
        name: 'Empresas',
        path: '/empresas',
        component: Empresas
    },
    {
        id: 10,
        name: 'Cargos',
        path: '/cargos',
        component: Cargos
    },
    {
        id: 11,
        name: 'Funcionários',
        path: '/funcionarios',
        component : Funcionarios
    },
    {
        id: 11,
        name: 'Terceirizados',
        path: '/terceirizados',
        component: Terceirizados
    },
];