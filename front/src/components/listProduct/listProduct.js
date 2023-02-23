import { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { Tables } from "./style";

export default function ListProduct() {
  const [product, setProduct ] = useState([])

  const handleDeleteRegister = (id) => {
    axios.delete(`http://localhost:3001/product/${id}`)
    setProduct(product.filter((element) =>  element.id !== id ))
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/product`)
    .then(response => setProduct(response.data))
  }, [])

  return (
    <Tables>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
            <Table.HeaderCell>Estoque</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {product.map((element) => (
            <Table.Row key={element.id}>
              <Table.Cell>{element.name}</Table.Cell>
              <Table.Cell>{element.value}</Table.Cell>
              <Table.Cell>{element.stock}</Table.Cell>
              <Table.Cell>
              <NavLink to={`/${element.id}`}> 
                  <Icon name="edit"/> Editar
                </NavLink>
                <br/>
                <Link onClick={() => handleDeleteRegister(element.id)}>
                  <Icon name="delete"/> Excluir
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Tables>
  );
}
