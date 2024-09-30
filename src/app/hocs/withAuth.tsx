'use client';
import { useAuth } from '@/app/providers/AuthProvider';
import { useRouter, usePathname } from 'next/navigation';
import { ComponentType, useEffect } from 'react';
import { PAGE_ROUTES } from '@/app/libs/pages-routes';
import { Header } from '@/app/components/header';

export function withAuth<T>(Component: ComponentType<T>): ComponentType<T> {
  const AuthHOC = (hocProps: T) => {
    const router = useRouter();
    const pathname = usePathname();

    const { token } = useAuth();

    useEffect(() => {
      if (!token) {
        router.replace(PAGE_ROUTES.LOGIN);
      }
    }, [token, pathname, router]);

    return (
      <section>
        <Header />
        <Component {...hocProps} />
      </section>
    );
  };

  return AuthHOC;
}
