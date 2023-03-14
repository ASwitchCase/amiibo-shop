import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import './App.css'
import Start from './pages/Start';
import CartPage from './pages/CartPage';
import CartContextProvider from './context/CartContext'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <Router>
        <Routes>
              <Route path="/" element={<Start></Start>}></Route>
              <Route path="/MyCart" element={<CartPage></CartPage>}></Route>
              <Route path='/Search' element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </Router>
      </CartContextProvider>
    </div>
  )
}

export default App
