//Definición de componente Hello y App
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Peter', age: 17 },
    { name: 'Naira', age: 7 },
    { name: 'Lidia', age: 2 },
  ]
  const friends2=['Naira','Lidia','Peter']
  return (
    <div>
      <Hello name='Naira' age={7}/>
       <p>{friends[1].name} tiene {friends[1].age} años</p>
       <p>{friends[2].name} tiene {friends[2].age} años</p>
    <p>{friends2}</p>
    </div>
  )
}

export default App
