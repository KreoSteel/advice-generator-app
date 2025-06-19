import { useState } from 'react'
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
