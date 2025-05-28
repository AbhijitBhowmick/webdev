import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import React, { Suspense }  from 'react'
import './App.css'
const Dashboard = React.lazy(() => import('./components/dashboard'));
const Landing = React.lazy(()=> import('./components/landing'));


function App() {

  return (
    <div>
        <div>
        // <button onClick={() => window.location.href = "/Dashboard"}>Dashboard</button>  //not the rightway to do it
         // <button onClick={() => window.location.href = "/"}>Landing</button>
        </div>
        <BrowserRouter>
        <Apppbar/>
        <Routes>
          <Route path="/Dashboard" element={
            <Suspense fallback={"...loading"}>
              <Dashboard />
            </Suspense>
          } />
          <Route path="/" element={
            <Suspense fallback={"...loading"}>
              <Landing />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

function Apppbar() {
  
  const navigate = useNavigate();
  return (
    <div>
          <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
          <button onClick={() => navigate("/")}>Landing</button>
   </div>
  )
}

export default App
