import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componets/Menu'
import Login from './componets/pages/Login'
import Signup from './componets/pages/Signup'
import Home from './componets/pages/Home'
import About from './componets/pages/About'
import Errorpage from './componets/pages/Errorpage'
import Addstudent from './componets/pages/Addstudent'
import Studentlist from './componets/pages/Studentlist'
import Studentdetail from './componets/pages/Studentdetail'
import Studentedit from './componets/pages/Studentedit'
import Updatesucess from './componets/pages/Updatesucess'
import Test from './componets/pages/Test'
import '../src/assets/css/main-style.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" exect element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addstudent" element={<Addstudent />} />
          <Route path="/studentlist" element={<Studentlist />} />
          <Route path="/studentdetail/:id" element={<Studentdetail />} />
          <Route path="/student/:id" element={<Studentedit />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Errorpage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
