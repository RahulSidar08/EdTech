import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { Login } from './components/authentication/Login'
import { Signup } from './components/authentication/Signup'
import { Sidebar } from './components/admin/Sidebar'
import { Right } from './components/admin/Right'
import { Agentpanel } from './components/agent/Agentpanel'
import { Navbar } from './components/Home/Navbar.jsx'
import { Herosection } from './components/Home/Herosection.jsx'

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
      <Right/>
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
