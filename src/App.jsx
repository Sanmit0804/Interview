import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import CardsContainer from './components/CardsContainer/CardsContainer'
import Footer from './components/Footer/Footer';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
        <Header/>
        <Filters/>
        <CardsContainer/>
        <Pagination/>
        <Footer/>
     </div>
    </>
  )
}

export default App
