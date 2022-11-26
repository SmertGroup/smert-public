import React from 'react'
import { Grid } from '@nextui-org/react'
import Card from "../components/Card"
import Table from "../components/Table"

function Structure() {
  return (
    <Grid.Container css={{}}  direction='column'>
      <Grid css={{ my: '$12'}} xs={12}>
        <Card title='' description='' />
      </Grid>
        <Table />
    </Grid.Container>
  )
}

export default Structure