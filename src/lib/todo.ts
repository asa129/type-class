import { supabase } from "../utils/supabase";

export const selectData = async() => await supabase.from("todos").select();