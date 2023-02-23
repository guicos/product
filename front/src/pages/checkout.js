import { Link } from "react-router-dom";
import Purchase from "../components/purchase/purchase";
import { Content, Header } from "../styles/listRegister.styled";

export default function Checkout() {
  return (
    <>
      <Header>
        <h1>Produtos</h1>
        <Link to="/sales" style={{ color: "white"}}>Visitar loja</Link>
      </Header>
      <Content>
        <Purchase/>
      </Content>
    </>
  );
}
