import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlaygroundArgs } from "../../models/playground-args.model";
import Bar from "./bar";
import { CitySportForm } from "./city-sport-form";
import ImageSlider from "./slider";

export const Home = () => {
  const navigate = useNavigate();
  const navigateToPlaygrounds = ({ cityId, sportId }: PlaygroundArgs) => {
    navigate(`/cities/${cityId}/sports/${sportId}`);
  };

  return (
    <React.Fragment>
      <Bar />
      <ImageSlider />
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "300px" }}
      >
        <Grid item>
          <CitySportForm onConditionsSelected={navigateToPlaygrounds} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
