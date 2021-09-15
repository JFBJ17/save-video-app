import axios from 'axios';

const API = 'http://localhost:4000';

export const addLink = async (link) => {
    return await axios.post(`${API}/api/v0/links/add`, link, { withCredentials: true });
}

export const getLinks = async () => {
    return await axios.get(`${API}/api/v0/links/`, { withCredentials: true });
}

export const deleteLink = async (id) => {
    return await axios.delete(`${API}/api/v0/links/delete/${id}`, { withCredentials: true });
}

export const getLink = async (id) => {
    return await axios.get(`${API}/api/v0/links/edit/${id}`, { withCredentials: true });
}

export const updateLink = async (id, link) => {
    return await axios.put(`${API}/api/v0/links/edit/${id}`, link, { withCredentials: true });
}