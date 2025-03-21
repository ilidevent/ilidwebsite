import React from 'react'
import { HomePageWrapper } from '@/components'

export const runtime = "edge";

const HomePage = () => {
  return (
    <div className='main'>
      <HomePageWrapper/>
    </div>
  )
}

export default HomePage