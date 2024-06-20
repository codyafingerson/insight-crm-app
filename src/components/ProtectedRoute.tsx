import { Navigate, Outlet } from 'react-router-dom';
// import Spinner from './Spinner';
import useAuthStatus  from '../hooks/useAuthStatus';

interface ProtectedRouteProps {
    isAdminOnlyRoute?: boolean;
}

export default function ProtectedRoute({ isAdminOnlyRoute }: ProtectedRouteProps) {
    const { isAuthenticated, checkingAuth, isAdmin } = useAuthStatus();

    if (checkingAuth) {
        // return <Spinner />;
        return <h1>Loading...</h1>
    }

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (isAdminOnlyRoute && !isAdmin) {
        return <Navigate to="*" />;
    }

    return <Outlet />;
}