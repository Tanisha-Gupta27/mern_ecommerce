import React from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <>
      <HomeCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
      </div>
    </>
  )
}

export default HomePage
