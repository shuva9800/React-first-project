import { useState } from 'react';
import './AdditionalForm.css'

function AdditionalForm(props){
    let [newTitle, setnewTitle] =useState(" ")
    let[newDate, setnewDate] = useState(" ")


    function textContent(event){
     setnewTitle(event.target.value);
    //  console.log(newTitle);

    }
     

    function inputDate(event){
        setnewDate(event.target.value);
        // console.log(newDate);

    }


    function changeDetails(event){
       
    event.preventDefault();
    let newDetails={
        addItem:newTitle,
        mfgDate:newDate
    };
    console.log("i am inside changeDetails function");
    // console.log(newDetails);
    props.onNewlaunch(newDetails);

    setnewTitle("");
    setnewDate("");

    }
    return(
        <form onSubmit={changeDetails}>
        <div className='info-form'>
            <div>
                <label for="inputname">New Product</label>
                 <input type="text" placeholder="Enter Name" value={newTitle} title='inputname'  onChange={textContent} ></input>

            </div>

            <div>
                <label for="inputdate">New Date</label>
                <input type="date"  value={newDate} min={2017-5-12} max={2023-9-16} onChange={inputDate}></input>

            </div>

            <button>Add Product</button>
        </div>
        </form>
    )
}


export default AdditionalForm;