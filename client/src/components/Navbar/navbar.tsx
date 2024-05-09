import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <a className="title" href='/'>Msushi Music</a>
            <a className="pagelink" href='/'>All Reviews</a>
            <a className="pagelink" href='/'>Lists</a>
            <div className="icons">
                a
            </div>
            <div className="search">
                <SearchIcon></SearchIcon>
                <a>Search</a>
            </div>
        </div>
    )
}

export default Navbar
