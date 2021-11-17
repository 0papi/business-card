import React from 'react';
import UserInfo from './components/UserInfo'
import About from './components/About';
import Interests from './components/Interests'
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="app">
      <div className="container">
        <UserInfo />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}


export default App;