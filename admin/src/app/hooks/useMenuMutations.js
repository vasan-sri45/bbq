"use client";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { api } from "../api/api";


// ✅ CREATE PRODUCT (ADD MENU)
export const useAddMenu = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (productData) => {
      const res = await api.post("/product", productData);
      return res.data;
    },

    onSuccess: () => {
      // 🔥 refresh product list automatically
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
};


export const useGetProducts = (params = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const res = await api.get("/product", { params });
      return res.data;
    },
  });
};