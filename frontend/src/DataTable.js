import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";

export default function DataTable(props) {
  const rows = props.data.map((record) => {
    const {
      PatientID: id,
      PatientLastName: firstName,
      PatientFirstName: lastName,
      Gender: gender,
      MostRecentTestDate: recentDate,
      TestName: testName,
      MostRecentLabResult: result,
    } = record;

    return { id, firstName, lastName, gender, recentDate, testName, result };
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Most Recent Test Date</TableCell>
            <TableCell align="right">Test Name</TableCell>
            <TableCell align="right">Most Recent Lab Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.recentDate}</TableCell>
              <TableCell align="right">{row.testName}</TableCell>
              <TableCell align="right">{row.result}</TableCell>
            </TableRow>
          ))}
          {rows?.length ? (
            <TableFooter>
              <TableCell sx={{ textWrap: "nowrap" }}>
                Results: {rows.length}
              </TableCell>
            </TableFooter>
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
