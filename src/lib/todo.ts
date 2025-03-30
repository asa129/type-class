import { supabase } from "../utils/supabase";

export const selectData = async() => {
  const response = await supabase.from("todos").select()
  if(response.error){
    throw new Error(response.error.message)
  }
};
