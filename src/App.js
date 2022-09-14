import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import UserData from './components/pages/UserData';
import ChefDetails from './components/pages/ChefDetails';
import Staff from './components/pages/Staff';
import Testimonials from './components/pages/Testimonials';
 
import Login from './components/pages/Login';



const App = () => {
 
  return (
    <div className="App">
    
      <BrowserRouter>
    
        
          <Routes>
            <Route exact path="/" element={<Login />} />
            {/* <Route path="/userdata" element={<UserData />} /> */}
            <Route exact path="/userdata" element={<UserData />} />
            <Route exact path="/chefdetails" element={<ChefDetails />} />
            <Route exact path="/staff" element={<Staff />} />
            <Route exact path="/testimonials" element={<Testimonials />} />
            
          </Routes>
       
      </BrowserRouter>

      {/* <ChefDetails />
       <UserData />
       <Staff />
       <Testimonials />
       <Mainpage /> */}

    </div>

  )

}
export default App