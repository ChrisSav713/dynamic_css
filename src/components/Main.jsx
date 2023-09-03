import React from 'react'
import Preview from './Preview'
import Controls from './Controls'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <div className='topsquare'>
        <Preview />
      </div>
      <div className='bottomsquare'>
        <Controls />
      </div>
    </div>
  )
}

export default Main
