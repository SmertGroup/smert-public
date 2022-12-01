import { FC } from "react";
import {
  Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";

interface IDataList {
  title: string;
  render: any;
}

const DataList: FC<{ data: IDataList[] }> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableBody>
          {data.map((value, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {value.title}
              </TableCell>
              <TableCell align="left">{value.render}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataList;
