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
        console.log(error)
        // toast.error(error.response.data.msg)
        const msg = error.response?.data?.msg ||  
        error.response?.data?.errors?.[0]?.msg ||  
        "Error inesperado"; 
        toast.error(msg); 
        throw error; 
    }
}