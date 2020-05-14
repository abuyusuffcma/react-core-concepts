import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = [
    {name:'Mukul', age:'37', job:'Engineer'},
    {name:'Masud', age:'36', job:'Banker'},
    {name:'Alom', age:'37', job:'Software Engineer'},
    {name:'Jamal', age:'40', job:'Engineer'},
    {name:'Manik', age:'35', job:'Engineer'},
    {name:'Alom', age:'37', job:'Software Engineer'},
    {name:'Jamal', age:'40', job:'Engineer'}
  ]
  const products = [
    {name:'Photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$65.99'},
    {name:'Photoshop Pro', price:'$234.99'},
    {name:'Illustrator Pro', price:'$234.99'},
    {name:'Adobe Pro', price:'$234.99'}
   
]
const nayoks = ['Razzak', 'Jasim', 'Salman', 'Alamgir','Masum']
  return (
    <div className="App">
      <p>I am React Man</p>
      <Counter></Counter>
      <Users></Users>

      <ul>
        {
          friends.map(friend =><Friend friend={friend}></Friend>)
        }
      </ul>
      
      <ul>
         {
         nayoks.map(x => <li>{x}</li>)
         }
      </ul>
      <ul>
        {
          products.map(p => <Product p={p}></Product>)
        }
      </ul>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  

  return(
    <div>
      <h3> Count: {count}</h3>
      <button onClick = {()=> setCount(count - 1)}>Decrease</button>
      <button onClick = {()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Friend(props){
  const friendStyle = {
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    margin:'20px 20px',
    height: '250px',
    width: '250px',
    float: 'left'
  }
  const {name, age, job} = props.friend
  return (
    <div style = {friendStyle}>
        <h2>{name}</h2>
        <h3>age:{age}</h3>
        <h3>Profession: {job}</h3>



    </div>
  )
}

function Product(props){
  const productStyle = {
    backgroundColor: 'grey',
    borderRadius: '10px',
    margin:'10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.p
  return (
    <div style = {productStyle}>
      <h3>{name}</h3>
      <h2> {price}</h2>
      <button style = {{backgroundColor:'white', border:'1px solid white', borderRadius: '5px', padding: '5px'}}> Shop Now</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])

  useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))

  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ol>
      {
        
         users.map(user => <li>Name : {user.name}, E-mail : {user.email}</li>)
      
      }
       </ol>

    </div>
  )
}

export default App;
