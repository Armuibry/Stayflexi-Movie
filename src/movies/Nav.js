import React, {useEffect, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';

import "./Nav.css"

function Nav() {

    const [show , setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setShow(true);
            }else setShow(false)
        })
    })
    return (
        <div className={`navbar ${show && "nav_scroll"}`}>
            <img
                className='nav_logo'
                src="flixtv.png"
                alt="Netflix Logo" />

                <div className="search">
                <input type="text" />
                <SearchIcon className='searchIcon' style={{fontSize:"35px", marginLeft:"-2.5rem", color:"black"}}/>
                </div>

            <img
                className='nav_avatar'
                src="avatar.png"
                alt="Login Avatar" />
        </div>
    )
}

export default Nav