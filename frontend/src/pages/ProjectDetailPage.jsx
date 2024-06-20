import React from 'react'

const ProjectDetailPage = () => {
  return (
    <div className='px-48 py-4 flex flex-col'>
      <h1 className='text-3xl text-slate-600 font-bold'>InfoFusion</h1>
      <a className='mt-2 text-sky-600 font-bold' href='/'>Live Demo Link ~</a>
      <h1 className='text-sm mt-1 text-slate-500 font-bold'>Owner: kundu_anshuman</h1>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>5 Contributors</h1>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>5 Comments</h1>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>10 Endorsements</h1>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>Created: Today</h1>
      <h1 className='text-sm mt-6'>Images</h1>
      <div className='flex flex-row mt-2 grid grid-cols-6'>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Logo.svg' alt=''/>
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/My Projects.svg' alt=''/>
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Colab.svg' alt=''/>
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Network.svg' alt=''/>
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Jobs.svg' alt=''/>
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Endorsements.svg' alt=''/>
        </div>
      </div>
      <h1 className='text-sm mt-6'>Video</h1>
      <div className='flex flex-row mt-2'>
        <iframe width="400" height="205" src="https://www.youtube.com/embed/33o3s4Vs4Sw?si=jy31-DJ7pFGIfSZD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <h1 className='text-sm mt-6'>Description</h1>
      <p className='bg-[#f8fafc] p-4 rounded-lg text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia unde? Minima, rerum eius. Quo distinctio esse quisquam eos asperiores totam aspernatur, atque, tenetur dignissimos facere provident vel. Eaque pariatur nisi quod beatae tenetur molestiae minus reiciendis, commodi incidunt unde!</p>
      <h1 className='text-sm mt-4'>Features</h1>
      <div className='flex flex-col bg-[#f8fafc] p-4 mt-2 rounded-lg'>
        <p className='text-xs mt-1'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aperiam.</p>
        <p className='text-xs mt-1'>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aperiam.</p>
        <p className='text-xs mt-1'>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aperiam.</p>
      </div>
      <h1 className='text-sm mt-4'>Technologies Used</h1>
      <div className='flex flex-col bg-[#f8fafc] p-4 mt-2 rounded-lg'>
        <p className='text-xs mt-1'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aperiam.</p>
        <p className='text-xs mt-1'>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aperiam.</p>
        <p className='text-xs mt-1'>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aperiam.</p>
      </div>
    </div>
  )
}

export default ProjectDetailPage