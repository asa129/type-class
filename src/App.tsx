import { Button } from "@chakra-ui/react";
import { selectData } from "./lib/todo";
import { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = selectData();
    setResponse(data);
  }, []);
  console.log(response);
  return (
    <>
      <Button colorScheme="teal">ボタン</Button>
    </>
  );
}

export default App;
