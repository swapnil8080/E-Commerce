import React, { useContext } from 'react'
import { Shopcontext } from './Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum';
import Productdisplay from './Productdisplay';
import Descriptionbox from './Descriptionbox';
import Relatedproduct from './Relatedproduct';

const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id == Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproduct/>
    </div>
  )
}

export default Product
