import React from "react";

//propsとして渡されたtodoを表示する
const Todo = ({ todo }) => {
  //todoを表示
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
