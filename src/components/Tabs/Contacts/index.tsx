import { Box, IconButton, List, Paper, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import { IStructureData } from '../../../interfaces'

const Contacts = ({ structure }: { structure: IStructureData }) => {
  const onCall = (phone: string) => {
    window.open(`tel:${phone}`, '_blank')
  }
  return (
    <>
      <List>
        {structure.contactos.map((contacto, i) => (
          <Box
            component={Paper}
            sx={{
              width: '100%',
              height: 50,
              display: 'flex',
              p: 4,
              justifyContent: 'space-between',
              alignItems: 'center',
              m: 1,
              fontSize: 12,
              fontWeight: 'bold',
              background: 'white',
              wordBreak: 'break-word'
            }}
            key={i}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h6' fontSize={16}>
                {contacto.nombre}
              </Typography>
              <Typography variant='caption'>{contacto.cargo}</Typography>
            </Box>
            <IconButton
              onClick={() => onCall(contacto.telefono)}
              color='primary'
            >
              <PhoneIcon />
            </IconButton>
          </Box>
        ))}
      </List>
    </>
  )
}

export default Contacts
