import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  //useStateでtodosという状態を管理。初期値をセット
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する。
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: "1", name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  return (
    <div>
      {/* TodoListコンポーネントを表示。propsとしてtodos(状態)を渡す */}
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
