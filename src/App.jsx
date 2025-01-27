
import About from './components/about'
import {ClassComponent,Gallery} from './components/classComp'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/home'
import Signup from './components/Signup'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UseEffect from './components/Hooks/UseEffect'
import UseEffectApi from './components/Hooks/UseEffectAPI'
import UseReducer from './components/Hooks/UseReducer'
import UseRef from './components/Hooks/UseRef'
import UseMemo from './components/Hooks/UseMemo'
import UseCallBack from './components/Hooks/UseCallBack'
import ReactLifeCycleMethods from './components/Hooks/ReactLifeCycleMethods'
import Memo from './components/Memoization/Memo'
import UpdateNumber from './components/Memoization/UpdateNumber'
import UpdateText from './components/Memoization/UpdateText'
import HoC from './components/HoC/HoC'
import LazyLoading from './components/Memoization/LazyLoading'


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/gallery' element={< Gallery image="React LOGO" page="picture"/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/use-state' element={<Contact/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/use-effect' element={<UseEffect/>}></Route>
          <Route path='/use-effect-api' element={<UseEffectApi/>}></Route>
          <Route path='/use-reducer' element={<UseReducer/>}></Route>
          <Route path='/use-ref' element={<UseRef/>}></Route>
          <Route path='/use-memo' element={<UseMemo/>}></Route>
          <Route path='/use-call-back' element={<UseCallBack/>}></Route>
          <Route path='/react-life-cycle-methods' element={<ReactLifeCycleMethods/>}></Route>
          <Route path="/memo" element={<Memo />} />
          <Route path="/updatenumber" element={<UpdateNumber />} />
          <Route path="/updatetext" element={<UpdateText />} />
          <Route path="/hoc" element={<HoC />} />
          <Route path="/custom-hook" element={<useLocalStorage />} />
          <Route path="/lazy-loading" element={<LazyLoading />} />

        </Routes>         
    </BrowserRouter>
  )
}
export default App
