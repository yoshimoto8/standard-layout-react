import * as React from 'react'
import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <a href="/">SAMPLE SITE</a>
      </h1>
      <nav className="global-nav">
        <ul>
          <li className="nav-item active">
            <a href="">Home</a>
          </li>
          <li className="nav-item ">
            <a href="">about</a>
          </li>
          <li className="nav-item ">
            <a href="">news</a>
          </li>
          <li className="nav-item ">
            <a href="">Topics</a>
          </li>
          <li className="nav-item ">
            <a href="">docs</a>
          </li>
          <li className="nav-item ">
            <a href="">blog</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
