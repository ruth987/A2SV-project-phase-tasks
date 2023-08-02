
import React, {useState} from 'react';  
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className=''>
      <h1 className='text-4xl text-center font-serif pt-20 '> TASKIFY</h1>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
      <TodoList todos = {todos} setTodos = {setTodos} />

    </div>
  );
};

export default App;
