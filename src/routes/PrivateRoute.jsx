import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    // login korar pore onno page a niye jaoar jonno
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email) {
        return children;
    }

    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRoute;