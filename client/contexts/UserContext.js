import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const UserContext = createContext();

// Hook personalizado para acessar o contexto
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext deve ser usado dentro de um UserProvider.');
    }
    return context;
};

// Provedor do contexto
export const UserProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [estado, setEstado] = useState('')

    return (
        <UserContext.Provider
        value={{
             name,
             setName,
             estado,
             setEstado
             }}>
            {children}
        </UserContext.Provider>
    );
};
