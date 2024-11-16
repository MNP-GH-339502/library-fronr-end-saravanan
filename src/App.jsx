import { useState } from 'react'
import './App.css'
import AuthorList from '../Components/AuthorList'
import CategoryList from '../Components/CategoryList'
import BookList from '../Components/BookList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
    <h1>Library Management System</h1>
 
    <Routes>
    <Route path="/AuthorList" element={<AuthorList />} />
                    <Route path="/CategoryList" element={<CategoryList />} />
                    <Route path="/BookList" element={<BookList />} />
   
    </Routes>
    </BrowserRouter>
    
</div>
  )
}

export default App
