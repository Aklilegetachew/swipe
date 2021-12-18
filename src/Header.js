import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

import './header.css';

export default function Header() {
    return (
        <div className="header">
            
            <IconButton>
            <ThumbDownAltIcon fontSize='large' className='header_icon' />
            </IconButton>
           
           <h1>ARTS contest</h1>
           
           <IconButton>
           <ThumbUpIcon fontSize='large' className='header_icon'/>
           </IconButton>
           
             
        </div>
    )
}
