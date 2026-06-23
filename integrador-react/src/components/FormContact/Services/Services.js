import axios from "axios";

const URL_BASE = import.meta.env.VITE_API_URL;



export const sendContactApi = async (formData) => {
    try {
        const response = await axios.post(`${URL_BASE}/contact`, formData);
        return response.data;
    } catch (error) {
        
        console.error("Error al enviar el mensaje:", error);
        throw new Error("Error al enviar el mensaje");
    }
};