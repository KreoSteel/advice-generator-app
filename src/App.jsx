import { useState } from 'react'
import advice_app_icon from '../public/advice_app_icon.svg'
import Advice from './components/Advice/Advice'
import List from './components/List/List'
import './App.css'

function App() {

  return (
    <div className="app-container">
      <Advice></Advice>
      <List></List>
    </div>
  )
}

export default App
