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
import { BiMapAlt  , BiLayer  ,BiDetail , BiTask  ,  BiStats , BiBell , BiHelpCircle , BiShuffle, BiCar , BiRightArrowAlt } from 'react-icons/bi';

export const Menu = [
    {
        id: 1,
        name: 'Obras',
        path: '/obras',
        component: Obras,
        icon: BiTask,
        children: null,
       
    },
    {
        id: 2,
        name: 'Produtos',
        path: '/produtos',
        component: Produtos,
        icon: BiTask,
        children: null,
    },
    {
        id: 3,
        name: 'Contatos',
        path: '/contatos',
        component: Contatos,
        icon: BiTask,
        children: null,
    },
    {
        id: 4,
        name: 'Documentação',
        path: '/documentacao',
        component: Documentos,
        icon: BiTask,
        children: null,
    },
    {
        id: 5,
        name: 'Despesas',
        path: '/despesas', 
        component: Despesas,
        icon: BiTask,
        children: null,
    },
    {
        id: 6,
        name: 'Marcas',
        path: '/marcas',
        component: Marcas,
        icon: BiTask,
        children: null,
    },
    {
        id: 7,
        name: 'Fornecedores',
        path: '/fornecedores',
        component: Fornecedores,
        icon: BiTask,
        children: null,
    },
    {
        id: 8,
        name: 'Usuários',
        path: '/usuarios',
        component: Usuarios,
        icon: BiTask,
        children: null,
    },
    {
        id: 9,
        name: 'Empresas',
        path: '/empresas',
        component: Empresas,
        icon: BiTask,
        children: null,
    },
    {
        id: 10,
        name: 'Cargos',
        path: '/cargos',
        component: Cargos,
        icon: BiTask,
        children: null,
    },
    {
        id: 11,
        name: 'Funcionários',
        path: '/funcionarios',
        component : Funcionarios,
        icon: BiTask,
        children: null,
    },
    {
        id: 11,
        name: 'Terceirizados',
        path: '/terceirizados',
        component: Terceirizados,
        icon: BiTask,
        children: null,
    },
];