import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Manu from "./pages/Manu";

function App() {
  return (
    <div className="App">
      {/* ใช้คลาส navbar สำหรับ Navbar */}
      <Navbar className="navbar" />
      
      <main className="container mt-4" >
        <h1>Welcome My restaurant in Chiang Mai</h1>
        <p>กรุณาเลือกเมนูอาหาร</p>
      </main>
      
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h2>ของคาว</h2>
            <p>This is where the main content goes.</p>
          </div>
          <div className="col-md-4">
            <h2>ของหวาน</h2>
            <p>This is where the sidebar content goes.</p>
          </div>
        </div>
      </main>

      <main className="container mt-4">
          <Home />
      </main>
      
      <main className="container mt-4">
          <Manu />
      </main>
      
      {/* ใช้คลาส footer สำหรับ Footer */}
      <Footer className="footer" />
    </div>
  );
}

export default App;

