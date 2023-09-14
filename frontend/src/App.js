import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AdminLayout from './components/Layouts/AdminLayout';
import TeacherLayout from './components/Layouts/TeacherLayout';
import StudentLayout from './components/Layouts/StudentLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={ <Home /> } />
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
