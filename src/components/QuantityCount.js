import styles from '../styles/QuantityCount.module.css'
import { updateQuantity } from "../slices/basketSlice";
import { useDispatch } from 'react-redux';


function QuantityCount({ setQuantity, quantity = 1, dispatch = false, id = null }) {
    const newDispatch = useDispatch()

    const increaseCount = () => {
        setQuantity(quantity + 1)
        updateQuantityHere(quantity + 1)
    }

    const decreaseCount = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
            updateQuantityHere(quantity - 1)
        }
    }

    const updateQuantityHere = count => {
        if(dispatch){
            const product = {id, quantity: count}
            newDispatch(updateQuantity(product))
        }
    }


    return (
        <div className={styles.quantityCount}>
            <button onClick={decreaseCount} className={styles.actionBtn}>-</button>
            <div className={styles.counter}>{quantity}</div>
            <button onClick={increaseCount} className={styles.actionBtn}>+</button>
        </div>
    )
}

export default QuantityCount
