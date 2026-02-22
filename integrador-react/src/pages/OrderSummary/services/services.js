import axios from "axios";

// const URL_BASE= "https://nucbaz-api.vercel.app"
const URL_BASE= "/api"


export const createOrderApi=  async (order, token) =>{
    try {
        const response = await axios.post(`${URL_BASE}/orders`, order, 
            {headers: {
                "x-token": token,
            },
        }
        );
        console.log("Respuesta de la API al crear orden: ", response.data);
        return response.data;
        
    } catch (error) {
        console.log(error);
        throw error;
        
    }
};

export const getOrdersApi= async (token) => {
    try {
        const response = await axios.get(`${URL_BASE}/orders`,{
            headers: {
                "x-token": token,
            }
        });
            return response.data;
        } catch (error) {
            console.log("Error al obtener las órdenes", error);
            throw error;
        }
        }