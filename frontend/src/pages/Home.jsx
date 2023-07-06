/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { Card,FormField, Loader, } from '../components/componentExport'


const RenderCards = ({data,title}) =>{
    if(data?.length > 0) return data.map((post)=>{
      <Card key={post._id} {...post}/>
    })

    return (
      <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}


const Home = () => {
  const [loading,setLoading] = useState(false);
  const [allpost,setAllPosts] = useState(null);
  const [searchText,setSearchText] = useState(""); 
  return (
   <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
      <p>Image Generator AI tool using Dall-E and Open AI</p>
    </div>

    <div className="mt-16">
      <FormField />
    </div>

    <div className='mt-10'>
      {loading? (
        <div className='flex justisfy-center items-center'>
          <Loader />
        </div>
      ):<>
        {
          searchText && (
            <h2 className='font-medium text-[#666e75] text-xl mb-3'>Showing Results for {searchText}</h2>
          )}
          
        <div className='grid lg:grid-cols-4 xs:grid-cols-2 sm:grid-cols-3 grid-col-1 gap-3'>
            {
              searchText ? (
                <RenderCards data={[]} title="No Search Results Found" />
              ):(
                <RenderCards data={[]} title="No Posts Found" />
              )
            }
            
        </div>
      </>
    }
    </div>
   
   </section>
  )
}

export default Home
