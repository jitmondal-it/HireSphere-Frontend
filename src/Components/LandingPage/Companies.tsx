import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../../Data/data'


const Companies = () => {
  return (
    <div className="mt-20 pb-5">
  <div className="text-3xl text-center text-mine-shaft-100 mb-10 font-semibold">
    Trusted By <span className="text-bright-sun-400">10k+</span> companies
  </div>

  <Marquee pauseOnHover={true}>
    {companies.map((company, index) => (
      <div
        key={index}
        className="mx-8 px-6 py-4 bg-mine-shaft-900/40 
        hover:bg-mine-shaft-800 rounded-xl 
        flex items-center justify-center 
        w-35 h-20 transition-all duration-300"
      >
        <img
          className="max-h-12 max-w-full object-contain rounded-xl "
          src={`/Companies/${company}.png`}
          alt="company logo"
        />
      </div>
    ))}
  </Marquee>
</div>
  )
}

export default Companies