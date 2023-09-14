import React from 'react'
import { Route } from 'react-router-dom'
import ViewAllTeachers from '../Teacher/ViewAllTeachers'

import ViewAllStudents from '../Student/ViewAllStudents'
import ViewAllSubjects from '../Subjects/ViewAllSubjects'
import ViewAllExams from '../Exam/ViewAllExams'
import AllHalls from '../Hall/AllHalls'

export default function AdminLayout() {
  return (
      <Route basename="/admin" >
          <Route path="/teachers" element={ ViewAllTeachers}/>
          <Route path="/students" element={ ViewAllStudents}/>
          <Route path="/subjects" element={ ViewAllSubjects}/>
          <Route path="/exams" element={ ViewAllExams}/>
          <Route path="/halls" element={ AllHalls}/>

      </Route>
  )
}