import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mainproducts } from '../data'
import { use } from 'react'

const Singleproduct = () => {

let {pid}=useParams()

function fetcher(){

    const datapr=mainproducts.find((e)=>e.id==pid)


    if(datapr===undefined){
          console.log("not product")
    }else{
        console.log(datapr);
        
    }
    




  
    




}


useEffect(()=>{

    fetcher();




},[])

  return (
    <div className='h-screen w-full bg-blue-400  pt-30'>Singleproduct{pid}</div>
  )
}

export default Singleproduct