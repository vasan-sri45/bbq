"use client";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { api } from "../api/api";
import { setUser,clearUser } from "../store/features/auth.slice";

export const useEmployeeLogin = () => {
  const dispatch = useDispatch();
  const qc = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await api.post("/login", {
        email,
        password,
      });
      return res.data; // { user }
    },

    onSuccess: (data) => {
      const user = data?.user;
      if (!user) return;

      // ✅ SAME redux flow as OTP login
      dispatch(setUser(user));
      

      qc.invalidateQueries({ queryKey: ["me"] });

      // ✅ ROLE BASED REDIRECT
      if (user) {
        router.replace("/admin/dashboard");
      }
    },
  });
};


export const useGetMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await api.get("/me");
      return res.data; // { user }
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};


export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await api.post("/logout");
    },

    onSuccess: () => {

      // clear react-query cache
      queryClient.clear();

      // remove user from localStorage
      localStorage.removeItem("bc_user");

      // clear redux state
      dispatch(clearUser());

      // redirect
      router.replace("/");
    },
  });
};