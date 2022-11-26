import { FunctionComponent } from 'react'
import { Modal as NextUIModal, Button, Text, Input } from '@nextui-org/react'
import { Mail } from "../components/Mail";

interface IModalProps {
  open: boolean,
  onClose: ()=>void,
}

const Modal : FunctionComponent<IModalProps> = ({ open, onClose }) => {
  
  return (
    <NextUIModal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={open}
        onClose={onClose}
      >
        <NextUIModal.Header>
          <Text id="modal-title" size={18}>
            Para ingresar debe verificar su correo
          </Text>
        </NextUIModal.Header>
        <NextUIModal.Body>
          <Input
            clearable
            bordered
            fullWidth
            aria-labelledby="input-email"
            color="primary"
            size="lg"
            placeholder="Correo"
            contentLeft={<Mail fill="currentColor" />}
          />
        </NextUIModal.Body>
        <NextUIModal.Footer>
          <Button auto flat color="error" onPress={onClose}>
            Cancelar
          </Button>
          <Button auto onPress={onClose}>
            Verificar
          </Button>
        </NextUIModal.Footer>
      </NextUIModal>
  );
};
export default Modal