// import React, { useEffect } from 'react'
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// import PersonalInfo from '../component/Members/PersonalInfo';
// import { FaArrowLeft } from "react-icons/fa6";
// import axios from 'axios';


// function Members() {

//     const navigate = useNavigate()
//     const location = useLocation()
//     const params = useParams()
//     console.log(params, location);

//     const { personalId } = params
//     const { name,age,userid } = location.state || {};
  


//     const personalInfo = async () => {
//         try {
//             const res = await axios.get(`http://103.191.208.95/api/v1/admin/personalDetails?Name=${name}&Age=${age}&Userid=${userid}` );
//         }

//         catch {

//         }
//     }
//     useEffect(() => {
//         personalInfo()
//     }, [])

//     return (
//         <div>
//             <div className='py-[25px] px-[50px] lg:[80px] xl:px-[100px]'>
//                 <div className='flex  items-center gap-[10px] text-[#7181ee]'>
//                     <p><FaArrowLeft /></p>
//                     <p onClick={() => navigate(-1)}>Back to Dasboard</p>
//                 </div>
//                 <h1 className='text-[25px] lg:text-3xl font-bold mt-[15px]'>Member Details - Rajesh Kumar</h1>
//                 <p className='mt-[10px]'>Member Details - Rajesh Kumar</p>
//                 <div className='flex gap-[25px]'>
//                     <div className='w-[70%]'>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl '>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Personal Information</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Full Name</p>
//                                     <p>Rajesh Kumar</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Relation</p>
//                                     <p>Head of Family</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Age</p>
//                                     <p>45 years</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Date of Birth</p>
//                                     <p>1979-05-15</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Gender</p>
//                                     <p>Male</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Marital Status</p>
//                                     <p>Married</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Blood Group</p>
//                                     <p>B+</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Religion</p>
//                                     <p>Hindu</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Caste</p>
//                                     <p>General</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Nationality</p>
//                                     <p>Indian</p>
//                                 </div>



//                             </div>
//                         </div>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Personal Information</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Phone Number</p>
//                                     <p>+91 9876543210</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Email Address</p>
//                                     <p>rajesh.kumar@email.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Education Details</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Highest Qualification</p>
//                                     <p>Bachelor of Engineering</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Institution</p>
//                                     <p>Government Engineering College</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Year of Passing</p>
//                                     <p>2001</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Specialization</p>
//                                     <p>Civil Engineering</p>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Employment Details</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Occupation</p>
//                                     <p>Government Employee</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Employer</p>
//                                     <p>Kerala Public Works Department</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Designation</p>
//                                     <p>Assistant Engineer</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Monthly Salary</p>
//                                     <p>₹65,000</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Work Address</p>
//                                     <p>PWD Office, Kozhikode</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p></p>
//                                     <p></p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Experience</p>
//                                     <p>20 years</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Joining Date</p>
//                                     <p>2004-06-01</p>
//                                 </div>


//                             </div>
//                         </div>



//                     </div>
//                     <div className=' w-[30%]'>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Health Information</h1>
//                             <div className='mt-[15px]'>
//                                 <p className='mb-[5px]'>Health Status</p>
//                                 <span className='bg-[#dbeafe] px-[10px] py-[4px] rounded-2xl text-[#1e43b1] font-semibold'>Good</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Blood Pressure</p>
//                                 <span className=''>120/80</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p className='mb-[5px]'>Chronic Diseases</p>
//                                 <span className='bg-[#fee2e2] px-[10px] py-[5px] rounded-2xl text-[#9a1d1c] font-semibold'>Diabetes</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p className='mb-[5px]'>Allergies</p>
//                                 <span className='bg-[#ffedd5] px-[10px] py-[5px] rounded-2xl text-[#bf6436]'>Peanuts</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Last Checkup</p>
//                                 <p className=''>2024-01-15</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Insurance Number</p>
//                                 <p className=''>INS123456789</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Emergency Contact</p>
//                                 <p className=''>+91 9876543211</p>
//                             </div>



//                         </div>

//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Government IDs</h1>
//                             <div className='mt-[15px]'>
//                                 <p>Aadhar Number</p>
//                                 <p className=''>1234-5678-9012</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>PAN Number</p>
//                                 <p className=''>PAN Number</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Voter ID</p>
//                                 <p className=''>ABC1234567</p>
//                             </div>
//                         </div>

//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Bank Details</h1>
//                             <div className='mt-[15px]'>
//                                 <p>Bank Name</p>
//                                 <p className=''>State Bank of India</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Branch</p>
//                                 <p className=''>Kozhikode Main Branch</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Account Number</p>
//                                 <p className=''>1234567890123456</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>IFSC Code</p>
//                                 <p className=''>SBIN0001234</p>
//                             </div>

//                         </div>


//                     </div>
//                 </div>
//                 <div></div>


//             </div>



//         </div>

//     )
// }

// export default Members





import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import useHomeStore from "../store/homeStore";

function Members() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const { personalId } = params;
  const { name, age, userid } = location.state || {};

  const { personalData, loading, error, fetchPersonalData } = useHomeStore();

  useEffect(() => {
    if (name && age && userid) {
      fetchPersonalData(name, age, userid);
    }
  }, [name, age, userid, fetchPersonalData]);

  if (loading) return <p className="p-10 text-xl">Loading member data...</p>;
  if (error) return <p className="p-10 text-red-500">Error: {error}</p>;

  return (
    <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]">
      <div className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer">
        <FaArrowLeft />
        <p onClick={() => navigate(-1)}>Back to Dashboard</p>
      </div>

      <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
        Member Details - {personalData?.Name || "N/A"}
      </h1>
      <p className="mt-[10px]">Detailed personal and family information</p>

      <div className="mt-10">
        <pre className="bg-gray-100 p-5 rounded-lg text-sm">
          {JSON.stringify(personalData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default Members;
