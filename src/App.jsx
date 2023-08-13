import { useState } from 'react'
import './App.css'
import FirstPage from './pages/FirstPage'
import { useSelector } from 'react-redux'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

function App() {

  const [page, setPage] = useState(0)

  const data = useSelector(state => state.formData)

  console.log(data, page);

  return (
    <div className='h-[80vh] w-[70%] flex justify-center items-center mx-auto'>
      {page === 0 && <FirstPage setPage={setPage} page={page}></FirstPage>}
      {page === 1 && <SecondPage setPage={setPage} page={page}></SecondPage>}
      {page === 2 && <ThirdPage setPage={setPage} page={page}></ThirdPage>}
    </div>
  )
}

export default App
