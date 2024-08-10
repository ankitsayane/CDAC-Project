import React from 'react'
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
function Flyout() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("isLoggedIn");
        navigate("/");
        window.location.reload();
      };
  return (
    <div className='w-60 top-16 right-3 bg-zinc-100 absolute right-1 rounded-md overflow-hidden'>
        <div className="flex justify-center mb-4 ">
        <img id='userprofile' src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1328.jpg?w=826" alt="" className='w-24 h-24 rounded-full object-cover m-1'/>
      </div>

        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>Name:{user.name}</h2>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>Email:{user.email}</h2>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'><a href="#">Trip History</a></h2>
        </div>
        <div className='px-3 py-2'>
        <Button onClick={handleLogout} className="w-full py-2 text-sm">Logout</Button>
      </div>
    </div>
  )
}

export default Flyout;