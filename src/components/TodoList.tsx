import React from "react";
import "./TodoList.css";
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
  const items = props.items.map((todo) => {
    return (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
      </li>
    );
  });

  return <ul>{items}</ul>;
};

export default TodoList;
