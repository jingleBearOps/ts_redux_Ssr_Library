import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(
//   name: string,
//   price: number,
//   category: string,
// ) {
//   return { name, price, category};
// }

// const rows2 = [
//   createData('Frozen yoghurt', 159,"asdashdasd"),
//   createData('Ice cream sandwich', 237,"asdashdasd"),
//   createData('Eclair', 262,"asdashdasd"),
//   createData('Cupcake', 305,"asdashdasd"),
//   createData('Gingerbread', 356,"asdashdasd"),
// ];


 
interface Row {
  name: string;
  price: number;
  category: string;
 }
export default function CustomizedTables(rows: Row[]) {
  console.log(rows);
  let rowArr: any[] = []
  for (const k in rows){
    console.log(rows[k])
    rowArr.push(rows[k])
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">name</StyledTableCell>
            <StyledTableCell align="right">price$</StyledTableCell>
            <StyledTableCell align="right">category</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rowArr.map((row: any) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}