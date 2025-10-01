import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft, GoArrowRight} from "react-icons/go";
const NextPre = ({id,currentProject,projectsData}) => {
    const navigate = useNavigate();

  return (
    <div className="flex justify-between next-pre-box border-b-gray-500 md:py-10 py-6 mt-12">
    {Number(id) !== 1 && (
      <div
        className="flex gap-3 cursor-pointer"
        onClick={() => navigate(`/projectdetail/${Number(id) - 1}`)}
      >
        <GoArrowLeft size={20} />
        <div>
          <p className="md:text-xl text-lg text-gray-400"> Previous </p>
          <h2 className="mt-1 text-2xl next-pre-heading  text-green-900 hover:text-orange-400 font-semibold">
             {currentProject?.preproject?.title}
          </h2>
        </div>
      </div>
    )}

    {Number(id) !== projectsData.length && (
           <div
                className="flex ml-auto gap-3 cursor-pointer"
                onClick={()=>navigate(`/projectdetail/${Number(id)+1}`)}
              >
                <div className='flex flex-col items-end'>
                  <p className="md:text-xl text-lg text-gray-400 float-right">
                    
                    Next 
                  </p>
                  <h2 className="mt-1 text-2xl next-pre-heading text-green-900 hover:text-[#CCB100] font-semibold ">
                  {currentProject?.nextproject?.title}
                 
                  </h2>
                </div>
                <GoArrowRight size={20} />
              </div>
    )}
  </div>
  )
}

export default NextPre