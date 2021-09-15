import axios from 'axios';

const API = `http://localhost:4000`;

export const createUser = async (user) => {
    return await axios.post(`${API}/signup`, user, { withCredentials: true });
}

export const login = async (data) => {
    return await axios.post(`${API}/signin`, data, { withCredentials: true });
}

export const logout = async () => {
    return await axios.get(`${API}/logout`, { withCredentials: true });
}