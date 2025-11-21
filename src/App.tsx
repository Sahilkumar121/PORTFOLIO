
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import { useEffect, useState } from 'react'
import Loading from './components/Loading/Loading';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

  }, []);

  return (
    <>
      
      <Routes>
        <Route path='/' element={isLoading ? <Loading /> : <HomePage />} />
      </Routes>
    </>
  )
}

export default App
