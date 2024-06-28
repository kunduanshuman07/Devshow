/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import MiddleNetworkComponent from '../components/MiddleNetworkComponent'
import RightNetworkComponent from '../components/RightNetworkComponent'
import LeftNetworkComponent from '../components/LeftNetworkComponent'
import axios from 'axios'
import { LinearProgress } from '@mui/material'

const NetworkPage = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const res = await axios.get(`${BACKEND_URL}/community/get-all-posts`);
      if (res.status === 200) {
        setPosts(res.data?.posts);
        setLoading(false);
      }
    }
    fetchAllPosts();
  }, [])
  if (loading) {
    return <LinearProgress />
  }
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/4">
        <LeftNetworkComponent />
      </div>
      <div className="w-4/5">
        <MiddleNetworkComponent posts={posts} />
      </div>
      <div className="w-2/5">
        <RightNetworkComponent />
      </div>
    </div>

  )
}

export default NetworkPage