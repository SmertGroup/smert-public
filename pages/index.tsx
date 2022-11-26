import { useState } from 'react'
import Image from 'next/image'
import { Grid } from '@nextui-org/react'
import MenuButton from "../components/MenuButton"
import Modal from "../components/Modal"
import Background from '../components/Background'

export default function App() {

  const [visibleModal, setVisibleModal] = useState(false)
  const handlerModal = () => setVisibleModal(true)
  const closeHandlerModal = () => setVisibleModal(false)  
  
  return (
    <>
      <Grid.Container css={{ mt: '$18' }} justify='center'>
        <Image alt='smert logo' src='/smert-logo.png' width={230} height={105} />
      </Grid.Container>
      <Grid.Container css={{ mt: '$18' }} justify='space-around'>
        <Grid css={{ mt: '$12' }} justify='center' xs={12} sm={4} md={3}>
          <MenuButton text='Soy Bombero' onPress={handlerModal} />
        </Grid>
        <Grid css={{ mt: '$12' }} justify='center' xs={12} sm={4} md={3}>
          <MenuButton text='Conoce más' onPress={()=>{}}/>
        </Grid>
      </Grid.Container>
      <Background />
      <Modal open={visibleModal} onClose={closeHandlerModal}/>
    </>
  )
}
