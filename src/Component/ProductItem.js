import React, { useState } from 'react';

import './ProductItem.css'

import ProductDate from'./ProductDate'

function ProductItem(props){
    let[title, setTitle]=useState(props.title);
    function changeHandeler(){
        setTitle("gandu");
        console.log("submit is click")
        console.log(title)

    }

    // let taka =props.amount;
    return(
        <div className="product-item">
            <ProductDate datedata={props.date} />
            <div className="product-item-title">
            <h2 >{title}</h2>
            </div>
            {/* <p>{taka}</p> */}

            <button onClick={changeHandeler}>submit</button>

        </div>
    );
}

export default ProductItem;