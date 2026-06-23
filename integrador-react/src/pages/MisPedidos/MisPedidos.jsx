import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useOrders } from "../OrderSummary/hooks/useOrders";
import { useOrders  } from "../OrderSummary/hook/useOrders";
import { MisPedidosCard } from "./MisPedidosCard";
import { Container, Title, OrdersGrid, EmptyMessage } from "./MisPedidosStyles";

export const MisPedidos = () => {
  const { getOrders, isLoading } = useOrders();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    getOrders();
  }, []);

  if (isLoading) return <p style={{ color: "white", textAlign: "center", marginTop: "100px" }}>Cargando pedidos...</p>;

  return (
    <Container>
      <Title>Mis pedidos</Title>

      {orders.length === 0 ? (
        <EmptyMessage>Todavía no tenés pedidos realizados.</EmptyMessage>
      ) : (
        <OrdersGrid>
          {orders.map((order) => (
            <MisPedidosCard key={order._id} order={order} />
          ))}
        </OrdersGrid>
      )}
    </Container>
  );
};