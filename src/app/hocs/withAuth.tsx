'use client';
import { useAuth } from '@/providers/AppProvider';
import { useRouter, usePathname } from 'next/navigation';
import { ComponentType, useEffect } from 'react';
import { PAGE_ROUTES } from '../libs/pages-routes';

export function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>,
  excludePaths: string[] = []
): ComponentType<T> {
  const AuthHOC = (hocProps: T) => {
    const router = useRouter();
    const pathname = usePathname();

    const { token } = useAuth();

    useEffect(() => {
      const isExcluded = excludePaths.includes(pathname);

      if (!isExcluded && token === undefined) {
        return; // Handle token-loading state if necessary
      }

      if (!isExcluded && !token) {
        // Redirect to login page if no token
        router.replace(PAGE_ROUTES.LOGIN);
      } else if (isExcluded && token) {
        // Redirect authenticated users to their home page if on excluded path
        router.replace(PAGE_ROUTES.QUOTE_LIST);
      }
    }, [token, pathname, excludePaths]);

    // Avoid rendering the component until the redirection logic is clear
    if (token === undefined || (!token && !excludePaths.includes(pathname))) {
      return null; // Optionally, render a spinner or loader
    }

    return <Component {...hocProps} />;
  };

  return AuthHOC;
}
