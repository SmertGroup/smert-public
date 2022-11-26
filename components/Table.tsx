import { Table as NextUITable, Text } from "@nextui-org/react";
import { FunctionComponent, FC } from "react";

interface ITableProps {
  title?: string;
  description?: string;
}
const Table: FunctionComponent<ITableProps> = ({ title, description }) => {
  const Cell:FunctionComponent  = (props) : JSX.Element => (
    <NextUITable.Cell css={{ borderBottom: "1px solid black" }} {...props}>
      {props.children}
    </NextUITable.Cell>
  );
  return (
    <NextUITable
      aria-label="Example table with static content"
      css={{
        backgroundColor: "white",
      }}
      bordered={true}
    >
      <NextUITable.Header>
        <NextUITable.Column>.</NextUITable.Column>
        <NextUITable.Column>.</NextUITable.Column>
      </NextUITable.Header>
      <NextUITable.Body>
        <NextUITable.Row key="2">
          <NextUITable.Cell>
            <Text weight="bold">CFDSFSFD</Text>
          </NextUITable.Cell>
          <NextUITable.Cell>Paused</NextUITable.Cell>
        </NextUITable.Row>
        <NextUITable.Row key="3">
          <NextUITable.Cell>
            <Text weight="bold">CFDSFSFD</Text>
          </NextUITable.Cell>
          <NextUITable.Cell>Active</NextUITable.Cell>
        </NextUITable.Row>
      </NextUITable.Body>
    </NextUITable>
  );
};

export default Table;
