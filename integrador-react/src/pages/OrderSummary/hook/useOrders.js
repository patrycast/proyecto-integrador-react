import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createOrderApi, getOrdersApi } from "../services/services";
import { createOrderFail, getOrdersFail } from "../../../redux/slices/ordersSlice";


export const useOrders = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useSelector((state) => state.user);

// obtener ordenes
    const getOrders = async () => {
        setIsLoading(true);
        try {
            const orders= await getOrdersApi(user.token);
            console.log("TOKEN:", user?.token)
            console.log("orders ", orders)
            return orders;
        } catch (error) {
            console.log(error)
            dispatch(getOrdersFail("Error al obtener las ordenes: "))
        } finally {
            setIsLoading(false);
        }
    };


    //crear ordenes
    const createOrder= async (orderData) => {
        setIsLoading(true);
        try {
            const response= await createOrderApi(orderData, user.token)
            await getOrders();
            console.log("Orden creada " ,response)
            return response;
            
        } catch (error) {
            console.log(error)
            dispatch(createOrderFail("Error al crear la orden"))
        } finally {
            setIsLoading(false);
        }
    };

  return {
    isLoading,
    createOrder,
    getOrders,
  }
};
