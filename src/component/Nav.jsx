// import React, { useState } from 'react'
// import { GiVillage } from "react-icons/gi";
// function Nav() {
//   return (
//     <div className='  bg-[#00105B] w-full h-[50px] px-[80px] flex justify-center items-center'>
//                 <p className='text-2xl text-white font-bold font-serif flex justify-center items-center'>Happy Village <p className='text-[30px]'><GiVillage /></p> </p>

//     </div>
//   )
// }

// export default Nav

import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { GiVillage } from "react-icons/gi";
import { RiGovernmentLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";






function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full px-[50px] lg:px-[80px] xl:px-[100px] border-[#edeef1] border-b-2 py-[10px]'>
      <div className='flex justify-between items-center'>
        <div className='flex  items-center gap-[10px]'>

          <p className='text-[25px] bg-[#4f46e5] text-white rounded-[10px] p-2'><RiGovernmentLine /></p>
          <p className='text-2xl font-bold'>Happy Village</p>
          </div>
          <div className='flex items-center gap-[8px]'>
            <p className='text-[25px] text-[#4f46e5]'><VscAccount /></p>
            <h1 className='font-semibold'>Admin User</h1>
            <p><FaAngleDown /></p>
          </div>
        
      </div>


      {/* <ul className='flex justify-center items-center gap-[80px] text-white font-semibold text-[15px]'>
        <li>Home</li>
        <li className='flex items-center gap-[3px] relative cursor-pointer hover:text-gray-200'
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Others <FaCaretDown />
          {open && (
            <ul className='absolute top-[30px] left-0 bg-white text-black shadow-lg rounded-md w-[150px]'>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Report</li>
            </ul>
          )}</li>
        <li className='flex justify-center items-center gap-[5px]'><p className='text-[20px]'><IoSearch /></p><input type='text' placeholder='search here' className='border-1 w-[500px] px-[10px] py-[5px] rounded-[10px]' /></li>
      </ul> */}

    </div>
  )
}

export default Nav 