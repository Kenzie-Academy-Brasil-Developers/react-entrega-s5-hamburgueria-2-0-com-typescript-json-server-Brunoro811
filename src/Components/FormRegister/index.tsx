import { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../Input";
import { Container, Paragraph, Title } from "./style";
import Button from "../Button";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useUsers } from "../../Providers/Users";

interface FormRegister {
  handleRegister: () => void;
  handlePushCadastrar: () => void;
  email: string;
  password: string;
}

function FormRegister() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
    passwordTwo: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser  iguais"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { registerNewUser } = useUsers();

  const handleRegister = () => {
    console.log(email);
    console.log(password);
    console.log(name);
    console.log(passwordTwo);
    registerNewUser({ name, email, password });
  };

  return (
    <Container>
      <Title>
        Login{" "}
        <span>
          <Link to="/"> Retornar ao Login</Link>
        </span>
      </Title>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Input
          register={register}
          registerParam={"name"}
          value={name}
          setValue={setName}
          label="Nome"
          errors={errors.name}
        />
        <Input
          register={register}
          registerParam={"email"}
          value={email}
          setValue={setEmail}
          label="Email"
          errors={errors.email}
        />
        <Input
          register={register}
          registerParam={"password"}
          type={"password"}
          value={password}
          setValue={setPassword}
          label="Senha"
          errors={errors.password}
        />
        <Input
          register={register}
          registerParam={"passwordTwo"}
          type={"password"}
          value={passwordTwo}
          setValue={setPasswordTwo}
          label="Senha"
          errors={errors.passwordTwo}
        />
        {(!name || !email || !password || !passwordTwo) && (
          <Button disabled value={"Cadastrar"} />
        )}
        {name && email && password && passwordTwo && (
          <Button primary type="submit" value={"Cadastrar"} />
        )}
      </form>
    </Container>
  );
}
export default FormRegister;
