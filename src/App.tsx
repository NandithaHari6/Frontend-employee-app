import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navigate } from "react-router-dom";

import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/login";
import Layout from "./components/layout/Layout";
import CreateEmp from "./pages/create-employee/CreateEmp";
import EmpDetails from "./pages/empDetails/EmpDetails";
import AllEmpDetails from "./pages/allEmpDetails/AllEmpDetails";
import EditEmployee from "./pages/editEmp/editEmployee";
import { Provider } from "react-redux";
import store from "./store/store";
import UncontrolledLogin from "./pages/login/UncontrolledLogin";
// import Layout from "./components/Layout/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="./login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/employee",
      element: <Layout />,
      children: [
        { index: true, element: <CreateEmp /> },
        { path: "viewAll", element: <AllEmpDetails /> },
        { path: "editEmployee/:id", element: <EditEmployee /> },

        { path: ":id", element: <EmpDetails /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
    <Provider store={store}>

    
      <RouterProvider router={router} />
</Provider>
      {/* <Login /> */}
      {/* <CreateEmp /> */}
      {/* <Counter /> */}
      {/* <UncontrolledLogin /> */}
    </>
  );
}

export default App;
