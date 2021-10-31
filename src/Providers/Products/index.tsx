import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseURL, defaultProductsArray } from "../BaseURL";

import axios from "axios";
import { toast } from "react-toastify";

interface UsersProps {
  children: ReactNode;
}

export default interface NewProductProps {
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
  loadProduts: () => void;
  addCart: (newProduct: NewProductProps) => void;
  removedCart: (newProduct: NewProductProps) => void;
  authToken: string;
  products: object;
  cartProducts: NewProductProps[];
  setCartproducts: (
    param: NewProductProps[] | (() => NewProductProps[])
  ) => void;
  total: number;
  clearCart: () => void;
}

const ProductContext = createContext<ProductData>({} as ProductData);
export const ProductProvider = ({ children }: UsersProps) => {
  const [authToken] = useState(
    () => localStorage.getItem("@kenzie_burguer") || ""
  );
  const [products, setProducts] = useState<ProductData[]>([]);
  const [cartProducts, setCartproducts] = useState<NewProductProps[]>([]);
  const [total, setTotal] = useState(0);
  const Authorization = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  const countTotal = () => {
    setTotal(
      cartProducts.reduce((acc, value) => acc + value.price * value.quantity, 0)
    );
  };
  const SearchProductCart = (newProduct: NewProductProps) => {
    cartProducts.map((element, index) =>
      element.name === newProduct.name ? element.quantity++ : ""
    );
    countTotal();
    toast.success("Sucesso ao adicionado ao carrinho!");
  };
  const removedCart = (newProduct: NewProductProps) => {
    cartProducts.map((element, index) =>
      element.name === newProduct.name ? element.quantity-- : ""
    );
    countTotal();
    toast.success("Sucesso ao remover do carrinho!");
  };
  const addCart = (newProduct: NewProductProps) => {
    const find = cartProducts.filter(
      (element, index) => element.name === newProduct.name
    );
    if (find[0]) {
      SearchProductCart(newProduct);
    } else {
      setCartproducts([...cartProducts, { ...newProduct, quantity: 1 }]);
      countTotal();
      toast.success("Sucesso ao adicionado ao carrinho!");
    }
  };
  const defaultPRoducts = () => {
    defaultProductsArray.map((element, index) => {
      console.log(element);
      axios
        .post(`${baseURL}/products`, element, Authorization)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err.response));
    });
  };
  const clearCart = () => {
    setCartproducts([]);
  };
  const loadProduts = () => {
    axios
      .get(`${baseURL}${"/products"}`)
      .then((response) => {
        if (!response.data[0]) {
          defaultPRoducts();
        }
        setProducts(response.data);
      })
      .catch((err) => {
        toast.error("Erro ao carregar produtos!");
      });
  };
  useEffect(() => {
    countTotal();
  }, [cartProducts]);
  return (
    <ProductContext.Provider
      value={{
        authToken,
        loadProduts,
        products,
        addCart,
        removedCart,
        cartProducts,
        setCartproducts,
        total,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
