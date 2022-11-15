import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay'
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placeToStay" element={<PlaceToStay />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
