import { useContext } from "react";
import { Text } from "react-native";
import {
  ContainerInput,
  ContainerLogin,
  ForgotPassword,
  SignupText,
  TitleLogin,
} from "./style";
import { TitleDescription } from "../welcome/style";
import Input from "../../components/input";
import { Button } from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const navigation = useNavigation();

  const { setLoggedIn } = useContext(AuthContext);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <ContainerLogin>
      <TitleLogin>Login</TitleLogin>
      <TitleDescription>
        Por favor faça o Login para poder aceder a aplicação
      </TitleDescription>
      <ContainerInput>
        <Input title="uihut@gmail.com" />
        <Input title="********" />
        <ForgotPassword>recuperar senha?</ForgotPassword>
      </ContainerInput>
      <Button text="Login" onPress={handleLogin} />
      <SignupText>você tem uma conta? criar conta</SignupText>
    </ContainerLogin>
  );
}
