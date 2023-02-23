import { useEffect, useState } from "react";
import { Input, Label, Form, TextArea, Button } from "semantic-ui-react";
import { Forms, FormsInt } from "./styles.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import ModalBasic from "../modal/modal.js";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function InputsRegister() {
  const initialValue = {
    name: "",
    description: "Sem Descrição",
    stock: 0,
    value: 0,
    img: "Sem imagem",
  };

  const { id } = useParams();
  const [values, setValues] = useState(initialValue);
  const [modal, setModal] = useState(false);
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/product/${id}`).then((response) =>
        setValues({
          name: response.data.name,
          description: response.data.description,
          value: response.data.value,
          stock: response.data.stock,
          img: response.data.img,
        })
      );
    }
  }, [id]);

  const handleRegister = () => {
    if(values.stock <= 0 || values.name === '' || values.value <= 0){
      setValidation(true)
    }else{
      setModal(true);
      if (id) {
        axios.put(`http://localhost:3001/product/${id}`, {
          name: values.name,
          description: values.description,
          stock: parseInt(values.stock),
          value: parseInt(values.value),
          img: values.img,
        });
      } else {
        axios.post(`http://localhost:3001/product`, {
          name: values.name,
          description: values.description,
          stock: parseInt(values.stock),
          value: parseInt(values.value),
          img: values.img,
        });
      }
    }
  };

  const handleSetValue = (e) => {
    setModal(false);
    setValidation(false);
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Forms>
      <div>
        <h1>Cadastrar Novo Produto</h1>
      </div>
      <Input
        type="text"
        placeholder="Nome do Produto"
        name="name"
        onChange={handleSetValue}
        value={values.name}
        style={{ minWidth: 500, margin: 5 }}
      />
      <Input
        type="file"
        name="img"
        onChange={handleSetValue}
        disabled={id ? true : false}
        //value={values.img}
        style={{ minWidth: 500, margin: 5 }}
      />
      <Form>
        <TextArea
          placeholder="Descrição do Produto"
          onChange={handleSetValue}
          value={values.description}
          name="description"
          style={{ minWidth: 500, margin: 5 }}
        />
      </Form>
      <FormsInt>
        <Input
          type="number"
          placeholder="Estoque"
          name="stock"
          onChange={handleSetValue}
          value={values.stock}
          style={{ minWidth: 10, margin: 5 }}
        />
        <Input
          labelPosition="right"
          type="text"
          name="value"
          placeholder="Price"
          onChange={handleSetValue}
          value={values.value}
          style={{ minWidth: 10, margin: 5 }}
        >
          <Label basic>R$</Label>
          <input />
          <Label>.00</Label>
        </Input>
      </FormsInt>

      <Button primary onClick={handleRegister}>
        {" "}
        Cadastrar
      </Button>
      {modal ? <ModalBasic value={true} /> : ""}
      { validation ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Preencha os campos corretamente</Alert>
        </Stack>
      ) : (
        ""
      )}
    </Forms>
  );
}
