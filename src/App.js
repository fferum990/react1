import { useState } from 'react'
import List from './List.js'
import Form_list from './Form_list'
function App() {
  const [lists,setList] = useState([])

  const addList = () =>{

  }
  const removeList = () =>{

  }
  const handleToggle = () =>{

  }
  
  return (
   
    <div className="App">
      <header>
        <h1>Колличество элеметнов списка: {lists.length}</h1>
      </header>
      <Form_list />
      {lists.map((list) => {
        return (
          <List
          key={list.id} />
        )
      })}
    </div>
  );
}

export default App;