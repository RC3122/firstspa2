import React from 'react'
import {useParams, Link} from "react-router-dom"
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductDetail() {
  let params = useParams()

  return (
    <div>
      <Title mainTitle={"產品資料 - " + params.id} />
      產品資料 - {params.id}
      <QuantityBtn/>
      <Link to="/">HOME</Link>
    </div>
  )
}


