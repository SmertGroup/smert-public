import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import Background from '../components/Background'
import EmailModal from '../components/EmailModal'
import { useRouter } from 'next/router'

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false)
  const handlerModal = () => setVisibleModal(true)
  const closeHandlerModal = () => setVisibleModal(false)

  const { query } = useRouter()
  if (!query.structureId) {
    return 'No autorizado'
  }

  return (
    <>
      <Grid container sx={{ mt: 18 }} justifyContent='center'>
        <Image
          alt='smert logo'
          src='/smert-logo.png'
          width={230}
          height={105}
        />
      </Grid>
      <Grid
        container
        sx={{ mt: 12, p: 4 }}
        gap={2}
        direction='column'
        justifyContent='center'
      >
        <Button
          variant='contained'
          onClick={handlerModal}
          sx={{ p: 2, fontSize: 16 }}
        >
          Soy Bombero
        </Button>
        <Button
          variant='contained'
          href='https://smertgroup.com/'
          sx={{ p: 2, fontSize: 16 }}
        >
          Conócenos
        </Button>
      </Grid>
      <Background />
      <EmailModal
        open={visibleModal}
        structureId={query.structureId as string}
        onClose={closeHandlerModal}
      />
    </>
  )
}
