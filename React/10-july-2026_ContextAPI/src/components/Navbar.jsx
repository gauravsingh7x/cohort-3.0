import React from 'react'

const Navbar = ({setIsCartOpen}) => {
  return (
    <div className="p-4 bg-black h-10 text-white flex rounded items-center justify-between">
        <div>logo</div>
        <div className="flex gap-10 text-xl">
            <p
            onClick={()=>{
                setIsCartOpen(true)
            }}
            className="cursor-pointer">Home</p>
            <p
            onClick={()=>{
                setIsCartOpen(false)
            }} 
            className="cursor-pointer">Cart</p>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar
