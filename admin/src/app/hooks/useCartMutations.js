"use client";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { api } from "../api/api";


export const useGetCarts = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await api.get("/cart");
      return res.data;
    },
  });
};