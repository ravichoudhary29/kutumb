'use client';

import { useState, FormEvent, useCallback } from 'react';
import { LOGIN_API_URL } from '@/app/utils/consts';
import { useLocalStorage } from './useLocalStorage';

export const useAuthInternal = () => {
  const [token, setToken, removeToken] = useLocalStorage('authToken');

  // Handle form submission with types
  const handleLogin = async ({
    username,
    otp,
  }: {
    username: string;
    otp: string;
  }) => {
    const response = await fetch(LOGIN_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, otp }),
    });

    if (!response.ok) {
      throw new Error('Login failed, please check your username and OTP.');
    }
    const res: { token: string } = await response.json();
    setToken(res.token);
  };

  return {
    handleLogin,
    token,
    handleLogout: removeToken,
  };
};

// Define the type for the return value of useAuthInternal
export type UseAuthReturnType = ReturnType<typeof useAuthInternal>;
