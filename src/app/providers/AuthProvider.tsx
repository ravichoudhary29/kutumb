'use client';

import { UseAuthReturnType, useAuthInternal } from '@/app/hooks/useAuthInternal';
import { createContext, useContext, ReactNode } from 'react';

const initialContext: UseAuthReturnType = {
    token: null,
    handleLogin: async () => { },
    handleLogout: () => { }
};

// Create the context
export const AuthContext = createContext<UseAuthReturnType>(initialContext);

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// AuthProvider to wrap the application
export const AuthProvider = ({ children }: { children: ReactNode; }) => {
    const value = useAuthInternal();

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
