import React from 'react'
import ProfileHeader from "../components/ProfileHeader";
import ProfileLeft from "../components/ProfileLeft";
import ProfileRight from "../components/ProfileRight";

const ProfilePage = () => {
  return (
    <div className='flex flex-col px-10'>
      <ProfileHeader/>
      <div className='flex flex-row mt-4'>
        <ProfileLeft/>
        <ProfileRight/>
      </div>
    </div>
  )
}

export default ProfilePage