import { createContext, useState, useContext, useEffect } from 'react';
import { handleRegister } from '../pages/GestionUsuarios/Register/Register.js';
import { handleLogin } from '../pages/GestionUsuarios/Login/Login.js';
import Cookies from 'js-cookie';
export const AuthContext = createContext();
import { verifyTokenRequest } from '../api/auth.js';
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth is out from provider');
	}
	return context;
};

//Este va a ser el usuario General que ingresa
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const signup = async user => {
		try {
			console.log('se ace en signup');
			const res = await handleRegister(user);
			console.log(res.data);
			setUser(res.data);
			setIsAuthenticated(true);
		} catch (error) {
			console.log(error);
		}
	};
	const signin = async user => {
		try {
			const res = await handleLogin(user.email, user.password);
			console.log(res.data);
			setUser(res.data);
			setIsAuthenticated(true);
		} catch (error) {
			console.log(error);
		}
	};
	const logout = () => {
		Cookies.remove('token');
		setIsAuthenticated(false);
		setUser(null);
	};

	useEffect(() => {
		async function checkLogin() {
			const cookies = Cookies.get();
			if (!cookies.token) {
				setIsAuthenticated(false);
				setLoading(false);
				setUser(null);
				return;
			}
			try {
				const response = await verifyTokenRequest(cookies.token);
				if (!response.data) {
					setIsAuthenticated(false);
					setLoading(false);
					return;
				}
				setIsAuthenticated(true);
				setUser(response.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setIsAuthenticated(false);
				setUser(null);
				setLoading(false);
			}
		}

		checkLogin();
	}, []);

	return (
		<AuthContext.Provider
			value={{ signup, user, isAuthenticated, signin, loading, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
