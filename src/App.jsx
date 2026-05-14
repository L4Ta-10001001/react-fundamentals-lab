import './App.css'
import Calculator from './components/Calculator/Calculator'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">Web Programming Toolkit</p>
        <h1>Calculator and ToDo List</h1>
        <p className="subtitle">
          A clean Vite + React foundation ready for modular, MUI-powered tools.
        </p>
      </header>
      <section className="app-panels">
        <Calculator />
        <TodoList />
      </section>
    </main>
  )
}

export default App
