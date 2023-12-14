import logo from './logo.svg';
import './App.css';
import Products from './Component/Products'
import AdditionalItem from './Component/AdditionalItem'

function App() {
  const product=[
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ]

  function newProductdetails(productvalue){
    console.log("iam inside App.js")
    console.log(productvalue);
  }
  return (
    <div className="App">
    <AdditionalItem additionofproduct={newProductdetails}/>
    <Products value={product}/>   
      
    </div>
  );
}

export default App;
