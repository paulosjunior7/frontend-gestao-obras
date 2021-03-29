import React from 'react';
 import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = ({ children }) => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <div style={{
                display: "flex" ,
                width: "100vw" ,
                height: "100vh" ,
                flexDirection: "row" , 
                justifyContent: "center", 
                alignItems: "center", 
                cursor:"pointer", 
                alignSelf: "center", 
                alignContent: "center"
            }}>
                <h1>Carregando...</h1>
            </div>
        );
    }

    return signed ?   <AuthRoutes /> : <AppRoutes children={children} />;
}

export default Routes;