import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import React, { useEffect } from "react";
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import WebFont from 'webfontloader';
import Home from './components/Home/Home';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"]
      }
    })
  })
  return (
    <>

      <Router>
        <Header />
        {/* <Routes>

          <Route exact path="/" component={<Home/>} />

        </Routes> */}
        <Home/>
        <Footer />
  
      </Router>

    </>
  );
}

export default App;
