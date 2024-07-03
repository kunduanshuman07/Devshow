/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LinearProgress } from '@mui/material';
import ColabComponent from '../components/ColabComponent';

const ColabPage = () => {
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
    <div className='p-2'>
      <ColabComponent projects={projects} />
    </div>
  )
}

export default ColabPage