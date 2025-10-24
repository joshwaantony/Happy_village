// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import PanchaytCard from '../component/Home/PanchaytCard'


// function HomePage() {
//     const [panchayathData, setPanchayathData] = useState([])
//   const navigate = useNavigate()

//   const details = async () => {
//     try {
//       const res = await axios.get('http://103.191.208.95/api/v1/admin/allCounts')
//       setPanchayathData(res.data)
//     } catch (err) {
//       console.error("Error fetching Panchayath data", err)
//     }
//   }

//   useEffect(() => {
//     details()
//   }, [])

//   const handleCardClick = (panchayathName) => {
//     navigate('/ward', { state: { panchayathName } })
//   }

  

//   return (
//     <div className='py-[30px] px-[50px] lg:px-[80px] xl:px-[100px]'>
//       <h1 className='text-3xl font-bold'>Dashboard</h1>
//       <p>Manage your panchayat data and ward information</p>

//       <div className='flex  gap-[20px] lg:gap-[40px] 2xl:gap-0 justify-between mt-[30px]'>
//         {panchayathData.map((data, index) => (
//           <PanchaytCard
//             key={index}
//             data={data}
//             onClick={() => handleCardClick(data.Panchayath)}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default HomePage




import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PanchaytCard from "../component/Home/PanchaytCard";
import useHomeStore from "../store/homeStore";

function HomePage() {
  const navigate = useNavigate();
  const { panchayathData, fetchPanchayathData, loading, error } = useHomeStore();

  useEffect(() => {
    fetchPanchayathData();
  }, [fetchPanchayathData]);

  const handleCardClick = (panchayathName) => {
    navigate("/ward", { state: { panchayathName } });
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading Panchayath data...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-semibold">
        {error}
      </div>
    );

  return (
    <div className="py-[30px] px-[50px] lg:px-[80px] xl:px-[100px]">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Manage your panchayat data and ward information</p>

      <div className="grid grid-cols-2 gap-[40px] lg:gap-[40px] justify-between mt-[30px]">
        {panchayathData.map((data, index) => (
          <PanchaytCard
            key={index}
            data={data}
            onClick={() => handleCardClick(data.Panchayath)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
