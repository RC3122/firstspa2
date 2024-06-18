import React from 'react'
import {useState} from 'react'

export default function QuantityBtn() {
    let [numInCart, setNumInCart ] = useState(0)

    const handleAdd =()=>{
        setNumInCart(numInCart+1)
    }

    function handleSubtract () {
        setNumInCart(numInCart-1)
    }


  return (
    <div>
        {
        (numInCart === 0) ? 
        <div onClick={handleAdd}>加入購物車</div>
        :
        <div>
            <div onClick={handleSubtract}>-</div>
            <div>{numInCart}件</div>
            <div onClick={handleAdd}>+</div>
        </div>
        }
    </div>
  )
}
