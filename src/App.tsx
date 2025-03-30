import { Button } from "@chakra-ui/react";
import { selectData } from "./lib/todo";
import { useEffect, useState } from "react";
import { Todo } from "./domain/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>();
  useEffect(() => {
    const getData = async () => {
      const todoDatas = await selectData();
      setTodos(todoDatas);
    };

    getData();
  }, []);

  return (
    <>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
