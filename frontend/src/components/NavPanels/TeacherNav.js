import "./Nav.css";
import { Link } from "react-router-dom";

export default function TeacherNav() {
  return (

    <div>
      <div className="Slider">
        <div className="navigation">
          <ul>
            <li>
              <span className="title123">Teacher</span>
            </li>
            <li>
              <Link to="/teacher">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title1">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/teacher/subject">
                <span className="icon">
                  <ion-icon name="clipboard-outline"></ion-icon>
                </span>
                <span className="title1">Subjects</span>
              </Link>
            </li>
            <li>
              <Link to="/teacher/exam">
                <span className="icon">
                  <ion-icon name="today-outline"></ion-icon>
                </span>
                <span className="title1">Exams</span>
              </Link>
            </li>
            <li>
              <Link to="/teacher/teacher">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Teachers</span>
              </Link>
            </li>
            <li>
              <Link to="/teacher/student">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Students</span>
              </Link>
            </li>
            <li>
              <Link to="/teacher/hall">
                <span className="icon">
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                <span className="title1">Halls</span>
              </Link>
            </li>
            <li id="gap">
              <Link to="/teacher/profile">
                <span className="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                <span className="title1">My Profile</span>
              </Link>
            </li>
            <li id="lgout">
              <Link to="/">
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title1">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}