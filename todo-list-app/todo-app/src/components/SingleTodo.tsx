import React, {useState} from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = React.useState<boolean>(false);
    const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

    const handleDone = (id: number) => {

        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, isDone: !todo.isDone};
                }
                return todo;
            })
        );
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, todo: editTodo};
                }
                return todo;
            })
        );
        setEdit(false);
    }

  return (
    <div className="flex items-center justify-center p-4 bg-green-500">
      <div className="w-3/4 max-w-md bg-white shadow-md rounded-lg p-4 flex items-center">
        {
            edit ? (
                <form onSubmit={(e) => {handleEdit(e, todo.id)}}>
                <input type="text" 
                    value={editTodo} 
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="flex-1 pr-4 text-green-700"
                />
                </form>
            ) : todo.isDone ? (
                <span className="flex-none w-6 h-6 border-2 border-green-500 rounded-full mr-4 flex items-center justify-center">
                    <MdDone />
                </span>
            ) : (
                <span className="flex-none w-6 h-6 border-2 border-gray-300 rounded-full mr-4"></span>
            )
        }
        <span className="flex-1 pr-4 text-green-700">{todo.todo}</span>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500"
                onClick={() => {
                    if(!edit && !todo.isDone) setEdit(!edit);

                }}>
            <AiFillEdit />
          </span>
          <span className="text-red-500"
                onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className="text-green-500"
                onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
