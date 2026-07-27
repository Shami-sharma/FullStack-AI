import './App.css'
import MyArray from './Componente/MyArray'
import MyComponente from './Componente/MyComponente'

function App() {
  const arr = [1,2,3,4,5]
  const names =['Ritik','Anshul','Prachi','sam']
  function btn_Click(e){
    console.log(e);
    alert("Button has been clicked");
  }
  return (
    <>
      {names.map((elem, index) => (
        <p key={index}>{elem}</p>
      ))}
      <MyComponente array={arr} />
      <MyArray caption='Click Me coming from App.jsx' />
      <button onClick={btn_Click}>Click me</button>
    </>
  )
}

export default App
