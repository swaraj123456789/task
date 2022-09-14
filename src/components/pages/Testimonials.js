import React from 'react';
import Navtag from '../layout/Navtag'


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

const Testimonials = () => {

 
  
  const rows = [
   
   {
    Chef:1212,
    Name:"Vamshi",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.5,
    Publish:"Published"
   },
   {
    Chef:3202,
    Name:"Swaraj",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.1,
    Publish:"Published"
   },
   {
    Chef:1232,
    Name:"Shiva",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.5,
    Publish:"UnPublished"
   },
   {
    Chef:2045,
    Name:"Amaresh",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:3.5,
    Publish:"Published"
   },
   {
    Chef:1212,
    Name:"Rahul",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.0,
    Publish:"Published"
   },
   {
    Chef:1212,
    Name:"Adarsh",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.5,
    Publish:"Published"
   },
   {
    Chef:1212,
    Name:"Adarsh",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.5,
    Publish:"Published"
   },
   {
    Chef:1212,
    Name:"Natasha",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.6,
    Publish:"Published"
   
   },
   {
    Chef:1212,
    Name:"Peter",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:2.5,
    Publish:"Published"
   
   },
   {
    Chef:1212,
    Name:"Vidya",
    Review:"Chicken baked good and mushroom is little salty",
    Rating:4.5,
    Publish:"Published"
   
   }
  ];

  return (
    <div className="container">
       <Navtag>
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Chef ID</StyledTableCell>
            <StyledTableCell align="right">Chef Name</StyledTableCell>
            <StyledTableCell align="right">Review</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
            <StyledTableCell align="right">Publish</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                {row.Chef}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Review}</StyledTableCell>
              <StyledTableCell align="right">{row.Rating}</StyledTableCell>
              <StyledTableCell align="right">{row.Publish}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
       </Navtag>
     

    </div>
  )
}

export default Testimonials

