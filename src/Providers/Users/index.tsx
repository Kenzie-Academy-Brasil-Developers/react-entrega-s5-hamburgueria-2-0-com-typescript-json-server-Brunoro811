import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { baseURL } from "../BaseURL";

interface UsersProps {
  children: ReactNode;
}
interface SingInData {
  email: string;
  password: string;
}
interface RegisterOrder {
  street: string;
  number: number;
  pay: string;
}
interface RegisterData {
  name: string;
  email: string;
  password: string;
}
interface UsersData {
  singIn: (userData: SingInData) => void;
  getOrders: () => void;
  registerNewUser: (userData: RegisterData) => void;
  registerNewOrder: (newOrder: RegisterOrder) => void;
  logout: () => void;
  authToken: string;
  orders: object;
}

const UsersContext = createContext<UsersData>({} as UsersData);
export const UsersProvider = ({ children }: UsersProps) => {
  const history = useHistory();
  const [orders, setOrders] = useState<UsersData[]>([]);
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@kenzie_burguer") || ""
  );
  const Authorization = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  const singIn = (userData: SingInData) => {
    axios
      .post(`${baseURL}${"/login"}`, userData)
      .then((response) => {
        localStorage.setItem("@kenzie_burguer", response.data.accessToken);
        setAuthToken(response.data.token);
        toast.success("Parabéns você está na Kenzie Burguer!");
        setTimeout(function () {
          history.push("/dashboard");
        }, 4000);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const registerNewUser = (newUserData: RegisterData) => {
    axios
      .post(`${baseURL}${"/users"}`, newUserData)
      .then((response) => {
        toast.success("Parabéns você esta cadastrado!");
        history.push("/login");
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  const getOrders = () => {
    axios
      .get(`${baseURL}/sales`, Authorization)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => toast.error(err.response));
  };
  const registerNewOrder = (newOrder: RegisterOrder) => {
    console.log(authToken);
    const { sub }: string = jwtDecode(authToken);
    const id = Number(sub);
    const body = {
      userId: id,
      ...newOrder,
    };
    axios
      .post(`${baseURL}/sales`, body, Authorization)
      .then((response) => {
        toast.success("Parabéns pelo pedido! Obrigado");
        history.push("/dashboard/:sucess");
      })
      .catch((err) => {
        toast.error(err.response);
      });
  };
  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };
  useEffect(() => {
    setAuthToken(() => localStorage.getItem("@kenzie_burguer") || "");
  }, []);

  return (
    <UsersContext.Provider
      value={{
        authToken,
        singIn,
        logout,
        registerNewUser,
        registerNewOrder,
        getOrders,
        orders,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
