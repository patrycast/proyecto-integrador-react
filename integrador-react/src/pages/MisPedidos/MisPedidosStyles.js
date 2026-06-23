import styled from "styled-components";

/* ---------- Contenedor general de la página ---------- */

export const Container = styled.div`
  padding: 2rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #f0c9d1;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const OrdersGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EmptyMessage = styled.p`
  color: #b08e96;
  text-align: center;
  margin-top: 60px;
`;

/* ---------- Card de cada pedido ---------- */

export const Card = styled.div`
  background: #2a1015;
  border: 1px solid #4a1b22;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #4a1b22;
  padding-bottom: 10px;
`;

export const OrderId = styled.p`
  margin: 0;
  font-weight: 500;
  color: #f0c9d1;
  font-size: 15px;
`;

export const OrderDate = styled.span`
  color: #b08e96;
  font-size: 13px;
`;

/* ---------- Lista de items dentro de la card ---------- */

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const OrderItemImg = styled.img`
  /* width: 48px;
  height: 48px; */
   width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const OrderItemInfo = styled.div`
  flex: 1;
  min-width: 0;

  p {
    margin: 0;
    color: white;
    font-size: 14px;
    font-weight: 500;
  }

  span {
    color: #b08e96;
    font-size: 12px;
  }
`;

export const OrderItemQty = styled.span`
  color: #b08e96;
  font-size: 13px;
`;

export const OrderItemPrice = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
  min-width: 70px;
  text-align: right;
`;

/* ---------- Datos de envío ---------- */

export const ShippingInfo = styled.div`
  background: #1a0a0d;
  border-radius: 8px;
  padding: 10px 12px;

  p {
    margin: 0 0 4px;
    color: #d8a9b1;
    font-size: 13px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: white;
  }
`;

/* ---------- Totales ---------- */

export const TotalsBox = styled.div`
  border-top: 1px solid #4a1b22;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ $bold }) => ($bold ? "16px" : "13px")};
  font-weight: ${({ $bold }) => ($bold ? "600" : "400")};
  color: ${({ $bold }) => ($bold ? "white" : "#b08e96")};
`;