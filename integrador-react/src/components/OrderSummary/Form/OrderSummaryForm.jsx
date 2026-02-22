import { FormContainer, Title, Input, OrderButton, ErrorMessageStyled, SuccessMessageStyled } from "./OrderSummaryFormStyled";
import { Field, Formik, Form } from "formik";
import { initialValues } from "./formik/initial-values";
import { validationSchema } from "./formik/validation-schema";
import { toast } from "sonner";
import { useOrders } from "../../../pages/OrderSummary/hook/useOrders";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slices/cartSlice";
// import { useEffect } from "react";

export const OrderSummaryForm = ({ cart, orderTotal, shipping }) => { 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { createOrder } = useOrders();  

    // useEffect(() => {
    //     getOrders();

    // }, [])

    return ( 
        <FormContainer> 
            <Title>Completá tus datos</Title> 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ async (values) => {
                    const orderData = {
                        items: cart,
                        price: orderTotal,
                        shippingCost: shipping,
                        total: orderTotal + shipping,
                        shippingDetails: {...values },
                
                    };

                    try {
                        await createOrder(orderData)
                        toast.success("¡Orden creada con éxito!");
                        dispatch(clearCart())
                        navigate("/Felicitaciones")   
                    } catch (error) {
                        console.log(error)
                    }

                    console.log("Pedido iniciado", orderData);
                    // const response = await createOrder(orderData);
                    // toast.success("¡Tu pedido fue iniciado con éxito!");
                }

                }
            >
                {({ handleChange, values, errors, touched }) => (
                    <Form > 
                        <div> 
                            <Input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                value={values.name}
                                onChange={handleChange}
                                error={errors.name && touched.name}
                            />
                            {errors.name && touched.name && 
                            (<ErrorMessageStyled>{errors.name}</ErrorMessageStyled>)}
                        </div> 
                
                        <div> 
                            <Input 
                                type="tel"
                                name="cellphone"
                                placeholder="Tu celular"
                                value={values.cellphone}
                                onChange={handleChange}
                                error={errors.cellphone && touched.cellphone}
                            />
                            {errors.cellphone && touched.cellphone && <ErrorMessageStyled>{errors.cellphone}</ErrorMessageStyled>}
                        </div> 

                        <div> 
                            <Input 
                                type="text"
                                name="address"
                                placeholder="Tu dirección"
                                value={values.address}
                                onChange={handleChange}
                                error={errors.address && touched.address}
                            />
                            {errors.address && touched.address && <ErrorMessageStyled>{errors.address}</ErrorMessageStyled>}
                        </div> 
                        
                        <div> 
                            <Input 
                                type="text"
                                name="location"
                                placeholder="Tu localidad"
                                value={values.location}
                                onChange={handleChange}
                                error={errors.location && touched.location}
                            />
                            {errors.location && touched.location && <ErrorMessageStyled>{errors.location}</ErrorMessageStyled>}
                        </div> 
                        <OrderButton type="submit" >INICIAR PEDIDO</OrderButton> 
                    </Form> 
                    )}
                    </Formik>
                </FormContainer> 
    ); 
};
