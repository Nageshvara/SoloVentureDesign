import React from 'react'

function AboutUs() {
  return (
    <div className='md:mt-12 relative md:mb-16'>
          <h1 className='text-4xl font-bold text-center tracking-[-0.02em] md:text-6xl md:leading-[5rem] text-[#F7DC6F]' style={{ fontFamily: 'Habanero, sans-serif' }}>
            About Us
          </h1>
          <div className='relative top-8'>
            <div className='absolute inset-0 flex justify-center items-center'>
              <h1 className='text-7xl text-[#FCF6F5FF] opacity-10' style={{ fontFamily: 'Habanero, sans-serif' }}>SV</h1>
            </div>
            <p className='text-center text-xl md:text-2xl md:px-36 px-8 text-[#FCF6F5FF] relative z-10' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            SoloVenture caters to individuals who enjoy traveling alone and seeking out novel experiences. We cater to individuals who desire adventure and independence while maintaining hassle-free, well-organized travel experiences.
            </p>
          </div>
      </div>
  )
}

export default AboutUs
