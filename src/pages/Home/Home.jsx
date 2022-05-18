import React from 'react'
import Featured from '../../components/home/Featured'
import FeaturedProperties from '../../components/home/FeaturedProperties'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import MailList from '../../components/common/MailList'
import Nav from '../../components/common/Nav'
import PropertyList from '../../components/home/PropertyList'

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className=' mx-auto py-10 max-w-[1042px]'>
        <Featured />
        <h1 className='text-3xl  py-10 mt-10 font-bold'>Browse by property type</h1>
        <PropertyList />
        <h1 className='text-3xl  py-10 mt-10 font-bold'>Homes guests love</h1>
        <FeaturedProperties />
      </div>
      <MailList />
      <Footer />
      <h5 className="text-xl mx-auto text-center bg-blue-800 text-white py-4 font-bold">Made By Love Mohammed 💚</h5>
    </div>
  )
}

export default Home