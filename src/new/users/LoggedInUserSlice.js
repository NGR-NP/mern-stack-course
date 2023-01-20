import { apiSlice } from "../app/api/apiSlice";

export const LoggedInUserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/me/${id}`,
      keepUnusedDataFor: 5,
    }),
  }),
});
export const { useGetLoggedInUserQuery } = LoggedInUserSlice;
