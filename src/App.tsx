import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { DataSteps } from './utilities/DataSteps'

function App() {

  return (
    <>
    <NavBar />
    <HomePage Datas={DataSteps} />
    </>
  )
}

export default App
