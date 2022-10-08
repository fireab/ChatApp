import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">FireChat</span>
      <div className="user">
        <img src="https://images.fineartamerica.com/images-medium-large-5/autumn-happiness-rostovskiy-anton.jpg" alt="" />
        <span>John</span>
        <button>logout</button>

      </div>
    </div>
  )
}

export default Navbar