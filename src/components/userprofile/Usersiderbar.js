import React from 'react'
import { Link } from 'react-router-dom'

const Usersiderbar = ({ activepage }) => {
  return (
    <div className='usersidebar'>
      {
        activepage === 'accountsettings' ?
          <div className='s2'>Account Settings</div>
          :
          <Link to='/user/accountsettings'>
            <div className='s1'>Account Settings</div>
          </Link>
      }
      {
        activepage === 'mypurchases' ?
          <div className='s2'>My Purchase</div>
          :
          <Link to='/user/mypurchases'>
            <div className='s1'>My Purchase</div>
          </Link>
      }
      {
        activepage === 'studentprofile' ?
          <div className='s2'>Student Profile</div>
          :
          <Link to='/user/studentprofile'>
            <div className='s1'>student profile</div>
          </Link>
      }
    </div>
  )
}

export default Usersiderbar
