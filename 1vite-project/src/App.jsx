import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Components/Test'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        {/* <div className="App">
          <Test />
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
