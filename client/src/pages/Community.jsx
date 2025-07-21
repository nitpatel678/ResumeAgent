import React, { useEffect } from 'react'
import { useState } from 'react'
import {useUser} from '@clerk/clerk-react'
import {dummyPublishedCreationData} from '../assets/assets'
import { Heart } from 'lucide-react';
function Community() {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if(user){
      fetchCreations();
    }
  }, [user]);

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6' >
      <h3 className='font-poppins font-normal text-md'>Public Avaialable Creations</h3>
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll p-4'>
  <div className='flex flex-wrap gap-4 justify-start'>
    {creations.map((creation, index) => (
      <div key={index} className='relative group w-full sm:w-[48%] lg:w-[32%]'>
        <img
          src={creation.content}
          alt=''
          className='w-full h-64 object-cover rounded-lg'
        />
        <div className='absolute bottom-0 left-0 right-0 top-0 flex gap-2 
            items-end justify-end group-hover:justify-between p-3 
            group-hover:bg-gradient-to-b from-transparent to-black/80 
            text-white rounded-lg'>
          <p className='text-sm hidden group-hover:block'>{creation.prompt}</p>
          <div className='flex gap-1 items-center'>
            <p>{creation.likes.length}</p>
            <Heart
              className={`w-5 h-5 hover:scale-110 cursor-pointer ${
                creation.likes.includes(user?.id)
                  ? 'fill-red-600 text-red-700'
                  : 'text-white'
              }`}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Community