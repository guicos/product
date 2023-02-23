import InputsRegister from "../components/register/inputsRegister";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Content, Header } from "../styles/listRegister.styled";

export default function Register() {
  return (
    <>
      <Header>
        <h1>Produtos</h1>
        <Link to="/sales" style={{ color: "white"}}>Visitar loja</Link>
      </Header>
      <Content>
        <InputsRegister />
        <Link to="/">
          <Icon name="backward" />
          Voltar
        </Link>
      </Content>
    </>
  );
}
