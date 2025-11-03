import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader/PageLoader";

const Home = lazy(() => import("./components/HomeScreen/HomeScreen"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <div className={styles.main}>
          <div className={styles.navbar}>
            <Navbar />
          </div>

          <div className={styles.screens_container}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
