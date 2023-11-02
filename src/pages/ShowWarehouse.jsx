import React from 'react'
import { LongCardWarehouse } from '../components/LongCard'
import Navbar from '../components/Navbar'
import OrderDialog from '../components/OrderDialog'

export default function ShowWarehouse() {
    const pathName = window.location.pathname
    const item=pathName.split('/')[4]
    const warehouseData=[
        {
            Name: 'Vaishnave Storage Limited',
            Location:'Jammu & Kashmir',
            Item:'Chakri Apple',
            Quantity: '5 Ton',
            Rating:'7/10',
            Price:'95/Kg'
        },
        {
            Name: 'Vaishnave Storage Limited',
            Location:'Jammu & Kashmir',
            Item:'Chakri Apple',
            Quantity: '5 Ton',
            Rating:'7/10',
            Price:'95/Kg'
        }
    ]
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <h1 className='self-center text-lg font-bold'>Warehouses Available For:{item} </h1>
        <div className='flex flex-row justify-evenly flex-wrap'>
                {warehouseData.map((data)=>{
                    return <LongCardWarehouse name={data.Name} location={data.Location} item={data.Item} rating={data.Rating} price={data.Price} quantity={data.Quantity}/>
                })}
        </div>
        <OrderDialog/>
    </div>
  )
}
