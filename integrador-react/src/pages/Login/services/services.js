import axios from "axios";
import { toast } from "sonner";

const URL_BASE= "https://nucbaz-api.vercel.app"

export const login= async ( email, password) => {
    try {
        const response= await axios.post(`${URL_BASE}/auth/login`, {
            email,
            password,
        })
        return response.data;

    }
    catch (error) {
        toast.error(error.response.data.msg)
    }
}