import { useState } from 'react'
import './App.css'

// 1 State using class based component

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {count: 0}
//   }
//   Increment = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Welcome to class based state component</h1>
//         <p>Clicked {this.state.count} times</p>
//         <button onClick={this.Increment}>Click Me</button>
//       </div>
//     )
//   }

// }

// 2 counter project 

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.State ={
//       text: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };

//   render() {
//     const text = this.state.text;
//     const charCount = text.length;

//     return (
//       <div>
//         <h2>Character count</h2>
//         <textarea
//           rows="5"
//           cols="20"
//           placeholder="Type your post here..."
//           value={text}
//           onChange={this.handleChange}
//         ></textarea>
//         <p>Character count: {charCount}</p>
//       </div>
//     );
//   }
// }

// 3. State with function components

function App(){
  const [count, setCount] = useState(0);

  function inc(){
    setCount(count + 1)
  }

  function dec(){
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      {count}
    </div>
  );
}


export default App
