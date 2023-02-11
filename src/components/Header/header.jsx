import React from 'react';
import Navbar from '../Navbar/navbar';
import SearchForm from '../SearchForm/searchform';
import "./header.css"

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice</h2><br/>
                <p className='header-text fs-18 fw-3'>Find all kinds of books here - books from your favorite authors, books from your favorite genre, and so much more! Enjoy all of you bookworms! </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header