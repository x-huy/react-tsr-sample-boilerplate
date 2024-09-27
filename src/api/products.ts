const BASE_URL = "https://dummyjson.com/products";

export interface Category {
  slug: string;
  name: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/categories?delay=1000`);
  const data = await response.json();
  return data;
};
