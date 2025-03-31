import { selectData } from "./lib/todo";
import { useEffect, useState } from "react";
import { Todo } from "./domain/todo";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState<Todo[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const todoDatas = await selectData();
      setTodos(todoDatas);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) {
    return <p>Loding....</p>;
  }

  return (
    <>
      <h1 data-testid="title"> TODOリスト </h1>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Done</Th>
              <Th>CreatedAt</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos?.map((todo) => {
              return (
                <Tr key={todo.id}>
                  <Td>{todo.title}</Td>
                  <Td>{todo.done === true ? "true" : "false"}</Td>
                  <Td>{todo.created_at}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
