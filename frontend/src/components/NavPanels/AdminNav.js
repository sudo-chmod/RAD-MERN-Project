// import React from 'react'

// export default function AdminNav() {
//   return (
//     <>
//         <h1>AdminNav</h1>
//     </>
//   )
// }

import "./NavPanelstyles.css"
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const AdminNav = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Dashboard",
          icon:<FaTh/>
      },
      {
          path:"/student",
          name:"Students",
          icon:<FaUserAlt/>
      },
      {
          path:"/teacher",
          name:"Teachers",
          icon:<FaThList/>
      },
      {
          path:"/subject",
          name:"Subjects",
          icon:<FaRegChartBar/>
      },
      {
          path:"/hall",
          name:"Halls",
          icon:<FaCommentAlt/>
      },
      {
          path:"/myprofile",
          name:"My Profile",
          icon:<FaShoppingBag/>
      },

      
  ]
  return (
    <div className="mynav_container">
       <div style={{width: isOpen ? "200px" : "50px"}} className="mynav_sidebar">
           <div className="mynav_top_section">
               <h1 style={{display: isOpen ? "block" : "none"}} className="mynav_logo">Logo</h1>
               <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="mynav_bars">
                   <FaBars onClick={toggle}/>
               </div>
           </div>
           {
               menuItem.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="mynav_link" activeclassName="active">
                       <div className="mynav_icon">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="mynav_link_text">{item.name}</div>
                   </NavLink>
               ))
           }
       </div>
       <main>{children}</main>
    </div>
  );
};

export default AdminNav;
