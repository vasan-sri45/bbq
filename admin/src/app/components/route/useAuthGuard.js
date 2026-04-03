
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useGetMe } from "../../hooks/useAuthMutations";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../../store/features/auth.slice";

export function useAuthGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetMe();

  useEffect(() => {
    if (isLoading) return;

    // ❌ NOT LOGGED IN
    if (isError || !data?.user) {
      dispatch(clearUser());
      if (pathname !== "/") router.replace("/");
      return;
    }

    // ✅ SYNC REDUX WITH SERVER
    dispatch(setUser(data.user));

    const role = data.user.role;

    if(data){
      router.replace("/admin/dashboard")
    }

  }, [data, isLoading, isError]);

  return { loading: isLoading, user: data?.user };
}