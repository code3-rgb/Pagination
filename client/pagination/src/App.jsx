import './App.css'

import {  Routes, Route } from 'react-router-dom'
import Pagination from './components/app'

function App() {

 
  return (
      <Routes>
        <Route path='/' element={<h1>You are at Home</h1>} />
        <Route path='/page/:pageNumber' element={<Pagination />} />
      </Routes>
  )
}

export default App
