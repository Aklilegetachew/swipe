import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

import './swipBottom.css';



export default function SwipBottom() {
    return (
        <div  className="SwipButtons">
            <IconButton className='SwipButtons_repet'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className='SwipButtons_close'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='SwipButtons_star'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='SwipButtons_fav'>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='SwipButtons_flash'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
            
        </div>
    )
}
