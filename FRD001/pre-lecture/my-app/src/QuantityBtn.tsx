import { useState } from "react"

export function QuantityBtn(productInfo:any) {
    let [numInCart, setNumInCart] = useState(0)


    const handleAdd = () => {
        setNumInCart(numInCart + 1)
    }

    const handleSubstract = () => {
        setNumInCart(numInCart - 1)
    }
    return (
        <div>
            {
                (numInCart === 0) ?
            <div onClick={handleAdd}>Add{productInfo.name} to Cart</div> :
            <div>
                <div onClick={handleSubstract}>-</div>
                {numInCart}
                <div onClick={handleAdd}>+</div>
            </div>
            }
        </div>
    )
}