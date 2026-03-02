import axios from "axios";

// const URL_BASE= "https://nucbaz-api.vercel.app";
// const URL_BASE= "/api"
const URL_BASE = import.meta.env.VITE_API_URL;




export const createOrderApi=  async (order, token) =>{
    try {
        const response = await axios.post(`${URL_BASE}/orders`, order, 
            {headers: {
                "x-token": token,
            },
        }
        );
        return response.data.data;
        
    } catch (error) {
        console.log("error al crear la orden", error);
        throw new Error("Error al crear la orden");  
    }
};

export const getOrdersApi= async (token) => {
    try {
        const response = await axios.get(`${URL_BASE}/orders`,{
            headers: {
                "x-token": token,
            },
        });
            return response.data.data;
        } catch (error) {
            console.log("Error al obtener las órdenes", error);
            // throw error;
            throw new Error("Error al obtener las órdenes");
        }
        }