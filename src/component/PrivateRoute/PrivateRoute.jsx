import { Navigate, Outlet } from "react-router";
import { useGetUserQuery } from "../../redux/Api/AuthApi";

const PrivateRoute = () => {
    const { data: user, isLoading } = useGetUserQuery();
    const isAuthenticated = user?.data?.email;

    if (isLoading) return null; 

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
