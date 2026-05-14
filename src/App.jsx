import './App.css'

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
        <div className="panel">
          <h2>Standard Calculator</h2>
          <p>Basic operations with a professional UI.</p>
        </div>
        <div className="panel">
          <h2>ToDo List</h2>
          <p>Add and remove tasks with local persistence.</p>
        </div>
      </section>
    </main>
  )
}

export default App
