import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Calculator from './components/Calculator/Calculator'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App