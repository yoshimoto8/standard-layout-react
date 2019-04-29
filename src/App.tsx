import * as React from 'react'
import './App.css'
import { Header } from './components/Header'

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="App clearfix">
        <main className="main" />
        <div className="sidemenu" />
      </div>
      <footer className="footer" />
    </div>
  )
}
