import React from 'react'
import Button from './components/Button'

function Header() {
  return (
    <div className='header'>
        <div className="title">
            <img src="https://templatepreview.website.com/remote/imageProxy.cfc?method=viewLibraryImage&s=QFpGNUFbKFI1OzdfSEFMOyknUFpFODk1KFJXI18wOTMvLEs%2BTyYxWz0uM1QgCg%3D%3D&w=100" alt="" className="logo" />
            <h1 className="title-txt">LITERACY</h1>
        </div>
        <div className="menu">
            <ul className="menu-items">
                <li className="menu-item">Home</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Blog</li>
                <li className="menu-item">Contact</li>
                <li className="menu-item"><Button></Button></li>
            </ul>
        </div>
    </div>
  )
}

export default Header