import React from 'react'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}


const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {
  return (
    <div className=' m-12 align-middle pl-96'>
        <form onSubmit={handleAdd}>
            <input type='input' 
            placeholder='Add a task' 
            value={todo}
            onChange={(e) => setTodo (e.target.value)}
            className='border-2 border-gray-400 rounded-lg p-2 m-2 w-96' />
            <button type='submit' className='border-2 border-gray-400 rounded-lg p-2 m-2 w-32 bg-green-500
            hover:bg-green-600 hover:animate-bounce'>Add</button>
        </form>
      
    </div>
  )
}

export default InputField
