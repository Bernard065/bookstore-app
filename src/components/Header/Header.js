import React from 'react'
//import Navbar from '../Navbar/Navbar'
//import Search from '../Search/Search'
import './Header.css'

const Header = () => {
  return (
    <div className='main-header'>
        <div className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your favorite book</h2><br />
                <p className='header-text fs-18 fw-3'>Escape into a world of imagination and knowledge with our vast selection of books. From page-turning fiction to informative non-fiction, we have something for everyone to enjoy. Start your journey today!</p>
            </div>
        </div>
    </div>
  )
}

export default Header