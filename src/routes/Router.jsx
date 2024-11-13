import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
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