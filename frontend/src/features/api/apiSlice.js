// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// //Get the user from storage
// const user = JSON.parse(localStorage.getItem("user"));

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/api",
//     headers: { Authorization: `Bearer ${user.token}` },
//   }),
//   endpoints: (builder) => ({
//     getQuestions: builder.query({
//       query: () => ({ url: "/questions", method: "get" }),
//     }),
//   }),
// });

// export const { useGetQuestionsQuery } = apiSlice;
