'use client';
import { UseAppReturnType, useApp } from '@/app/hooks/useApp';
import { createContext, useContext, ReactNode } from 'react';

// Create the context with an empty placeholder
const initialContext: UseAppReturnType = {
    token: null,
    handleSubmit: async () => { },
    handleLogout: () => { }
};

// Create the context
export const AppContext = createContext<UseAppReturnType>(initialContext);

// Custom hook to use the context
export const useAuth = () => useContext(AppContext);

// AppProvider to wrap the application
export const AppProvider = ({ children }: { children: ReactNode; }) => {
    const value = useApp(); // Get all state and functions from useApp hook

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
