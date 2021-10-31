import { useState } from 'react'
import List from './List.js'
import Form_list from './Form_list'
function App() {
  const [lists,setLists] = useState([])

  const addList = (userInput) => {
    if (userInput){
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setLists([...lists, newItem])
    }

  }
  const removeList = (id) =>{
    setLists([...lists.filter((list) => list.id !== id)])
  }
  const handleToggle = (id) =>{
    setLists([
      ...lists.map((list) => 
        list.id === id ? { ...list, complete: !list.complete } : {...list }
      )
    ])
  }
  
  return (
   
    <div className="App">
      <header>
        <h1>Колличество элеметнов списка: {lists.length}</h1>
      </header>
      <Form_list addList={addList} />
      {lists.map((list) => {
        return (
          <List
          list={list}
          key={list.id}
          toggleList={handleToggle}
          removeList={removeList} />
        )
      })}
    </div>
  );
}

export default App;