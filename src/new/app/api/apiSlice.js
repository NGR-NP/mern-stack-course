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

const baseUrls = [
  "https://mern-stack-course-production.up.railway.app/api",
  // "https://vrit-tech-mern-project-by-tejkarki.up.railway.app/api",
];

let currentBaseUrlIndex = 0;

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.data?.status === 403) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);

    if (refreshResult?.data) {
      const username = api.getState().auth.username;
      api.dispatch(setCredentials({ ...refreshResult.data, username }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
      api.dispatch(
        showToastMessage({ message: "session expired!", type: "error" })
      );
    }
  }

  if (result?.error?.data?.status === 503) {
    currentBaseUrlIndex = (currentBaseUrlIndex + 1) % baseUrls.length;
    const nextBaseUrl = baseUrls[currentBaseUrlIndex];
    console.log(`Switching to ${nextBaseUrl}`);

    const nextBaseQuery = fetchBaseQuery({
      baseUrl: nextBaseUrl,
      credentials: "include",
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    });

    result = await nextBaseQuery(args, api, extraOptions);

    if (result?.error?.data?.status === 503 && currentBaseUrlIndex === baseUrls.length - 1) {
      console.log(`Both URLs are down. Sending email to ngr112001@gmail.com`);


      currentBaseUrlIndex = 0; 
    }
  }

  return result;
};


export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
