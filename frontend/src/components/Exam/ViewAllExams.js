import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import ExamCard from './ExamCard'


export default function ViewAllExams() {

  const [ exams, setExams ] = useState({})

  const fetchExams = async () => {
    await axios.get('http://localhost:8080/exams/')
      .then((response) => {
        setExams(response.data.response)
        console.log(response.data.response)
      })
  }

  useEffect(() => { fetchExams() });

  return (
    <div>
      exams ? { exams.map((exam) => {
        <ExamCard key={ exam._id } exam={ exam } />
      }) } : null
    </div>
  )
}
