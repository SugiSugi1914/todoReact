import React from "react";
import Todo from "./Todo";

//todosという配列をpropsとして受け取る
const TodoList = ({ todos }) => {
  //todos配列をmapで繰り返し処理して、各タスクをTodoコンポーネントとして描写
  return todos.map((todo) => <Todo todo={todo} key={todo} />);
};

export default TodoList;
