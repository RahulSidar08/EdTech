import { useState } from 'react'
import './App.css'
import { Navbar } from './components/shared/Navbar'
import { Button } from './components/ui/button'
import Footer from './components/shared/Footer'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { Login } from './components/authentication/Login'
import { Signup } from './components/authentication/Signup'
import { Sidebar } from './components/admin/Sidebar'
import { Right } from './components/admin/Right'
import { Agentpanel } from './components/agent/Agentpanel'


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <div>
      <Navbar/>
      <Footer/>
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
      <Navbar/>
      <Right/>
    </div>
  },
  {
    path : "/agent",
    element : <div>
      <Navbar/>
      <Agentpanel/>
    </div>
  }
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
