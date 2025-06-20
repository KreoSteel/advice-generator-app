import { useState, useEffect } from 'react'
import Advice from './components/Advice/Advice'
import List from './components/List/List'
import { fetchSavedAdvices } from './services/adviceServices'
import './App.css'

function App() {
  const [advices, setAdvices] = useState([])

  const loadAdvices = async () => {
    try {
      const data = await fetchSavedAdvices()
      setAdvices(data || [])
    } catch (error) {
      console.error("Error loading advices:", error)
      setAdvices([])
    }
  }

  const addAdvice = (newAdvice) => {
    setAdvices(prev => [...prev, newAdvice])
  }

  const removeAdvice = (id) => {
    setAdvices(prev => prev.filter(advice => advice.id !== id))
  }

  useEffect(() => {
    loadAdvices()
  }, [])

  return (
    <div className="app-container">
      <h1>Advice Generator App</h1>
      <Advice onAdviceAdded={addAdvice} />
      <List advices={advices} onAdviceRemoved={removeAdvice} />
    </div>
  )
}

export default App
