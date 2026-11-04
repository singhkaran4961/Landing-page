import React from 'react'

const Products = ({name,price,img}) => {
  return (
    <div className='bg-white   w-60 rounded-lg justify-center items-center flex flex-col cursor-pointer py-2  '>
        <div className=" h-40 w-55  flex  overflow-hidden    ">
            <img src={img} className='w-full h-full object-cover hover:scale-130 transition-all  duration-200 ease-in'  alt=''></img>
        </div>
        <div className=" text-center">
            <h1 className='text-xl text-black'>{ name}</h1>
            <h1 className='text-lg text-gray-500'>{price}</h1>


        </div>

        <button className='bg-red-500 p-2 rounded-xl mt-2 text-white cursor-pointer text-sm hover:scale-120'>Shop Now</button>


        









    </div>
  )
}

export default Products