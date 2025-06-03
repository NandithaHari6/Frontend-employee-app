import baseApi from "../api";
import type Employee from "../../../entities/employee";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmp: builder.query<Employee[], void>({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    getOneEmp: builder.query<Employee, number>({
      query: (id:Number) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    create: builder.mutation<Employee, Employee>({
      query: (payload) => ({
        url: "/employee/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    update: builder.mutation<void, Employee>({
      query: ({id,...payload}) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
        delete: builder.mutation<void, number>({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
        
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
  }),
});

export const { useGetEmpQuery, useCreateMutation,useGetOneEmpQuery ,useDeleteMutation,useUpdateMutation} = employeeApi;
