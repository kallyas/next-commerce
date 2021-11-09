import { useEffect} from 'react'
import { clearCart } from "../../features/cart/cartSlice"
import { useDispatch } from "react-redux"

const Success = () => {
    const dispatch = useDispatch()
    //clear cart and redirect to account/orders
    useEffect(() => {
        dispatch(clearCart())
        setTimeout(() => {
            window.location.href = "/account/orders"
        }, 5000)
    } , [dispatch])
    return (
        <div>
            order placed successfully. you will be redirected to your account in 5 seconds
        </div>
    )
}

export default Success
