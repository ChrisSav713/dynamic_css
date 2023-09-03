import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useContext
} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Nav from './pages/Nav'
import Main from './components/Main'
import './App.css'
import { FlexReducerProvider } from './flex/FlexReducerContext'
export const MyContext = createContext()

function App() {
  const [name, setName] = useState('John')

  const handleTextChange = (e) => {
    setName(e.target.value)
  }

  const providerValue = { name, handleTextChange }
  return (
    <>
      <MyContext.Provider value={providerValue}>
        <FlexReducerProvider>
          <div className={`App`}>
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path='/' index element={<Home />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/layout' element={<Layout />} />
                <Route path='/main' element={<Main />} />
              </Routes>
            </BrowserRouter>
          </div>
        </FlexReducerProvider>
      </MyContext.Provider>
    </>
  )
}

export default App
