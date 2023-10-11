import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ minHeight: "100vh", padding: 2 }} maxWidth="lg">
        <StyledPaper variant="elevation">
          <div className="App">
            <header className="App-header">
              <Typography variant="h2">Lab Results Finder</Typography>
              <Link variant="h5" href="/search">
                Go To Search
              </Link>
            </header>
          </div>
        </StyledPaper>
      </Container>
    </React.Fragment>
  );
}

export default Home;
