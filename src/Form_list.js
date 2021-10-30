import { useState} from 'react'
function Form_list(){
    const [userInput, setUserInput] = useState('')
    
    const handleSumbit = ( ) => {

    }

    const EnterPress = () => {

    }

    const handleChange = () => {
     
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