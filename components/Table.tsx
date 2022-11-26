import { Table as NextUITable, Text } from '@nextui-org/react'
import { FC } from 'react'

interface ITableProps {
  title?: string
  description?: string
}
const Table: FC<ITableProps> = ({ title, description }) => {
  const cellCss = { borderBottom: '1px solid black' }
  return (
    <NextUITable
      aria-label='Example table with static content'
      css={{
        backgroundColor: 'white'
      }}
      bordered={true}
    >
      <NextUITable.Header>
        <NextUITable.Column>.</NextUITable.Column>
        <NextUITable.Column>.</NextUITable.Column>
      </NextUITable.Header>
      <NextUITable.Body>
        <NextUITable.Row key='2'>
          <NextUITable.Cell css={cellCss}>
            <Text weight='bold'>CFDSFSFD</Text>
          </NextUITable.Cell>
          <NextUITable.Cell css={cellCss}>Paused</NextUITable.Cell>
        </NextUITable.Row>
        <NextUITable.Row key='3'>
          <NextUITable.Cell>
            <Text weight='bold'>CFDSFSFD</Text>
          </NextUITable.Cell>
          <NextUITable.Cell>Active</NextUITable.Cell>
        </NextUITable.Row>
      </NextUITable.Body>
    </NextUITable>
  )
}

export default Table
