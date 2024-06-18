import React, { useState, useMemo, useEffect } from 'react';
import { CheckOutlined, HighlightOutlined, SmileFilled, SmileOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { Form, Button, Divider, Radio, Space,Typography, Steps } from 'antd';
import styles from './ProductList.module.css';
import { MoName,MoAddress,MoCalendar,  MoBaseContainer as BaseContainer, MoUpload } from '@gov-mo/components';
import { Link } from 'react-router-dom'
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductList() {
const [size, setSize] = useState('large'); // default is 'middle'

/*}
let productList = [
    {"id":1, "name":"蘋果", "price":5, "image": "apple.jpg", "description": "新鮮蘋果50克，一日一蘋果"},
    {"id":2, "name":"橙", "price":3, "image": "orange.jpg", "description": "新鮮橙50克，又甜又好吃"},    
    {"id":3, "name":"芒果", "price":4, "image": "mango.jpg", "description": "新鮮芒果500克，宜做甜品"},
    {"id":4, "name":"西瓜", "price":20, "image": "watermelon.jpg", "description": "新鮮西瓜2c公斤，夏季必備"},
    {"id":5, "name":"藍梅", "price":10, "image": "blueberry.jpg", "description": "鮮藍梅50克，補眼之寶"},
    {"id":6, "name":"白蘿蔔", "price":5, "image": "white-carrot.jpg", "description": "新鮮白蘿蔔1公斤，宜煲湯"}
]
*/


/* WILL CAUSE INFINITE LOOP, useEffect to solve */
let [productList, setProductList] = useState([])
let [input, setInput] = useState("")


/*
fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
  .then(response => response.json())
  .then(data => setProductList(data)) */

  //useEffect
useEffect(()=>{
    //1. 當只有一個參數：component每次render觸發, 如state有變化, 整頁render一次
    //console.log(productList)
    fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
        .then(response => response.json())
        .then(data => setProductList(data)) 
},[]) //<== Dependency Array
      //2. 當Dependency Array為空, 只會於第一次render觸發
      //3. Dependency Array是有變數時，第一次render時+指定的變數改變會觸發

useEffect(()=>{
  console.log(input.length)
},[input])

const [product, setProduct] = useState('')
const [showProduct, setShowProduct] = useState(false)

function handleClick () {
    setProduct('react')
    console.log(product)
}

function handleClick2 (btnClicked){
  if (btnClicked === 'btnHide')
    setShowProduct(false)
  if (btnClicked === 'btnShow')
    setShowProduct(true)  
}



  return (
    <BaseContainer> 
    <div>
        <input type="text" onChange={e => setInput(e.target.value)} />
        <button onClick={()=>setProductList(["change"])}>改變</button>
        <MoName />
        <MoAddress />
        上傳文件(.png, .pdf):
        <MoUpload
      id="com0"
      appId="test"
      sources={['take-photo', 'local-photo', 'local-file', 'scan']}
      accept={['png', 'pdf']}
    >
      <Button type="primary" className={styles.btnPrimary}>上傳</Button>
    </MoUpload>
    
        MOCalendar:
        <MoCalendar />
        
        <div>
        <Button type="primary" htmlType="submit" className={styles.btnPrimary}>
            提交2
        </Button>
        </div>
        <br/>
      
        {/*
        <div>
        {product} <button onClick={handleClick}  className={styles.btnDefault}>改變變數值</button>
        </div>
      */}

      <div>
      <Steps
          size="small"
          current={0}
          items={[
            {
              title: 'Product List',
            },
            {
              title: 'Product Details',
            },
            {
              title: 'Checkout',
            },
          ]}
        />
      </div>


        <div>
          {showProduct && <Button id='btnHide' onClick={() => handleClick2('btnHide')} className={styles.btnDefault}>隱藏產品</Button>}
          {!showProduct && <Button type="primary" className={styles.btnPrimary} id='btnShow' onClick={() => handleClick2('btnShow')} >顯示產品</Button>}
        </div>


        <Title mainTitle="請選擇要購買的水果" subTitle="特別籌賓週"/>

        <p className='red2'>Hello</p>
        <div>
        {
            productList.map(product=>{
                return (
                  showProduct && <div key={product.id} className={styles.productBorder}>
                    {product.name}<br/>
                    ${product.price}<br/>
                    <Link to= {"/ProductDetail/" + product.id} >
                    <img src={process.env.PUBLIC_URL + '/img/' + product.image} /><br/>
                    </Link>
                    {product.description}<br/>
                    <QuantityBtn />
                    </div>
                )
            })
        }
        </div>
    </div>
    </BaseContainer>
  )
}
