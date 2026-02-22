import axios from 'axios';
import { toast } from 'sonner';

const URL_BASE= "https://nucbaz-api.vercel.app"


export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${URL_BASE}/auth/register`, {
            nombre,
            email,
            password,
        })
        return response;

    } catch (error) {
        toast.error(error.response.data.errors[0].msg)
}
}