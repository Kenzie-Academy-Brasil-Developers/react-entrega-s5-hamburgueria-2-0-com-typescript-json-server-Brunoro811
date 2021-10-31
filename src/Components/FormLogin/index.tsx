import { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../Input";
import { Container, Paragraph, Title } from "./style";
import Button from "../Button";
import { useHistory } from "react-router";

import { useUsers } from "../../Providers/Users";

function FormLogin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { singIn } = useUsers();

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    singIn(userData);
  };
  const handlePushCadastrar = () => {
    history.push("/register");
  };

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={handleSubmit(handleLogin)}>
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
        <Button primary type="submit" value={"Logar"} />
        <Paragraph>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Paragraph>
        <Button callback={handlePushCadastrar} value={"Cadastrar"} />
      </form>
    </Container>
  );
}
export default FormLogin;
