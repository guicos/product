import { Link } from "react-router-dom";
import { Content, Header } from "../styles/listRegister.styled";
import ListProductSales from "../components/listProductsSales/listProductSales";

export default function Sales() {
  return (
    <>
      <Header>
        <h1>Produtos</h1>
        <Link to="/" style={{ color: "white"}}>Cadastrar produto</Link>
      </Header>
      <Content>
        <ListProductSales />
      </Content>
    </>
  );
}
