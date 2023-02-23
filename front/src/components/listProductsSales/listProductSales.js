import { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import axios from "axios";
import img from "../../shared/img/img.png";
import { Main, Nav, Ul } from "./styled";
import { Link } from "react-router-dom";

export default function ListProductSales() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/product`)
      .then((response) => setProduct(response.data));
  }, []);

  return (
    <Main>
        <Nav>
          {product.map((element) => (
            <Ul>
              <Image src={img} />
              <p style={{ fontWeight: "bold" }}>{element.name}</p>
              <p>Descrição: {element.description}</p>
              <p>Valor: {element.value}</p>
              <Link to={`/sales/${element.id}`}>Comprar</Link>
            </Ul>
          ))}
        </Nav>
    </Main>
  );
}
