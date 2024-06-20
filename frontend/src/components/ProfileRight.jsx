import React from 'react'

const ProfileRight = () => {
  return (
    <div className='w-1/4 p-2 flex flex-col ml-4'>
      <h1 className='text-slate-400 font-bold'>Network</h1>
      <a className='mt-2 text-sky-600 text-sm font-bold' href='/'>Connections: 5</a>
      <a className='mt-2 text-sky-600 text-sm font-bold' href='/'>Requests Sent: 10</a>
      <a className='mt-2 text-sky-600 text-sm font-bold' href='/'>Requests Recieved: 5</a>
      <a className='mt-8 text-sky-400 font-bold' href='/'>Projects: 10</a>
      <a className='mt-2 text-sky-400 font-bold' href='/'>Endorsements: 10</a>
    </div>
  )
}

export default ProfileRight