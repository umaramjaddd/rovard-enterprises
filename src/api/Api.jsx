import { supabase } from "@/Helpers/Supabase";


export const fetchCategoriesAPI = async () => {
  const { data, error } = await supabase.from('categories').select('*');
  if (error) throw new Error(error.message);
  return data;
};

export const fetchSubCategoriesAPI = async () => {
  const { data, error } = await supabase.from('sub_categories').select('*');
  if (error) throw new Error(error.message);
  return data;
};


export const fetchProductsAPI = async () => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw new Error(error.message);
  return data;
};
