import React from 'react';
import { NavLink } from 'react-router-dom';

const Navtag = ({children}) => {

  const menuItem=[
    {
      path:"/userdata",
      name:"User Data",
      
    },
    {
      path:"/chefdetails",
      name:"Chef Details",
      
    },
    {
      path:"/staff",
      name:"Staff & Roles",
      
    },
    {
      path:"/testimonials",
      name:"Testimonials",
      
    },
    {
      path:"/",
      name:"LogOut",
      
    },
  ]

  return (
    <div className="container">
      <div className="navtag">
        <div className="top_section">
          <h1 className="logo">The Chef Lane</h1>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to ={item.path} key={index} className="link" activeclassName="active">
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
       <main>{children}</main>
    </div>
  )
}

export default Navtag