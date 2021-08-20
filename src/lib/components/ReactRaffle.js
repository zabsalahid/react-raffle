import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

export default function ReactRaffle() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Grid container>
          <Grid item xs={12}>
            <Typography>Test</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Button
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
