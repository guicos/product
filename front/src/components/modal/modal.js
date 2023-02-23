import React, { useEffect } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function ModalBasic(value) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (value.value) {
      setOpen(value.value);
    }
  }, [value]);

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={
        <Button primary style={{ display: "none" }}>
          Cadastrar
        </Button>
      }
    >
      <Header icon>
        <Icon name="save" />
        {"Produto Salvo com Sucesso"}
      </Header>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Fechar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalBasic;
