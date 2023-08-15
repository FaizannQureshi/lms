import React from 'react';
import Home from './screens/Home';
import Register from './screens/Register';
import Category from './screens/Category';
import Course from './components/Course';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div >
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
          // <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/men' element={<MenClothes />} />
          <Route path='/women' element={<Women />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> 
          <Route path="/cart" element={<Cart/>} /> */}


          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/course" element={<Course />} />





        </Routes>

      </div>
    </Router>
  );
}

export default App;
