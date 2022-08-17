import React from 'react';
import BoxInfo from './Box-Info';


const Card = (item) => {
  return (
    <div>
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img className='cardImg' src={item.image} alt={item.title}></img>
            </div>
            {/* <div className='infoContainer'>
                <h3 className='name'>{props.title}</h3>
                <h3 className='description'>{props.description}</h3>
            </div> */}
            
        </div>
        <BoxInfo title={item.title} description={item.description} />
    </div>
  )
}

export default Card;