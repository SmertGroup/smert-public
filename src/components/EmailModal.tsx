import * as React from 'react'
import { FC, useState } from 'react'
import {
  Modal,
  Button,
  Input,
  Box,
  FormControl,
  InputLabel,
  Typography
} from '@mui/material'
import { useMutation } from 'react-query'
import { authPublicUser } from '../services/authApi'
import { IAuthBody } from '../interfaces'
import { useSnackbar } from 'material-ui-snackbar-provider'

interface IModalProps {
  structureId: string
  open: boolean
  onClose: () => void
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: '#000',
  bgcolor: '#fff',
  border: '2px solid #eee',
  boxShadow: 24,
  p: 4
}

const EmailModal: FC<IModalProps> = ({ open, onClose, structureId }) => {
  const [email, setEmail] = useState('')
  const snackBar = useSnackbar()

  const mutation = useMutation<IAuthBody>(
    'authPublicUser',
    () => authPublicUser({ email, structureId }),
    {
      onError: (error: any) => {
        snackBar.showMessage(error.response.data.message)
      }
    }
  )

  const handleAuth = async () => {
    if (
      email
        .toLocaleLowerCase()
        .match(
          "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
        )
    ) {
      await mutation.mutateAsync()
      snackBar.showMessage('Se envio un email a tu casilla')
    } else {
      snackBar.showMessage('Email invalido')
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
    >
      <Box sx={{ ...style }}>
        <Typography mb={2}>
          Por favor, verifique su correo electrónico
        </Typography>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel htmlFor='my-input'>Correo electrónico</InputLabel>
          <Input
            id='my-input'
            aria-describedby='my-helper-text'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={handleAuth}
            disabled={mutation.isLoading}
            variant='contained'
            sx={{ mt: 2 }}
          >
            Verificar
          </Button>
        </FormControl>
      </Box>
    </Modal>
  )
}
export default EmailModal
