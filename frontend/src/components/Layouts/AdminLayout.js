import React from 'react'
import { Route } from 'react-router-dom'
import ViewAllTeachers from '../Teacher/ViewAllTeachers'

export default function AdminLayout() {
  return (
      <Route basename="/admin" >
          <Route path="/teachers" element={ ViewAllTeachers}/>
      </Route>
  )
}
