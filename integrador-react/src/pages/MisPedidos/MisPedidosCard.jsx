import { Card, OrderHeader,  OrderId,  OrderDate,  ItemsList,  OrderItem,  OrderItemInfo,  OrderItemImg,  OrderItemQty,  OrderItemPrice, 
  ShippingInfo,  TotalsBox,  TotalRow } from "./MisPedidosStyles";

export const MisPedidosCard = ({ order }) => {
  const fecha = new Date(order.createdAt).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Card>
      <OrderHeader>
        <OrderId>Pedido #{order._id.slice(-6)}</OrderId>
        <OrderDate>{fecha}</OrderDate>
      </OrderHeader>

      <ItemsList>
        {order.items.map((item) => (
          <OrderItem key={item._id}>
            <OrderItemImg src={item.img} alt={item.title} />
            <OrderItemInfo>
              <p>{item.title}</p>
              <span>{item.desc}</span>
            </OrderItemInfo>
            <OrderItemQty>x{item.qty}</OrderItemQty>
            <OrderItemPrice>${(item.price * item.qty).toLocaleString("es-AR")}</OrderItemPrice>
          </OrderItem>
        ))}
      </ItemsList>

      <ShippingInfo>
        <p><strong>Envío a:</strong> {order.shippingDetails.address}, {order.shippingDetails.location}</p>
        <p><strong>Contacto:</strong> {order.shippingDetails.name} · {order.shippingDetails.cellphone}</p>
      </ShippingInfo>

      <TotalsBox>
        <TotalRow>
          <span>Subtotal</span>
          <span>${order.subtotal.toLocaleString("es-AR")}</span>
        </TotalRow>
        <TotalRow>
          <span>Envío</span>
          <span>${order.shippingCost.toLocaleString("es-AR")}</span>
        </TotalRow>
        <TotalRow $bold>
          <span>Total</span>
          <span>${order.total.toLocaleString("es-AR")}</span>
        </TotalRow>
      </TotalsBox>
    </Card>
  );
};