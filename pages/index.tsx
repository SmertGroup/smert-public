import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Grid, Card, Text, Button } from '@nextui-org/react'
import Background from '../components/Background'

const SmertButton: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <Button
      // light
      css={{
        h: '$24',
        $$cardColor: '$colors$secondary'
      }}
    >
      <Text h6 size={15} color='white' css={{ mt: 0, textAlign: 'center' }}>
        {text}
      </Text>
    </Button>
  )
}

export default function App() {
  return (
    <>
      <Grid.Container css={{ mt: '$18' }} justify='center'>
        <Image alt='' src='/smert-logo.png' width={230} height={105} />
      </Grid.Container>
      <Grid.Container css={{ mt: '$18' }} justify='space-around'>
        <Grid css={{ mt: '$12' }} justify='center' xs={12} sm={4} md={3}>
          <SmertButton text='Soy Bombero' />
        </Grid>
        <Grid css={{ mt: '$12' }} justify='center' xs={12} sm={4} md={3}>
          <SmertButton text='Conoce más' />
        </Grid>
      </Grid.Container>
      <Background />
    </>
  )
}
