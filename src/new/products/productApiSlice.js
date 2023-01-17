import { apiSlice } from "../app/api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      keepUnusedDataFor: 5,
    }),
  }),
});
export const { useGetProductsQuery } = productApiSlice;
