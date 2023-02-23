import ListProduct from "../components/listProduct/listProduct";
import InputsRegister from "../components/register/inputsRegister";
import { Button } from "semantic-ui-react";
import { Content, Header } from "../styles/listRegister.styled";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListRegister() {
  const [button, setButton] = useState(false);
  const handleVisibleOrNot = () => {
    if (!button) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  return (
    <>
      <Header>
        <h1>Produtos</h1>
        <Link to="/sales" style={{ color: "white"}}>Visitar loja</Link>
      </Header>
      <Content>
        <Button primary type="submit" onClick={handleVisibleOrNot}>
          {button ? "Voltar para listagem" : "Adicionar Produto"}
        </Button>
        {button ? <InputsRegister /> : <ListProduct />}
      </Content>
    </>
  );
}
