import { createContext, useState } from 'react';
import { registerRequest } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const signup = async user => {
		const res = await registerRequest(user);
		console.log(res.data);
		setUser(res.data);
	};
	return (
		<AuthContext.Provider value={{ signup, user }}>
			{children}
		</AuthContext.Provider>
	);
};
