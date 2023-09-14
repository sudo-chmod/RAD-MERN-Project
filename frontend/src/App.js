import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AdminLayout from './components/Layouts/AdminLayout';
import TeacherLayout from './components/Layouts/TeacherLayout';
import StudentLayout from './components/Layouts/StudentLayout';
import AddExam from './components/Exam/AddExam';
import AddHall from './components/Hall/AddHall';
import AddStaff from './components/Staff/AddStaff';
import AddTeacher from './components/Teacher/AddTeacher';
import AddStudent from './components/Student/AddStudent';
import ViewAllExams from './components/Exam/ViewAllExams';
import EditExam from './components/Exam/EditExam';
import ViewExam from './components/Exam/ViewExam';
import ViewAllHalls from './components/Hall/ViewAllHalls';
import ViewHall from './components/Hall/ViewHall';
import EditHall from './components/Hall/EditHall';
import ViewAllStaff from './components/Staff/ViewAllStaff';
import ViewStaff from './components/Staff/ViewStaff';
import EditStaff from './components/Staff/EditStaff';
import ViewAllTeachers from './components/Teacher/ViewAllTeachers';
import ViewTeacher from './components/Teacher/ViewTeacher';
import EditTeacher from './components/Teacher/EditTeacher';
import ViewAllStudents from './components/Student/ViewAllStudents';
import EditStudent from './components/Student/EditStudent';
import ViewStudent from './components/Student/ViewStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={ <Home /> } />
          <Route path="login" element={ <Login /> } />

          <Route path="exam">
            <Route index element={ <ViewAllExams/>} />
            <Route path="add" element={ <AddExam /> } />
            <Route path=":id" element={ <ViewExam /> }/>
            <Route path="edit/:id" element={ <EditExam /> }/>
          </Route>

          <Route path="hall">
            <Route index element={ <ViewAllHalls /> } />
            <Route path="add" element={ <AddHall /> } />
            <Route path=":id" element={ <ViewHall /> } />
            <Route path="edit/:id" element={ <EditHall /> } />
          </Route>

          <Route path="staff">
            <Route index element={ <ViewAllStaff /> } />
            <Route path="add" element={ <AddStaff /> } />
            <Route path=":id" element={ <ViewStaff /> } />
            <Route path="edit/:id" element={ <EditStaff /> } />
          </Route>

          <Route path="teacher">
            <Route index element={ <ViewAllTeachers /> } />
            <Route path="add" element={ <AddTeacher /> } />
            <Route path=":id" element={ <ViewTeacher /> } />
            <Route path="edit/:id" element={ <EditTeacher /> } />
          </Route>

          <Route path="student">
            <Route index element={ <ViewAllStudents/> } />
            <Route path="add" element={ <AddStudent/> } />
            <Route path=":id" element={ <ViewStudent /> } />
            <Route path="edit/:id" element={ <EditStudent /> } />
          </Route>

          <Route path="hall/add" element={ <AddHall/>} />
          <Route path="staff/add" element={ <AddStaff/>} />
          <Route path="teacher/add" element={ <AddTeacher/>} />
          <Route path="student/add" element={ <AddStudent /> }/>
          <Route path="login" element={ <Login /> } />
          
          
          

          <Route path="admin-dashboard" element={ <AdminLayout /> } />
          <Route path="teacher-dashboard" element={ <TeacherLayout /> } />
          <Route path="student-dashboard" element={ <StudentLayout /> } />
        </Route>
      </Routes >
    </BrowserRouter>
  )
}
export default App;
