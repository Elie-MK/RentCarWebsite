import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { DataSteps } from './utilities/DataSteps'

function App() {

  return (
    <>
    <NavBar />
    <HomePage Datas={DataSteps} />
    <Footer />
    </>
  )
}

export default App
