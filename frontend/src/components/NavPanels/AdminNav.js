import "./AdminNav.css";
import { Link } from "react-router-dom";

export default function StuDashboard() {
  return (

    <div>
      <div className="Slider">
        <div className="navigation">
          <ul>
            <li>
              <span className="title123">Admin</span>
            </li>
            <li>
              <Link to="/admin">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title1">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/teacher">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Teachers</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/student">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Students</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/subject">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Subjects</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/exam">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Exams</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/hall">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Halls</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/staff">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title1">Staff Members</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/profile">
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title1">My Profile</span>
              </Link>
            </li>
            <li>
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
      <div className=""></div>
    </div>

  )
}