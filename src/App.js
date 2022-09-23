import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div >
      <h2> Comments: {comments.length}</h2>
      {comments.map((comment) => (
        <Comment email={comment.email} body={comment.body}></Comment>
      ))}
    </div>
  );
}

function Comment(props) {
  return (
    <div style={{
      backgroundColor: 'lightsalmon',
      margin: '20px',
      padding: '20px',
      border: '5px solid red',
      borderRadius: '20px',
    }}>
      <h4>Email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);

  const handleDecrease = () => setCount(count - 1);

  return (
    <div
      style={{
        backgroundColor: 'goldenrod',
        margin: '20px',
        padding: '20px',
        border: '5px solid red',
        borderRadius: '20px',
      }}
    >
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease} style={{ backgroundColor: 'green', margin: '2px' }}>
        Increase
      </button>
      <button onClick={handleDecrease} style={{ backgroundColor: 'red', margin: '2px' }}>
        Decrease
      </button>
    </div>
  );
}

export default App;
