/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiLoadingProgress from '../components/ApiLoadingProgress';
import { convertToIndianFormat } from '../common/timeDateConvertor';
import ColabModel from '../components/ColabModel';

const ProjectDetailPage = () => {
  const [colabModel, setColabModel] = useState(false);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchProjectData = async () => {
      const res = await axios.post(`${BACKEND_URL}/projects/project-detail`, { id });
      if (res.status === 200) {
        setProject(res.data?.project);
        setLoading(false);
      }
    }
    fetchProjectData();
  }, []);
  if (loading) {
    return <ApiLoadingProgress title={'Loading Project ...'} />
  }
  return (
    <div className='px-48 py-4 flex flex-col'>
      <h1 className='text-3xl text-slate-600 font-bold'>{project.title}</h1>
      <a className='mt-2 text-sky-600 font-bold' href={project.demoLink} target='_blank'>Live Demo Link ~</a>
      <a className='text-sm mt-1 text-slate-500 font-bold' href='/profile'>Owner: kundu_anshuman</a>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>{project.contributors} Contributors</h1>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>{project.comments?.length} Comments</h1>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>{project.endorsements?.length} Endorsements</h1>
      <h1 className='text-xs mt-1 text-slate-400 font-bold'>Created: {convertToIndianFormat(project.createdAt)}</h1>
      {project.seekColab && <div onClick={() => setColabModel(true)} className='mr-auto cursor-pointer'>
        <h1 className='font-bold text-white bg-[#10b981] mt-4 mr-auto px-4 py-1 rounded-lg'>Colaboration Required</h1>
        <h1 className='font-bold text-xs text-slate-400 mt-1'>~Click to apply</h1>
      </div>}
      <h1 className='text-sm mt-6 text-slate-400 font-bold'>Images</h1>
      <div className='flex flex-row mt-2 grid grid-cols-6'>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Logo.svg' alt='' />
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/My Projects.svg' alt='' />
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Colab.svg' alt='' />
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Network.svg' alt='' />
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Jobs.svg' alt='' />
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "130px", height: "130px" }}>
          <img src='/assets/Endorsements.svg' alt='' />
        </div>
      </div>
      <h1 className='text-sm mt-6 text-slate-400 font-bold'>Video</h1>
      <div className='flex flex-row mt-2'>
        <iframe width="400" height="205" src="https://www.youtube.com/embed/33o3s4Vs4Sw?si=jy31-DJ7pFGIfSZD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <h1 className='text-sm mt-6 text-slate-400 font-bold'>Description</h1>
      <p className='bg-[#f8fafc] p-4 rounded-lg text-xs mt-2'>{project.description}</p>
      <h1 className='text-sm mt-4 text-slate-400 font-bold'>Features</h1>
      <div className='flex flex-col bg-[#f8fafc] p-4 mt-2 rounded-lg'>
        {project.features?.map((feature, index) => (
          <p className='text-xs mt-1' key={index}>{index + 1}. {feature}</p>
        ))}
      </div>
      <h1 className='text-sm mt-4 text-slate-400 font-bold'>Technologies Used</h1>
      <div className='flex flex-col bg-[#f8fafc] p-4 mt-2 rounded-lg'>
        {project.techstacks?.map((teachstack, index) => (
          <p className='text-xs mt-1' key={index}>{index + 1}. {teachstack}</p>
        ))}
      </div>
      {colabModel && <ColabModel modalOpen={colabModel} handleClose={() => setColabModel(false)} project={project} />}
    </div>
  )
}

export default ProjectDetailPage