import { createContext, ReactNode, useContext, useState } from "react";

import axios from "axios";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
interface UsersProps {
  children: ReactNode;
}
interface SingInData {
  email: string;
  password: string;
}
interface RegisterData {
  name: string;
  email: string;
  password: string;
}
interface UsersData {
  singIn: (userData: SingInData) => void;
  registerNewUser: (userData: RegisterData) => void;
  logout: () => void;
  authToken: string;
}

const UsersContext = createContext<UsersData>({} as UsersData);
export const UsersProvider = ({ children }: UsersProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@kenzie_burguer") || ""
  );
  const baseURL = "http://localhost:3001";
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
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <UsersContext.Provider
      value={{ authToken, singIn, logout, registerNewUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
