import React from 'react'

const Aboutuspro = ({title,para}) => {
  return (
    <div className='h-80 w-80 bg-blue-100 rounded-full cursor-pointer flex justify-center items-center flex-col gap-5 hover:bg-sky-300 hover:shadow-xl shadow-cyan-300'>

        <h1 className='text-xl font-semibold whitespace-nowrap' >{title}</h1>
        <p className='w-40 text-center text-gray-600 text-lg'>{para}</p>





    </div>
  )
}

export default Aboutuspro