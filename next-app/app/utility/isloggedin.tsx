"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import usePopupStore from "@/app/store/popupsatom"; // your popup store

export function useCheckAuth() {
  const { status } = useSession();
  const { setSignInpopup } = usePopupStore();
  // Replace with your actual method name from store

  useEffect(() => {
    if (status === "unauthenticated") {
      setSignInpopup(true);
    }
  }, [status, setSignInpopup]);

  return;
}
