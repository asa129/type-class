import { Todo } from "../domain/todo";
import { supabase } from "../utils/supabase";

export const selectData: () => Promise<Todo[]> = async() => {
  const response = await supabase.from("todos").select()
  if(response.error){
    throw new Error(response.error.message)
  }
  const responseData =response.data.map((res) => {
    // return new Todo(res.id, res.title, res.done, res.created_at);
    return Todo.newTodo(res.id, res.title, res.done, res.created_at);
  })

  return responseData;
};
