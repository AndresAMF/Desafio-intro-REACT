import React from 'react';
import BoxInfo from './Box-Info';
import './Card.css';

const Card = (props) => {
  return (
    <div>
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img className='cardImg' src={props.image} alt={props.title}></img>
            </div>
            {/* <div className='infoContainer'>
                <h3 className='name'>{props.title}</h3>
                <h3 className='description'>{props.description}</h3>
            </div> */}
            
        </div>
        <BoxInfo title={props.title} description={props.description} />
    </div>
  )
}

export default Card;