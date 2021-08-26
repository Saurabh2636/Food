import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  footer:{
      minHeight:'1cm'
  }
});
export default function Bill(props) {
  const classes = useStyles();
  const Bill =props.bill
  let total = 0
  return (
    <>
    <Typography className={classes.logo} variant="h4" align="center">
        Your Bill 
    </Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ background: 'green'}}>
          <TableCell align="right">No</TableCell>
            <TableCell>Ricipe Name (Available)</TableCell>
            <TableCell align="right">Total Piece</TableCell>
            <TableCell align="right">Cost INR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Bill.map((row,ind) => (
            <TableRow key={ind}>
              <TableCell align="right">{total=total+1}</TableCell>
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">1 Pic</TableCell>
              <TableCell align="right">100</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Container className={classes.footer}>
        <Typography variant="h5" align="center">
         Total Bill :{total*100}
        </Typography>
     </Container>   
  </>
  );
}
