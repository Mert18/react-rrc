import React from 'react'
import logo from '../logo.svg';


const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
        <img src={logo} className="w-52" alt="logo" />
        <p
        >
          Reusable React Components <i>made with TailwindCSS</i>
        </p>
      </header>
  )
}

export default Header