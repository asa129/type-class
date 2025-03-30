import { Todo } from "../domain/todo";
import { supabase } from "../utils/supabase";

export const selectData = async() => {
  const response = await supabase.from("todos").select()
  if(response.error){
    throw new Error(response.error.message)
  }
  response.data.map((res) => {
    return new Todo(res.id, res.title, res.done, res.created_at);
  })
};
