import React from 'react'

export default function page() {
  return (
    <div className='bg-transparent backdrop-blur-md w-full transparent-bg md:px-46 md:py-8 flex justify-between items-center absolute top-0' style={{color: '#FFF2F5'}}>
        <h2 className='md:text-5xl'>Jhanvi Bhatia</h2>
        <div className='flex gap-6 md:text-2xl'>
            <h4 className='cursor-pointer'>Home</h4>
            <h4 className='cursor-pointer'>About</h4>
            <h4 className='cursor-pointer'>Portfolio</h4>
            <h4 className='cursor-pointer'>Work With Me</h4>
        </div>
    </div>
  )
}
