import { useState } from 'react'


function App() {
  const [todo,setTodo] = useState("");
  const [todoList, setTodolist] = useState([])


  const handleForm = (e) => {
    e.preventDefault()

    setTodolist([...todoList, todo.trim()])
    setTodo("");

  }
  const handleDelete = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodolist(updatedList);
  };
  
  

  return (
    <>
    <div className='bg-blue-400 w-full h-screen flex items-center'>
      <div className='w-[500px] mx-auto text-center bg-white p-5'>
        <h1 className='text-5xl font-bold mb-8'>To-Do List</h1>

        <form onSubmit={handleForm}>
          <input className='border-2 border-black p-3 placeholder:text-gray-500 w-full mb-5 text-black rounded-lg' 
          type='text' 
          placeholder='Add Todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          />

          <button type='submit' className='bg-red-500 text-white mb-5 p-2 rounded-lg border-2'>Añade la Tarea</button>
        </form>
        <div>
          <ul>
           {todoList.map((singleTodo, index) => {
            if (singleTodo) {
              return (
                <li key={index} className='bg-gray-700 flex justify-between text-white py-3 px-2 rounded-lg text-xl text-left'>
                  {singleTodo}{''}
                  <span className='text-red-600 text-3xl cursor-pointer' onClick={() => handleDelete(index)}>X</span>
                </li>
              )
            }
          })}

          </ul>
        </div>
      </div>
          
         
    </div>
   
    </>
  )
}

export default App
