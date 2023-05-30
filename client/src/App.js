
//all of your imports
import React from 'react';
import Main from './views/Main';
import {Routes, Route} from 'react-router-dom'
import ProductDetails from './views/ProductDetails';
import Update from './views/Update';

function App() {
  return (
    <div className="App">

      {/* the routes div allows for you to call the routes connected to the
      main components and whatever your individual show component is */}
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<ProductDetails />} path="/:id" />
        <Route element={<Update/>} path="/productmanager/:id/edit"/> 
      </Routes>
    </div>
  );
}
export default App;

