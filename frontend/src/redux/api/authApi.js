import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import server from "../../environment.js";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/users`,
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ name, username, password }) => ({
        url: "/register",
        method: "POST",
        body: { name, username, password },
      }),
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: { username, password },
      }),
    }),
    getUserHistory: builder.query({
      query: (token) => ({
        url: "/get_all_activity",
        params: { token },
      }),
    }),
    addToHistory: builder.mutation({
      query: ({ token, meeting_code }) => ({
        url: "/add_to_activity",
        method: "POST",
        body: { token, meeting_code },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserHistoryQuery,
  useAddToHistoryMutation,
} = authApi;
