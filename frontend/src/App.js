import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';

import AdminLayout from './components/Layouts/AdminLayout';
import TeacherLayout from './components/Layouts/TeacherLayout';
import StudentLayout from './components/Layouts/StudentLayout';

import AddExam from './components/Exam/AddExam';
import AddHall from './components/Hall/AddHall';
import AddStaff from './components/Staff/AddStaff';
import AddTeacher from './components/Teacher/AddTeacher';
import AddSubject from './components/Subject/AddSubject';
import AddStudent from './components/Student/AddStudent';

import EditExam from './components/Exam/EditExam';
import EditStaff from './components/Staff/EditStaff';
import EditStudent from './components/Student/EditStudent';
import EditHall from './components/Hall/EditHall';
import EditTeacher from './components/Teacher/EditTeacher';
import EditSubject from './components/Subject/EditSubject';

import AdminViewExam from './components/Exam/AdminViewExam';
import AdminViewStudent from './components/Student/AdminViewStudent';
import AdminViewTeacher from './components/Teacher/AdminViewTeacher';
import AdminViewHall from './components/Hall/AdminViewHall';
import AdminViewStaff from './components/Staff/AdminViewStaff';
import AdminViewSubject from './components/Subject/AdminViewSubject';

import ViewAllHalls from './components/Hall/ViewAllHalls';
import ViewAllExams from './components/Exam/ViewAllExams';
import ViewAllTeachers from './components/Teacher/ViewAllTeachers';
import ViewAllStudents from './components/Student/ViewAllStudents';
import ViewAllSubjects from './components/Subject/ViewAllSubjects';

import ViewExam from './components/Exam/ViewExam';
import ViewHall from './components/Hall/ViewHall';
import ViewTeacher from './components/Teacher/ViewTeacher';
import ViewStudent from './components/Student/ViewStudent';
import ViewSubject from './components/Subject/StudentViewSubject';

import AdminViewAllSubjects from './components/Subject/AdminViewAllSubjects';
import AdminViewAllTeachers from './components/Teacher/AdminViewAllTeachers';
import AdminViewAllExams from './components/Exam/AdminViewAllExams';
import AdminViewAllHalls from './components/Hall/AdminViewAllHalls';
import AdminViewAllStaff from './components/Staff/AdminViewAllStaff'
import AdminViewAllStudents from './components/Student/AdminViewAllStudents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">

          <Route index element={ <HomePage /> } />

          <Route path="login" element={ <Login /> } />

          <Route path="subject" element={ <ViewAllSubjects /> }>
            <Route path="id" element={ <ViewSubject /> } />
          </Route>


          <Route path="admin">
            <Route index element={ <AdminLayout /> } />
            <Route path="exam">
              <Route index element={ <AdminViewAllExams /> } />
              <Route path="add" element={ <AddExam /> } />
              <Route path=":id" element={ <AdminViewExam /> } />
              <Route path="edit/:id" element={ <EditExam /> } />
            </Route>

            <Route path="hall">
              <Route index element={ <AdminViewAllHalls /> } />
              <Route path="add" element={ <AddHall /> } />
              <Route path=":id" element={ <AdminViewHall /> } />
              <Route path="edit/:id" element={ <EditHall /> } />
            </Route>

            <Route path="staff">
              <Route index element={ <AdminViewAllStaff /> } />
              <Route path="add" element={ <AddStaff /> } />
              <Route path=":id" element={ <AdminViewStaff /> } />
              <Route path="edit/:id" element={ <EditStaff /> } />
            </Route>

            <Route path="teacher">
              <Route index element={ <AdminViewAllTeachers /> } />
              <Route path="add" element={ <AddTeacher /> } />
              <Route path=":id" element={ <AdminViewTeacher /> } />
              <Route path="edit/:id" element={ <EditTeacher /> } />
            </Route>

            <Route path="student">
              <Route index element={ <AdminViewAllStudents /> } />
              <Route path="add" element={ <AddStudent /> } />
              <Route path=":id" element={ <AdminViewStudent /> } />
              <Route path="edit/:id" element={ <EditStudent /> } />
            </Route>

            <Route path="subject">
              <Route index element={ <AdminViewAllSubjects /> } />
              <Route path="add" element={ <AddSubject /> } />
              <Route path=":id" element={ <AdminViewSubject /> } />
              <Route path="edit/:id" element={ <EditSubject /> } />
            </Route>
          </Route>

          <Route path="teacher">

            <Route index element={ <TeacherLayout /> } />

            <Route path="profile">
              <Route index element={ <AdminViewTeacher /> } />
              <Route path="edit:id" element={ <EditTeacher /> } />
              <Route path="reset-password:id" element={ <ResetPassword /> } />
            </Route>

            <Route path="exam">
              <Route index element={ <AdminViewAllExams /> } />
              <Route path="add" element={ <AddExam /> } />
              <Route path=":id" element={ <AdminViewExam /> } />
              <Route path="edit/:id" element={ <EditHall /> } />
            </Route>

            <Route path="teacher">
              <Route index element={ <ViewAllTeachers /> } />
              <Route path=":id" element={ <ViewTeacher /> } />
            </Route>

            <Route path="student">
              <Route index element={ <ViewAllStudents /> } />
              <Route path=":id" element={ <ViewStudent /> } />
            </Route>

            <Route path="hall">
              <Route index element={ <ViewAllHalls /> } />
              <Route path=":id" element={ <ViewHall /> } />
            </Route>

            <Route path="subject">
              <Route index element={ <ViewAllSubjects /> } />
              <Route path=":id" element={ <AdminViewSubject /> } />
            </Route>
          </Route>

          <Route path="student">

            <Route path="profile">
              <Route index element={ <AdminViewTeacher /> } />
              <Route path="edit:id" element={ <EditTeacher /> } />
              <Route path="reset-password" element={ <ResetPassword /> } />
            </Route>
            <Route index element={ <StudentLayout /> } />
            <Route path="exam">
              <Route index element={ <ViewAllExams /> } />
              <Route path=":id" element={ <ViewExam /> } />
            </Route>

            <Route path="teacher">
              <Route index element={ <ViewAllTeachers /> } />
              <Route path=":id" element={ <ViewTeacher /> } />
            </Route>

            <Route path="student">
              <Route index element={ <ViewAllStudents /> } />
              <Route path=":id" element={ <ViewStudent /> } />
            </Route>

            <Route path="hall">
              <Route index element={ <ViewAllHalls /> } />
              <Route path=":id" element={ <ViewHall /> } />
            </Route>

            <Route path="subject">
              <Route index element={ <ViewAllSubjects /> } />
              <Route path=":id" element={ <AdminViewSubject /> } />
            </Route>
          </Route>



        </Route>
      </Routes >

    </BrowserRouter >
  )
}
export default App;
