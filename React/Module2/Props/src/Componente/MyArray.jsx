function MyArray(props) {
    console.log(props);

  return (
    <div>
      <h1>This is MyArray</h1>
      <button>{props.caption}</button>
    </div>
  )
}

export default MyArray