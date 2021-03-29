export interface UsuarioReturn {
    itens?: Usuario[];
    count?: number;
    home?: string;
    next?: string;
    last?: string;
  }

export interface Usuario {
    id: number,
    nome: string,
    email: string,
    senha?: string,
    confirma_senha?: string;
    senha_antiga?: string;
    tipo: string;
    foto_id?: number;
    foto?: string ;
    contratante_id: number;
    transportadora_id: number;
    ativo: boolean
  }
