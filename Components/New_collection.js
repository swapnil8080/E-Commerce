import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from './Item'
import './New-collection.css'

const New_collection = () => {
  return (
    <div className='new_collection'>
      <h1 className='text-center text-decoration-underline my-5 '>New Collections</h1>
    <div className="new-collection-item ms-4">
        {new_collection.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
    </div>
  )
}

export default New_collection
