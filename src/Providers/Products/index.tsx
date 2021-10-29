import { createContext, ReactNode, useContext, useState } from "react";

import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

interface UsersProps {
  children: ReactNode;
}

interface NewProductProps {
  category: string;
  description: string;
  id: number;
  img: string;
  name: string;
  price: number;
  userId: number;
  previousValue: number;
  currentValue: number;
  quantity: number;
}

interface ProductData {
  /*registerNewUser: (userData: RegisterData) => void;*/
  loadProduts: () => void;
  addCart: (newProduct: NewProductProps) => void;
  authToken: string;
  products: object;
  cartProducts: NewProductProps[];
  setCartproducts: (param: NewProductProps[]) => void;
  UpdateCart: (name: any) => void;
}

const ProductContext = createContext<ProductData>({} as ProductData);
export const ProductProvider = ({ children }: UsersProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@kenzie_burguer") || ""
  );
  const [products, setProducts] = useState<ProductData[]>([]);
  const [cartProducts, setCartproducts] = useState<NewProductProps[]>([]);
  const baseURL = "http://localhost:3001";
  const Authorization = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  const UpdateCart = (name: string) => {
    cartProducts.map((element, index) => {
      if (element.name === name) {
        element.quantity++;
      }
    });
    console.log(cartProducts);
  };
  const addCart = (newProduct: NewProductProps) => {
    setCartproducts([...cartProducts, { ...newProduct, quantity: 1 }]);
    toast.success("Adicionado ao carrinho!");
    console.log(cartProducts);
  };
  const loadProduts = () => {
    axios
      .get(`${baseURL}${"/products"}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        toast.error("Erro ao carregar produtos!");
      });
  };

  return (
    <ProductContext.Provider
      value={{
        authToken,
        loadProduts,
        products,
        addCart,
        cartProducts,
        setCartproducts,
        UpdateCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
