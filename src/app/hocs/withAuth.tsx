'use client';
import { useAuth } from '@/app/providers/AuthProvider';
import { useRouter, usePathname } from 'next/navigation';
import { ComponentType, useEffect } from 'react';
import { PAGE_ROUTES } from '@/app/libs/pages-routes';

export function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>,
): ComponentType<T> {
  const AuthHOC = (hocProps: T) => {
    const router = useRouter();
    const pathname = usePathname();

    const { token } = useAuth();

    useEffect(() => {
      if (!token) {
        router.replace(PAGE_ROUTES.LOGIN);
      }
    }, [token, pathname]);

    return <Component {...hocProps} />;
  };

  return AuthHOC;
}
