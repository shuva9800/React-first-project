import './AdditionalItem.css'
import AdditionalForm from './AdditionalForm'
function AdditionalItem(props){
    function newAddition(productitem){
        console.log("i am inside additionalForm")
        console.log(productitem);
        props.additionofproduct(productitem);

    }


    return(
        <AdditionalForm onNewlaunch={newAddition} />
        // ClassName='additional-item-details'
        )
}



export default AdditionalItem;
