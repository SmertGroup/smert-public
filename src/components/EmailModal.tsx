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

  const mutation = useMutation<IAuthBody>('authPublicUser', () =>
    authPublicUser({ email, structureId })
  )

  const handleAuth = async () => {
    await mutation.mutateAsync()
    alert('Se ha enviado un correo a su casilla')
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
          <Button onClick={handleAuth} variant='contained' sx={{ mt: 2 }}>
            Verificar
          </Button>
        </FormControl>
      </Box>
    </Modal>
  )
}
export default EmailModal
