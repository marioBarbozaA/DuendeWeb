import { useAuth } from './Context/AuthContext.js';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
	const { loading, user, isAuthenticated } = useAuth();
	if (loading) return <h1>Loading...</h1>;
	if (!loading && !isAuthenticated) return <Navigate to='/login' replace />;

	return <Outlet />;
}
export default ProtectedRoute;
