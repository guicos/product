import { useState, useEffect } from "react";
import { Button, Input, Item } from "semantic-ui-react";
import img from "../../shared/img/img.png";
import axios from "axios";
import { DoubleButton } from "./styled";
import { Link, useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Purchase() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [stock, setStock] = useState(0);
  const [modal, setModal] = useState(false);
  const [sucess, setSucess] = useState(false);

  const handleUpdateRegister = () => {
    if (stock.stock > product.stock || product.stock === 0 || stock.stock <= 0 || stock.stock <= '') {
      setModal(true);
    } else {
      const count = product.stock - stock.stock;
      axios.put(`http://localhost:3001/product/${id}`, {
        stock: parseInt(count),
      });
      setProduct({...product, stock: count})
      setSucess(true)
    }
  };

  useEffect(() => {
    axios
    .get(`http://localhost:3001/product/${id}`)
    .then((response) => setProduct(response.data));
  }, [id]);


  const handleSetValue = (e) => {
    setModal(false);
    setSucess(false);
    setStock({ stock: e.target.value });
  };

  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={img} style={{ minWidth: 500 }} />

          <Item.Content>
            <Item.Header>{product.name}</Item.Header>
            <Item.Meta>
              <span className="price">R${product.value}</span>
              <span className="stay">Estoque: {product.stock}</span>
            </Item.Meta>
            <Item.Description>{product.description}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <DoubleButton>
        <Input
          type="number"
          placeholder="Estoque"
          name="stock"
          onChange={handleSetValue}
          style={{ minWidth: 10, margin: 5 }}
        />
        <Button primary onClick={handleUpdateRegister}>
          Comprar
        </Button>
        <Link to="/sales">Voltar</Link>
      </DoubleButton>
      {modal ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Quantidade de itens indisponiveis para venda
          </Alert>
        </Stack>
      ) : (
        ""
      )}

      {sucess ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">Compra Realizada com sucesso</Alert>
        </Stack>
      ) : (
        ""
      )}
    </>
  );
}
