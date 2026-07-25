import './App.css'
import MyArray from './Componente/MyArray'
import MyComponente from './Componente/MyComponente'

function App() {
  const arr = [1,2,3,4,5]
  function btn_Click(e){
    console.log(e);
    alert("Button has been clicked");
  }
  return (
    <>
      <div className="App">
        <h1>React App</h1>
      </div>
      <MyArray />
      <MyComponente />
      <MyComponente array={arr} />
      <MyArray caption='Click Me coming from App.jsx' />
      <button onClick={btn_Click}>Click me</button>
    </>
  )
}

export default App
