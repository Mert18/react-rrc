import React from 'react'
import logo from '../logo.svg';


const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
        <img src={logo} className="w-52" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reusable React Components <i>made with TailwindCSS</i>
        </a>
      </header>
  )
}

export default Header