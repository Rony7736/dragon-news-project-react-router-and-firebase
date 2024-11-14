import {createBrowserRouter, Navigate} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: "",
            element: <Navigate to={"/category/01"}></Navigate>,
        },
        {
            path: "/category/:id",
            element: <h2>This is category</h2>,
        },
      ],
    },
    {
        path: "/news",
        element: <div>News Layout</div>,
    },
    {
        path: "auth",
        element: <div>Login</div>,
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
  ]);

  export default router