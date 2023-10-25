import { createContext, useState, useContext } from 'react';
import { handleRegister } from '../pages/GestionUsuarios/Register/Register.js';

export const AuthContext = createContext();

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
	return (
		<AuthContext.Provider value={{ signup, user, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
