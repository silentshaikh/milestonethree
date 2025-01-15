import React from 'react'

function PriceBox({name,price}:{name:string,price:number}) {
  return (
    <div className='flex justify-center gap-10 py-2 font-bold'>
      <h3>{name}</h3>
      <h3>${price.toFixed(2)}</h3>
    </div>
  )
}

export default PriceBox
