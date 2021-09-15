import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const UsuarioContext = React.createContext();

export function UsuarioProvider(props) {

    const [usuario, setUsuario] = useState(null);

    const getUser = async () => {
        try {
            const res = await axios.get('http://localhost:4000/whoami', { withCredentials: true });
            if (!res.data.error) {
                setUsuario(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const value = useMemo(() => {
        return ({
            usuario,
        });
    }, [usuario]);

    return <UsuarioContext.Provider value={value} {...props} />
}

export function useUsuario() {
    const context = React.useContext(UsuarioContext);
    if (!context)
        throw new Error('useUsuario debe estar dentro del proveedor UsuarioContext');
    return context;
}