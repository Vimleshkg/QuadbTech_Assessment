import React from 'react'

const ShimerUI = () => {
  return (
    <div className="flex flex-wrap" >
    {
        Array(20)
        .fill("")
        .map((e,i)=>{
            return <div key={i} className="h-56 w-64 rounded-lg m-3 bg-slate-200"></div>  
        })
       
    }
    </div>
  );
};

export default ShimerUI