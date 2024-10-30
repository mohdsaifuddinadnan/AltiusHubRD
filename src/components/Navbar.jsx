import React from 'react'
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/invoice">Invoices</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar