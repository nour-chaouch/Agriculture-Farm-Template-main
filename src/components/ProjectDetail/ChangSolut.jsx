import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
const ChangSolut = () => {
  return (
    <div
    style={{ border: "1px solid  lightgray" }}
    className="rounded md:px-16 md:pt-14 md:pb-10  px-5 pt-8 pb-6 md:mb-0 mb-7"
  >
    <h3 className="text-2xl mb-4">Challenges</h3>
    <p className="opacity-[.8] mb-7 text-[16px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      porttitor dolor eu fringilla tristique. Curabitur eget velit
      facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit
      metus, non aliquet neque.
    </p>

    <div>
      {[...new Array(6)].map((elm) => (
        <div className="flex gap-3 mb-4">
          <span>
            <GoCheckCircleFill
              size={20}
              className="text-orange-400 mt-[3px]"
            />
          </span>
          <p className="opacity-[.9] text-[16px] text-gray-700">
            Proin lobortis rutrum leo, a ultrices mauris euismod
            porttitor.
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ChangSolut