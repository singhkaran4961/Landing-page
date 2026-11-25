import React, { useEffect, useState } from 'react'


const Prac = () => {

    const [formdata, setformdata] = useState([])
 const [forata, setforata] = useState({
"img":null

 })


function handleimg(e){
let{files}=e.target
setforata({...forata,img:files[0]})


}

function handlequal(e){

 let {checked,value}=e.target;


 if(checked){
setformdata([...formdata,value])


 }else{

  setformdata([...formdata.filter((i)=>(i!=value))])



 }
   
    





}


useEffect(() => {
    console.log(formdata);
    
 
}, [formdata])







  return (
    <div className='pt-40 bg-amber-200 h-screen text-black'>

<form action="">
   <input type="checkbox" onChange={handlequal} value="10th" /> 10th
<input type="checkbox" onChange={handlequal} value="12th" /> 12th
<input type="checkbox" onChange={handlequal} value="9th" /> 9th





<input  onChange={handleimg} type='file'/>choosefile
    
    </form>
    
    
    
    
    
    
    </div>
  )
}

export default Prac