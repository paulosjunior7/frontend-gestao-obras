import React, { createContext, useState, useEffect, useContext, Dispatch } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

import { Usuario, UsuarioReturn } from '../models/usuario';

interface AuthContextData {
    signed: boolean;
    user: User | null;
    setUser: Dispatch<User>
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
    color: any;
    setColor: Dispatch<any>;
}


export interface User {
    usuario: Usuario;
    token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState<any>();

    useEffect(() => {

        function loadStoragedData() {
            const user = localStorage.getItem('@RNAuth:user');
            const storeagedToken = localStorage.getItem('@RNAuth:token');

            if (user && storeagedToken) {
                api.defaults.headers.Authorization = `Bearer ${storeagedToken}`;

                setUser({
                    usuario: JSON.parse(user),
                    token: JSON.stringify(storeagedToken)
                });
                setLoading(false);
            }
        }
        loadStoragedData();
    }, []);

    async function signIn(email: string, senha: string) {
        try {
            setLoading(true);


            const response = await api.post<User>("sessao", {
                senha,
                email
            });

            if (response.data) {
                setUser(response.data);
            }

            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

            await localStorage.setItem('@RNAuth:user', JSON.stringify(response.data.usuario));
            await localStorage.setItem('@RNAuth:token', response.data.token);
            setLoading(false);

        } catch (err) {
            setLoading(false);
            const res = err.response ? err.response.data.erros[0] : 'Falha ao gravar! Verifique as informações';
            toast.error(`${res}`, { autoClose: 3000 });

        }
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut, color, setColor, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
};