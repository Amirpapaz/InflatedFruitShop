"use client"
import React from 'react'
import Link from 'next/link'
import useCart from './(store)/store'

export default function Header() {
    const cartItems = useCart(state => state.cart)
  return (
    <header className=" sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-medium z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
        <Link href={'/'}> 
        <h1 className="uppercase cursor-pointer hover:scale-110"> Fruit Shop</h1>
       </Link> 
       <div className="relative grid place-items-center"> 
         {true && (<div className=" absolute top-0 bg-blue-400 text-white right-0 rounded-full aspect-square h-5 grid place-items-center -translate-y-full translate-x-full ">
         <p className="text-small "> {cartItems.length} </p>

        </div>) }
       <i className="fa-solid cursor-pointer hover:text-slate-500 fa-cart-shopping"></i>
       </div> 
      </header>
  )
}
