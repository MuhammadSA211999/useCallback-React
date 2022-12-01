import './App.css';
import Title from './components/Title';
import { useState } from 'react';
import ShowCount from './components/ShowCount';
import Button from './components/Button';
import { useCallback } from 'react';

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increamentByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1)
  }, [])

  const increamentByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5)
  }, [])

  const isEvenOdd = (count1) => count1 % 2 === 0



  return (
    <div className="App">
      <Title></Title>
      <span>{isEvenOdd ? "even" : "odd"}</span>
      <ShowCount count={count1} title="counter 1"></ShowCount>
      <Button handleClick={increamentByOne}>Increament by One</Button>
      <hr />
      <ShowCount count={count2} title="counter 5"></ShowCount>
      <Button handleClick={increamentByFive}>Increament By Five</Button>

    </div>
  );
}

export default App;
