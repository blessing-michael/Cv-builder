import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Info from './Info'

function Resume() {
  return (
    <div className='resume'>
        <Info/>
        <Education/>
        <Experience/>
    </div>
  )
}

export default Resume