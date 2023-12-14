import './Products.css'

import ProductItem from'./ProductItem'


function Products(props){
    return(
        <div className="products">
            <ProductItem
               title={props.value[0].title}
               amount={props.value[0].amount}
               date={props.value[0].date}

            />

            <ProductItem
               title={props.value[1].title}
               amount={props.value[1].amount}
               date={props.value[1].date}

            />

            <ProductItem
               title={props.value[2].title}
               amount={props.value[2].amount}
               date={props.value[2].date}

            />

            <ProductItem
               title={props.value[3].title}
               amount={props.value[3].amount}
               date={props.value[3].date}

            />
        </div>
    )
}
export default Products;