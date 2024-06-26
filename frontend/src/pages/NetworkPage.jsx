import React, { useState } from 'react'
import MiddleNetworkComponent from '../components/MiddleNetworkComponent'
import RightNetworkComponent from '../components/RightNetworkComponent'
import LeftNetworkComponent from '../components/LeftNetworkComponent'

const NetworkPage = () => {
  const [networkState, setNetworkState] = useState('Network');
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/4">
        <LeftNetworkComponent />
      </div>
      <div className="w-3/5">
        <MiddleNetworkComponent />
      </div>
      <div className="w-2/5">
        <RightNetworkComponent networkState={networkState} setNetworkState={setNetworkState} />
      </div>
    </div>

  )
}

export default NetworkPage