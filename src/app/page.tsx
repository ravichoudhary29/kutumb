"use client";

import { AppProvider, useAuth } from "@/app/providers/AppProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PAGE_ROUTES } from "./libs/pages-routes";
import { withAuth } from "./hocs/withAuth";

function Home() {
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    router.replace(PAGE_ROUTES.QUOTE_LIST);
  }, [token]);

  return null;
}

const HomeWrapper = withAuth(Home);

export default HomeWrapper;
