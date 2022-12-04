import { useState } from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h2>Recap Country</h2>
      <Country name={'Noakhali'} speciality={'bivhag'}></Country>
      <Country name={'katabon'} speciality={'jaiga nai'}></Country>
      <Country name={'shundorbon'} speciality={'lage dom'}></Country>
    </div>
  );
}


const styleSence={
  backgroundColor: 'gray',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}





function Country(props) {
  const [power, setPower]= useState(1);
  const powerBoost = ()=> {
    const newPower = power * 2;
    setPower(newPower)
  }
  
  return (
    <div style={styleSence}>
      <h2>Country Name: {props.name}</h2>
      <p>Speciality: {props.speciality}</p>
      <h4>Power: {power}</h4>
      <button onClick={powerBoost}>Boost Power</button>
    </div>
  )
}





export default App;
