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

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface GetProductsResponse {
  products: Product[];
}

export const getProducts = async (): Promise<GetProductsResponse> => {
  let endpoint = BASE_URL;
  const limit = 10; // Fix later
  const response = await fetch(`${endpoint}?delay=1000&limit=${limit}`);
  const { products } = await response.json();
  return {
    products,
  };
};
