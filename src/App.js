import logo from './logo.svg';
import './App.css';
import {React,useState} from 'react';
import ReactDOM from 'react-dom';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function Hello(){
//   return <div>Hello React!</div>;
// }
//
// export default Hello;

// function Button(){
//   return <button>TEST</button>;
// }
//
// export default Button;

/*
function Button(){
    const [counter, setCounter] = useState(0);
    return (
        <button onClick={() => setCounter(counter+1)}>
            {counter}
        </button>
    );
}

function Display(){
    return (
        <div>
            ...
        </div>
    );
}

export {Button, Display};
*/

function Button(props){
    return (
        <button onClick={props.onClickFunction}>
            +1
        </button>
    );
}

function Display(props){
    return (
      <div>{props.message}</div>
    );
}

function App(){
    const [counter,setCounter] = useState(42);
    const incrementCounter = () => setCounter(counter+1);
    return (
        <div>
            <Button onClickFunction={incrementCounter}/>
            <Display message={counter}/>
        </div>
    );
}

export {Button,Display,App};
