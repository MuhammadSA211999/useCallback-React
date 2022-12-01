import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { useState } from 'react';
import ShowCount from './components/ShowCount';
import Button from './components/Button';

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increamentByOne = () => {
    setCount1((prevCount) => prevCount + 1)
  }

  const increamentByFive = () => {
    setCount2((prevCount) => prevCount + 5)
  }
  return (
    <div className="App">
      <Title></Title>
      <ShowCount count={count1} title="counter 1"></ShowCount>
      <Button handleClick={increamentByOne}>Increament by One</Button>
      <hr />
      <ShowCount count={count2} title="counter 5"></ShowCount>
      <Button handleClick={increamentByFive}>Increament By Five</Button>

    </div>
  );
}

export default App;
