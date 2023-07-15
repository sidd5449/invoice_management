import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'

const Landing = () => {
  return (
    <div className="app__landing">
        <Navbar />
        <Sidebar />
        <Footer />
    </div>
  )
}

export default Landing