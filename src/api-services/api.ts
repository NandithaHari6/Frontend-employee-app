import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
  	baseUrl: "http://localhost:4000",
    prepareHeaders: (headers) => {
    	// Retrieve the token from the state (assuming it's stored in the auth slice)
    	const token = localStorage.getItem("token");

    	console.log("token", token);
    	// If a token exists, add it to the headers
    	if (token) {
      		headers.set("Authorization", `Bearer ${token}`);
    	}

    	return headers;
  	},
  }),
  tagTypes: ['EMPLOYEES', 'EMPLOYEE_DETAILS','DEPARTMENT'],
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

export default baseApi;
