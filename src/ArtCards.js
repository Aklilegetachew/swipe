// import { Key } from '@mui/icons-material';
import axios from './axios';
import React, {useState, useEffect}  from 'react';
import TinderCard from 'react-tinder-card';

import './artCards.css';

export default function ArtCards() {
       
    const [arts, setArts] = useState([]);

    useEffect(() => {
        async function getData(){
            const req = await axios.get("/swipe/Cards");
            
            setArts(req.data);
        }
          
        getData(); 
       
    }, [])

    const swiped= (dir, id)=>{
        // console.log(nametoDelete)
        let newValueLike =arts.likes+1;
        let newValuedisLike =arts.dislikes+1;
        console.log(id)
        if (dir === "right"){
         axios.put(`/swipe/cards${id}`, { likes: `${newValueLike}` })
           .then(res=>{
               console.log("updated")
           }).catch(err=>{console.log(err)})
            
        }else if(dir=== "left"){
            
            axios.put('/swipe/cards/'+ id, { dislikes: `${newValuedisLike}` })
            .then(res=>{
                console.log("updated")
            }).catch(err=>{console.log(err)})
            
        }else{
            return;
        }
        
       // setLastDirction(dir)
    }
    const outOfFrame =(name)=>{
        console.log("hey")
    }

    return (

       
        <div className="artCards">
            <div className="tinderCards__contain">
              
            {arts.map((arts)=>(
             
             <TinderCard
             className='swip'
             key={arts.id}
             preventSwipe={["up", "down"]}
             onSwipe= {(dir)=>swiped(dir,arts._id)}
             onCardLeftScreen = {()=>outOfFrame(arts.name)}
             >
                 <div
                  
                  style={{backgroundImage: `url(${arts.imgurl})`}}
                  className="card"
                 >
                  <h3 > {arts.name}</h3>
                  <h3 > {arts.likes}</h3>
                 </div>

             </TinderCard>  
            ))}
            </div>

            
            
        </div>
    )
}
