import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DataTable from "./DataTable";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchUrl = `/api/search?query=${query}`;

    fetch(searchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    return;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ minHeight: "100vh", padding: 2 }} maxWidth="lg">
        <StyledPaper variant="elevation">
          <div className="App">
            <header className="App-header">
              <Link variant="h5" href="/">
                Home
              </Link>
              <Typography variant="h2">Search</Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                  "& .MuiFormControl-root": { width: "100%" },
                  display: "flex",
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  // InputProps={{ sx: { width: "80%" } }}
                  label="Search Patient Name"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  required
                />
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ "&&": { width: "15%", ml: 0 } }}
                >
                  Search
                </Button>
              </Box>
            </header>
            <Box>
              <DataTable data={data} />
            </Box>
          </div>
        </StyledPaper>
      </Container>
    </React.Fragment>
  );
}

export default Search;
