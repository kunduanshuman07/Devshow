/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import FeedSibarComponent from '../components/FeedSibarComponent'
import FeedMainComponent from '../components/FeedMainComponent'
import FeedAnnComponent from '../components/FeedAnnComponent'
import axios from "axios";
import { LinearProgress } from '@mui/material';

const FeedPage = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjectsData = async () => {
      const res = await axios.get(`${BACKEND_URL}/projects/projects-feed`);
      if (res.status === 200) {
        setProjects(res?.data?.allProjects);
        setLoading(false);
      }
    }
    fetchProjectsData();
  }, [])
  if (loading) {
    return <LinearProgress />
  }
  return (
    <div className='flex flex-row w-full'>
      <div className='w-1/3'>
        <FeedSibarComponent />
      </div>
      <FeedMainComponent projects={projects} />
      <div className='w-1/3'>
        <FeedAnnComponent />
      </div>
    </div>
  )
}

export default FeedPage