import baseApi from "../api";

interface Department{
    id:number,
    dept_name:string,
    createdAt:Date,
    deletedAt:Date,
    updatedAt:Date
}
export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDept: builder.query<Department[], void>({
      query: () => ({
        url: "/dept",
        method: "GET",
      }),
      providesTags: ["DEPARTMENT"],
    }),
    
   
  }),
});

export const { useGetDeptQuery} =departmentApi;
