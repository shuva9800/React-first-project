import React from 'react';
import './ProductDate.css'


function ProductDate(props){
    const month = props.datedata.toLocaleString('en-US', { month: 'long' });
    const day = props.datedata.toLocaleString('en-US', { day: '2-digit' });
    const year = props.datedata.getFullYear();
    return(
        <div className="productdate-details">
          <div className='mfg-day'> {day}</div>  
          <div className='mfg-month'>{month}</div> 
          <div className='mfg-year'>{year}</div> 
        </div>

    );

}

export default ProductDate;