import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../../auth/authSlice";
import { showToastMessage } from "../../custonToast/toastSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "https://mern-stack-course-production.up.railway.app/api",

// //   baseUrl: "https://vrit-tech-mern-project-by-tejkarki.up.railway.app/api",

//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });
// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.data?.status === 403) {
//     console.log("sending refresh token");
//     const refreshResult = await baseQuery("/refresh", api, extraOptions);

//     if (refreshResult?.data) {
//       const username = api.getState().auth.username;
//       api.dispatch(setCredentials({ ...refreshResult.data, username }));
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//       api.dispatch(
//         showToastMessage({ message: "session expired!", type: "error" })
//       );
//     }
//   }

//   return result;
// };
const tryBaseUrls = async (baseUrls, options) => {
  for (const baseUrl of baseUrls) {
    try {
      const result = await fetchBaseQuery({
        ...options,
        baseUrl,
      })("/");

      if (result?.status === 200) {
        return baseUrl;
      }
    } catch (e) {
      console.log(`Failed to fetch from ${baseUrl}`, e);
    }
  }
  return null;
};

const baseUrl = await tryBaseUrls(
  ["https://mern-stack-course-production.up.railway.app/api", "https://vrit-tech-mern-project-by-tejkarki.up.railway.app/api"],
  {
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }
);

if (baseUrl) {
  const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await fetchBaseQuery({
      ...extraOptions,
      baseUrl,
    })(args, api);

    if (result?.error?.data?.status === 403) {
      console.log("sending refresh token");
      const refreshResult = await fetchBaseQuery({
        ...extraOptions,
        baseUrl,
      })("/refresh", api);

      if (refreshResult?.data) {
        const username = api.getState().auth.username;
        api.dispatch(setCredentials({ ...refreshResult.data, username }));
        result = await fetchBaseQuery({
          ...extraOptions,
          baseUrl,
        })(args, api);
      } else {
        api.dispatch(logOut());
        api.dispatch(
          showToastMessage({
            message: "session expired!",
            type: "error",
          })
        );
      }
    }

    return result;
  };
}



export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
