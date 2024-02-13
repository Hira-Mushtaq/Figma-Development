import React from 'react'
import Stats from "../../assets/images.png"

const Statistics = () => {
  return (
    <div>
        <div>
            <h1 className='text-purple-700 text-4xl text-center font-bold mt-16'>Coronavirus Statistics</h1>
            <p className=' text-slate-400 mb-12 text-center mt-3 mulish-para'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </div>
        <div className=' flex justify-evenly' >
            <ul className=' items-center'>
           <li> <img className=' w-12 ml-12 mb-4' src={Stats}/></li>
           <li className='text-4xl font-bold mb-4'> 96,855,25</li>
           <li className=' text-slate-400 ml-5 mulish-para'> ACTIVE CASES</li>
            </ul>
            <ul>
           <li> <img className=' w-12  ml-10 mb-4' src={Stats}/></li>
           <li className='text-4xl font-bold  mb-4'> 5,856,25</li>
           <li className=' text-slate-400 ml-4 mulish-para'> DEATH CASES</li>
            </ul>
            <ul>
           <li> <img className=' w-12  ml-12  mb-4' src={Stats}/></li>
           <li className='text-4xl font-bold  mb-4'> 58,879,25</li>
           <li className=' text-slate-400 ml-2.5 mulish-para'> RECOVERED CASES</li>
            </ul>
        </div>
    </div>
  )
}

export default Statistics