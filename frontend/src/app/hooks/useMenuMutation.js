"use client";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { api } from "../api/api";


export const useGetProducts = (params = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const res = await api.get("/product", { params });
      return res.data;
    },
  });
};