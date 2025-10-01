import React from 'react'
import { useNavigate } from 'react-router-dom'
const truncateDescription = (description, maxWords = 20) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };
const PressCard = ({press,index}) => {

    const navigate =  useNavigate();
  return (
    <div key={index} className="bg-white shadow overflow-hidden rounded-lg" onClick={()=>navigate(`/press/${index+1}`)}>
        <img
          className="w-full h-48  object-cover  object-center"
          src={`https://picsum.photos/200/300?image=${index + 1000}`}
          alt={`Press Kit ${index + 1}`}
        />
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">{press.title}</h3>
          <p className="text-sm text-gray-600 mb-2">Date: {press.date}</p>
          <p className="text-sm text-gray-600 mb-2">Author: {press.author}</p>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{truncateDescription(press.description)}</p>
          <a href="#" className="text-green-600 hover:text-green-800 font-medium">
            Read More
          </a>
        </div>
      </div>
  )
}

export default PressCard