import Link from 'next/link'
import React from 'react'
import { MdSunnySnowing } from 'react-icons/md'

const Footer: React.FC = () => {
  return (
    <>
      
      <div className="border-t border-gray-300 py-5 my-10">
        <div className="lg:w-2/3 w-full mx-auto px-5">
          <div
            className="flex flex-col sm:flex-row
            justify-center sm:justify-between"
          >
            <p className="flex space-x-4 items-center text-gray-600">
              With ♥️ Charity &copy;{new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
