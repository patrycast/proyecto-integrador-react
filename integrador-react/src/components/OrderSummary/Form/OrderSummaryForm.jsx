import { FormContainer, Title, Input, OrderButton, ErrorMessageStyled, SuccessMessageStyled } from "./OrderSummaryFormStyled";
import { Field, Formik, Form } from "formik";
import { initialValues } from "./formik/initial-values";
import { validationSchema } from "./formik/validation-schema";
import { toast } from "sonner";

export const OrderSummaryForm = ({ cart, orderTotal, shipping }) => { 
      
    return ( 
        <FormContainer> 
            <Title>Completá tus datos</Title> 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const dataForOrderSummary = {
                        name: values.name,
                        phone: values.phone,
                        address: values.address,
                        location: values.location,
                        cart: cart,
                        orderTotal: orderTotal,
                        shipping: shipping,
                    };
                    console.log("Pedido iniciado", dataForOrderSummary);
                    toast.success("¡Tu pedido fue iniciado con éxito!");
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
                                name="phone"
                                placeholder="Tu celular"
                                value={values.phone}
                                onChange={handleChange}
                                error={errors.phone && touched.phone}
                            />
                            {errors.phone && touched.phone && <ErrorMessageStyled>{errors.phone}</ErrorMessageStyled>}
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
