import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const useRedirect= (redirectTo) =>{
    const { user } = useSelector((state) => state.user)
    
    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate(redirectTo)
        }

    },[redirectTo, user, navigate])
}