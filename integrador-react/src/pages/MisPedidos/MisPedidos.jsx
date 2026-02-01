import { useNavigate } from "react-router-dom";



export const MisPedidos = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1>Mis Pedidos</h1>
        <p>pedido n 1</p>
        <div>
          <button onClick={() => navigate("/")}>Volver a comprar</button>
        </div>
        
    </div>
  )
}
