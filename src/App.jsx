import React from 'react'
import sidebar from './components/sidebar'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <sidebar />
      </div>
      
    </div>
  )
}

export default App

