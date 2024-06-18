import React from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import QuantityBtn from './QuantityBtn'

export default function 結帳() {

  let cartItem = 
  {
    "cartItems" : [
      {"id":5, "name":"藍梅", "price":10, "image": "blueberry.jpg", "description": "鮮藍梅50克，補眼之寶", "quantity" : 3},
      {"id":4, "name":"西瓜", "price":20, "image": "watermelon.jpg", "description": "新鮮西瓜2c公斤，夏季必備", "quantity" : 2}
    ]    
  }

  let {cartItems} = cartItem //destructing object
  let cartEmpty = cartItems.length <=0 ? true : false
  let grandTotal = cartItems.reduce((total, product) =>{
        return total += product.price * product.quantity
  }, 0)
const freeShipping = 99


  return (
    <div>
      <Title mainTitle="你的購物車"/>
      {!cartEmpty &&
      <div>
        <div id="cartSection">
          {cartItems.map((product)=>{
          return (
              <div key={product.id}>
                <img src={process.env.PUBLIC_URL + '/img/' + product.image} />
                {product.name}
                {product.description}
                ${product.price}
                購買數量：{product.quantity}
                <QuantityBtn />
              </div>
          )
          })
        }
        </div>
        <div id="checkOutSection">
            <div>全部貨品總共:</div>
            <div>${grandTotal}</div>

            {
                grandTotal >= freeShipping ?
                <div>我們免費送貨</div> :
                <div>滿${freeShipping}免費送貨，尚欠${freeShipping-grandTotal}</div> 
            }
        </div>
      </div>
     }
     {
      cartEmpty &&
      <div>
         <div>沒有商品</div>
         <Link to="/">前往選購商品</Link>
       </div>
     }
    </div>
  )
}
