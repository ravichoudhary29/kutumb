"use client";

import { useAuth } from "@/app/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PAGE_ROUTES } from "./libs/pages-routes";
import { withAuth } from "@/app/hocs/withAuth";

const Home: React.FC = () => {
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    router.replace(PAGE_ROUTES.QUOTE_LIST);
  }, [token, router]);

  return null;
};

const HomeWrapper = withAuth(Home);

export default HomeWrapper;
