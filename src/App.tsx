import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css"
import HomeScreen from "./components/HomeScreen/HomeScreen"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <Router>
      <div className={`${styles.main}`}>
        <div className={`${styles.navbar}`}>
          <Navbar />
        </div>

        <div className={`${styles.screens_container}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeScreen />} />
            {/* <Route path="/about" element={<About />}  /> */}
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App
