import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <div className='bg-transparent backdrop-blur-md w-full transparent-bg px-5 py-2 md:px-12 xl:px-46 xl:py-8 flex justify-between items-center absolute top-0' style={{color: '#FFF2F5'}}>
        <h2 className='text-3xl md:text-4xl xl:text-5xl'>Jhanvi Bhatia</h2>
        <div className='flex gap-2 md:gap-4 xl:gap-6 text-[8px] md:text-lg xl:text-2xl'>
            <h4 className='cursor-pointer'><Link className='' href={"/"}>Home</Link></h4>
            <h4 className='cursor-pointer'><Link className='' href={"/cta"}>About</Link></h4>
            <h4 className='cursor-pointer'><Link className='' href={"/cta"}>Portfolio</Link></h4>
            <h4 className='cursor-pointer'><Link className='' href={"/cta"}>Work With Me</Link></h4>
        </div>
    </div>
  )
}
