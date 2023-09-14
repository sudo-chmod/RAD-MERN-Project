// import React from 'react'
// import { Route } from 'react-router-dom'
// import ViewAllTeachers from '../Teacher/ViewAllTeachers'

// import ViewAllStudents from '../Student/ViewAllStudents'
// import ViewAllSubjects from '../Subjects/ViewAllSubjects'
// import ViewAllExams from '../Exam/ViewAllExams'
// import AllHalls from '../Hall/ViewAllHalls'

// export default function AdminLayout() {
//   return (
//       <Route basename="/admin" >
//           <Route path="/teachers" element={ ViewAllTeachers}/>
//           <Route path="/students" element={ ViewAllStudents}/>
//           <Route path="/subjects" element={ ViewAllSubjects}/>
//           <Route path="/exams" element={ ViewAllExams}/>
//           <Route path="/halls" element={ AllHalls}/>

//       </Route>
//   )
// }

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminNav from '../NavPanels/AdminNav'
import ViewAllTeachers from '../Teacher/ViewAllTeachers';
import ViewAllSubjects from '../Subjects/ViewAllSubjects';
import ViewAllStudents from '../Student/ViewAllStudents';
import AllHalls from '../Hall/ViewAllHalls';
import Dashboard from '../dashboards/adminDashboard';

//import Dashboard from './pages/Dashboard.jsx';
//import MyProfile from './pages/MyProfile.jsx';
// dashboard ekai profile ekai ona


const AdminLayout = () => {
  return (
    <BrowserRouter>
      <AdminNav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<ViewAllStudents />} />
          <Route path="/teacher" element={<ViewAllTeachers />} />
          <Route path="/subject" element={<ViewAllSubjects />} />
          <Route path="/hall" element={<AllHalls />} />
          {/* <Route path="/myprofile" element={<MyProfile />} /> */}
          
        </Routes>
      </AdminNav>
    </BrowserRouter>
  );
};

export default AdminLayout;