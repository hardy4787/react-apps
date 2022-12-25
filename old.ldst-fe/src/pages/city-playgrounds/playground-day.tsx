import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SPORT_CLUBS } from "../../data/clubs";
import { Playground, PlaygroundStatus } from "../../models";

export const PlayGroundDay = ({ playground }: { playground: Playground }) => {
  const [kek, setKek] = useState(SPORT_CLUBS);
  return (
    <React.Fragment>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={playground.imagePath}
        />
        <CardContent
          sx={{ ":last-child": { padding: 0 }, textAlign: "center" }}
        >
          <Typography variant="h6" component="div">
            {playground.name}
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          size="large"
          sx={{ width: "100%", margin: 0 }}
        >
          {playground.timeSlots.map((ts, index) => (
            <Button
              key={index}
              color={ts.status === PlaygroundStatus.BUSY ? "error" : "success"}
              variant={
                ts.status === PlaygroundStatus.BUSY ? "contained" : "outlined"
              }
            >
              {ts.startTime} - {ts.endTime}
              <br />
              {ts.price} usd
            </Button>
          ))}
          ,
        </ButtonGroup>
      </Box>
    </React.Fragment>
  );
};
