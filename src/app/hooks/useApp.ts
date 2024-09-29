'use client';
import { useState, FormEvent } from 'react';
import { LOGIN_API_URL } from '../utils/consts';
import { useRouter } from 'next/navigation';
// Define the hook
export const useApp = () => {
    const [token, setToken] = useState<string | null>(null);
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [username, setUsername] = useState<null | string>(null);
    const [otp, setOtp] = useState<null | string>(null);
    const [error, setError] = useState<string>('');

    const router = useRouter();

    // Handle form submission with types
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Login API call
        try {
            const response = await fetch(LOGIN_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, otp }),
            });

            if (!response.ok) {
                throw new Error(
                    'Login failed, please check your username and OTP.'
                );
            }
            const token = await response.json();
            const jsonToken = JSON.stringify(token);
            localStorage.setItem('authToken', jsonToken);
            const savedToken = localStorage.getItem('authToken');
            if (savedToken) {
                setToken(savedToken);
            }
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handleLogout = async () => {
        localStorage.removeItem('authToken');
        setToken(null);
        router.push('/login');
    };

    return {
        isLogin,
        setIsLogin,
        handleSubmit,
        setUsername,
        setOtp,
        username,
        otp,
        error,
        token,
        handleLogout,
    };
};

// Define the type for the return value of useApp
export type UseAppReturnType = ReturnType<typeof useApp>;
