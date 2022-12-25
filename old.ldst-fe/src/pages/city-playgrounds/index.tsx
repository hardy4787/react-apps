import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { SPORT_CLUBS } from "../../data/clubs";
import { PlayGroundDay } from "./playground-day";
import PlaygroundManager from "./playground-manager";

export const CityPlaygrounds = () => {
  const [kek, setKek] = useState(SPORT_CLUBS);
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" gutterBottom>
        Choose your date
      </Typography>
      <PlaygroundManager />

      <Grid container spacing={2}>
        {SPORT_CLUBS[0].playgrounds.map((c) => (
          <Grid item xs={2}>
            <Paper>
              <PlayGroundDay playground={c} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
