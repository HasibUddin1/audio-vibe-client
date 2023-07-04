import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext)

    if (user) {
        return children
    }

    if (isLoading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <Navigate to='/login' replace>

        </Navigate>
    );
};

export default PrivateRoute;