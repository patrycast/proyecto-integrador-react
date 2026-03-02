import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createOrderApi, getOrdersApi } from "../services/services";
import { createOrderFail, getOrdersFail, getOrderSuccess  } from "../../../redux/slices/ordersSlice";


export const useOrders = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useSelector((state) => state.user);

// obtener ordenes
    const getOrders = async () => {
        setIsLoading(true);
        try {
            const orders= await getOrdersApi(user.token);
            console.log("las ordenes",orders)
            dispatch(getOrderSuccess(orders));
            // return orders;
        } catch (error) {
            // console.log(error)
            dispatch(getOrdersFail("Error al obtener las ordenes: " + error.message))
        } finally {
            setIsLoading(false);
        }
    };


    //crear ordenes

//     const createOrder= async (orderData) => { 
//     setIsLoading(true);

//     try {
//         // Simulación 
//         const fakeResponse = {
//             _id: Date.now(),
//             ...orderData,
//             createdAt: new Date().toISOString()
//         };

//         dispatch(createOrderSuccess(fakeResponse));

//         return fakeResponse;

//     } catch (error) {
//         dispatch(createOrderFail("Error al crear la orden"))
//         throw error;
//     } finally {
//         setIsLoading(false);
//     }
// };

    const createOrder= async (orderData) => { 
        setIsLoading(true);
        try {
            const response= await createOrderApi(orderData, user.token)
            await getOrders();
            return response;
            
        } catch (error) {
            dispatch(createOrderFail("Error al crear la orden", error))
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
