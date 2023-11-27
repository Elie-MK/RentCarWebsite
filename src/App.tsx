import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import MainHomePage from './pages/MainHomePage'
import { DataSteps } from './utilities/DataSteps'
import AllViewVehicles from './pages/AllViewVehicles'
import Details from './pages/Details'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<MainHomePage>
          <HomePage Datas={DataSteps} />
        </MainHomePage>  } />
        <Route path="/allvehicles"  element={<MainHomePage>
          <AllViewVehicles  />
        </MainHomePage>  } />
        <Route path="/allvehicles/detail/:id"  element={<MainHomePage>
          <Details  />
        </MainHomePage>  } />
          
      </Routes>
    </BrowserRouter>
  )
}

export default App
