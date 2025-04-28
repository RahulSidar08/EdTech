import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { Login } from './components/authentication/Login'
import { Signup } from './components/authentication/Signup'
import { Agentpanel } from './components/agent/Agentpanel'
import { Navbar } from './components/Home/Navbar.jsx'
import { Herosection } from './components/Home/Herosection.jsx'
import Dashboard from './components/admin/Dashboard'

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <div>
      <Navbar/>
      <br />
      <Herosection/>
    </div>
  },
  {
    path : "/login",
    element : <div>
      <Login/>
    </div>
  },
  {
    path : "/signup",
    element:  <div>
    <Signup/>
    </div>
  },
  {
    path : "/admin",
    element : <div>
      <Dashboard/>
    </div>
  },
  {
    path : "/agent",
    element : <div>
      <Agentpanel/>
    </div>
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
