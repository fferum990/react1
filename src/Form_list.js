import { useState } from 'react'
function Form_list({ addList }){
    const [userInput, setUserInput] = useState('')
    
    const handleSumbit = (e) => {
        e.preventDefault()
        addList(userInput)
        setUserInput("")
    }

    const EnterPress = (e) => {
        if(e.key === "Enter") {
            handleSumbit(e)
        }
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <form onSubmit={handleSumbit}>
            <input 
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={EnterPress}
            />
            <button>save</button>
        </form> 
    )
}
export default Form_list