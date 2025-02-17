import React from 'react'
import {Button} from './index'
import appwriteAuth from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout as authLogout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = async () => {
        // console.log("lllll")
        try {
            await appwriteAuth.logout().then(dispatch(authLogout())).then(navigate('/'))
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <Button onClick={logout} name="Logout" className='absolute w-fit right-0 mt-5 mr-9 hover:cursor-pointer hover:bg-[#656e9f] '/>
  )
}

export default Logout