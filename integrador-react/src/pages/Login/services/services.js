import axios from "axios";
import { toast } from "sonner";

// const URL_BASE= "https://nucbaz-api.vercel.app"
const URL_BASE= import.meta.env.VITE_API_URL

export const LoginUser= async ( email, password) => {
    try {
        const response= await axios.post(`${URL_BASE}/auth/login`, {
            email,
            password,
        })
        return response.data;

    }
    catch (error) {
        console.log(error)
        toast.error(error.response.data.msg)
    }
}