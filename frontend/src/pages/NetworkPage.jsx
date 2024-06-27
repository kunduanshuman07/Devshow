/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import MiddleNetworkComponent from '../components/MiddleNetworkComponent'
import RightNetworkComponent from '../components/RightNetworkComponent'
import LeftNetworkComponent from '../components/LeftNetworkComponent'
import axios from 'axios'
import { LinearProgress } from '@mui/material'

const NetworkPage = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [networkState, setNetworkState] = useState('Network');
  const [network, setNetwork] = useState([]);
  const [connections, setConnections] = useState([]);
  const [requests, setRequests] = useState([]);
  const [sent, setSent] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      const res = await axios.get(`${BACKEND_URL}/community/get-all-posts`);
      if (res.status === 200) {
        setPosts(res.data?.posts);
      }
    }
    const fetchAllUserNetwork = async() => {
      const res = await axios.get(`${BACKEND_URL}/network/all-users`);
      if(res.status===200){
        setNetwork(res.data?.allUsers);
      }
    }
    const fetchAllConnections = async() => {
      const res = await axios.post(`${BACKEND_URL}/network/all-user-connections`, {id: user?._id});
      if(res.status===200){
        setConnections(res.data?.userConnections);
      }
    }
    const fetchAllRequests = async() => {
      const res = await axios.post(`${BACKEND_URL}/network/connection-requests`, {id: user?._id});
      if(res.status===200){
        setRequests(res.data?.userConnections);
      }
    }
    fetchAllPosts();
    fetchAllUserNetwork();
    fetchAllConnections();
    fetchAllRequests();
    setLoading(false);
  }, [])
  if (loading) {
    return <LinearProgress />
  }
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/4">
        <LeftNetworkComponent />
      </div>
      <div className="w-3/5">
        <MiddleNetworkComponent posts={posts}/>
      </div>
      <div className="w-2/5">
        <RightNetworkComponent networkState={networkState} setNetworkState={setNetworkState} network={network} connections={connections} requests={requests}/>
      </div>
    </div>

  )
}

export default NetworkPage