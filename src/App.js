import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={12}>
          Test
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
