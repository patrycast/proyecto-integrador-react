import axios from 'axios';
import { toast } from 'sonner';

const URL_BASE= import.meta.env.VITE_API_URL


export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${URL_BASE}/auth/register`, {
            name: nombre,
            email,
            password,
        })
        return response;

    } catch (error) {
        toast.error(error.response?.data?.errors?.[0]?.msg || "Error al registrar");
        return null;
}
}