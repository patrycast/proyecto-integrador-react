import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const ProtectedRoutes= ({children, redirectTo}) => {
    const { user } = useSelector((state) => state.user)

    if(!user){
        return <Navigate to={redirectTo} state={{redirectedFromOrderSummary: true}} />
    }
    return children;
}