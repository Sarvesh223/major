import React, { useState } from 'react'
import { MdCheckCircle, MdShare } from 'react-icons/md'
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Donation from './Donation'
import { CharityStruct, SupportStruct } from '@/utils/type.dt'
import Image from 'next/image'

interface ComponentProp {
  charity: CharityStruct
  supports: SupportStruct[]
}

const Details: React.FC<ComponentProp> = ({ charity, supports }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this amazing charity: ${charity.name} - ${charity.profile}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(charity.profile)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Support ${charity.name}`)}&url=${encodeURIComponent(charity.profile)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(charity.profile)}`
  }

  const handleShare = () => {
    setIsShareModalOpen(!isShareModalOpen)
  }

  const openShareLink = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'noopener,noreferrer')
    setIsShareModalOpen(false)
  }

  return (
    <div className="flex flex-col w-full md:w-2/3 space-y-6 relative">
      <h4 className="text-4xl font-semibold capitalize">{charity?.name}</h4>
      
      <div className="w-full h-[500px] relative">
        <Image
          layout="fill"
          src={charity?.image}
          alt="donation"
          className="rounded-xl object-cover"
        />
      </div>
      
      <p className="sm:flex justify-start items-center sm:space-x-1">
        <span>Your Donation Makes a Big Difference.</span>
        <span className="flex">
          <MdCheckCircle size={25} className="text-green-600" />
          <a target="_blank" href={charity.profile} className="underline">
            Learn more
          </a>
        </span>
      </p>
      
      <hr className="border-t border-gray-300" />
      
      <p>{charity?.description}</p>
      
      <div className="flex justify-start items-center space-x-4">
        <button
          className="border border-gray-300 py-3 px-20 rounded-lg 
          transition-all duration-300 ease-in-out hover:bg-gray-100"
        >
          Donate
        </button>
        
        <button
          onClick={handleShare}
          className="border border-gray-300 py-3 px-20 rounded-lg 
          transition-all duration-300 ease-in-out hover:bg-gray-100 
          flex items-center space-x-2"
        >
          <MdShare />
          <span>Share</span>
        </button>
      </div>
      
      {isShareModalOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border rounded-lg shadow-lg p-4 z-10">
          <div className="flex space-x-4">
            <button 
              onClick={() => openShareLink('whatsapp')} 
              className="text-green-500 hover:bg-green-50 p-2 rounded-full"
            >
              <FaWhatsapp size={24} />
            </button>
            <button 
              onClick={() => openShareLink('facebook')} 
              className="text-blue-600 hover:bg-blue-50 p-2 rounded-full"
            >
              <FaFacebook size={24} />
            </button>
            <button 
              onClick={() => openShareLink('twitter')} 
              className="text-blue-400 hover:bg-blue-50 p-2 rounded-full"
            >
              <FaTwitter size={24} />
            </button>
            <button 
              onClick={() => openShareLink('linkedin')} 
              className="text-blue-700 hover:bg-blue-50 p-2 rounded-full"
            >
              <FaLinkedin size={24} />
            </button>
          </div>
        </div>
      )}
      
      <hr className="border-t border-gray-300" />
      
      <div>
        <h4 className="font-semibold text-lg mb-1">Words of support ({supports.length})</h4>
        <p className="mb-4 text-gray-600">Please donate to share words of support.</p>
        
        <div className="flex flex-col space-y-10">
          {supports.map((support: any, i: number) => (
            <Donation comment support={support} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details