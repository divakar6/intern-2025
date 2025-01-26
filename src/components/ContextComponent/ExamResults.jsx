import React from 'react'

import {useContext} from "react"
import { ThemeProvider } from '../UseContext'

const ExamResults = () => {
  const res=useContext(ThemeProvider)
  return (
    <div>
      <h3>Results published and your SGPA is {res.sgpa}, CGPA is {res.cgpa}</h3>
    </div>
  )
}

export default ExamResults