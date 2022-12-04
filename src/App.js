import logo from './logo.svg';
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
  backgroundColor: 'red',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}

function Country(props) {
  return (
    <div style={styleSence}>
      <h2>Country Name: {props.name}</h2>
      <p>Speciality: {props.speciality}</p>
    </div>
  )
}





export default App;
