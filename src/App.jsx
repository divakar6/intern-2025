
import About from './components/about'
import {ClassComponent,Gallery} from './components/classComp'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/home'
import Signup from './components/Signup'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/gallery' element={< Gallery image="React LOGO" page="picture"/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>         
    </BrowserRouter>
  )
}
export default App
