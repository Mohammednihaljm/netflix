import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'

import NavBar from '../Components/Navbar/NavBar'

import RowPost from '../Components/RowPost/RowPost'
import { action, comedy, Documentaries, Horror, originals, Romance } from '../urls'





const Home = () => {
  return (
    <div>
        
        
        
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'  />
        <RowPost url={action} title='Action' isSmall/>
        <RowPost url={Romance} title='Romance' isSmall/>
        <RowPost url={Horror} title='Horror' isSmall/>
        <RowPost url={comedy} title='Comedy' isSmall/>
        <RowPost url={Documentaries} title='Documentaries' isSmall/>
       
        <Footer/>

    </div>
  )
}

export default Home