import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { PlaygroundArgs } from "../../models/playground-args.model";
import { useEffect, useState } from "react";
import axios from "axios";
import { Sport } from "../../models/sport.model";

export interface City {
  cityId: number;
  cityName: string;
}

interface CitySportProps {
  onConditionsSelected: ({ cityId, sportId }: PlaygroundArgs) => void;
}

export interface CitySport {
  cityId: number;
  cityName: string;
  sports: Sport[];
}

export const CitySportForm = ({ onConditionsSelected }: CitySportProps) => {
  const [cities, setCities] = useState([] as City[]);
  const [sports, setSports] = useState([] as Sport[]);
  const [citySports, setCitySports] = useState([] as CitySport[]);

  useEffect(() => {
    axios
      .get("https://localhost:7286/Sports/citysports/1")
      .then((result) => {
        setCitySports(result.data);

        setCities(
          result.data.map((x: CitySport) => ({
            cityId: x.cityId,
            cityName: x.cityName,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectCity = (e: SelectChangeEvent<string>) => {
    formik.values.sport = "";
    formik.handleChange(e);
    setSports(
      citySports.find((cs) => cs.cityId === Number(e.target.value))!.sports
    );
  };

  const validationSchema = yup.object({
    city: yup.string().required(),
    sport: yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      city: "",
      sport: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onConditionsSelected({
        cityId: Number(values.city),
        sportId: Number(values.sport),
      } as PlaygroundArgs);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="city-label">City</InputLabel>
        <Select
          labelId="city-label"
          id="city"
          name="city"
          label="City"
          value={formik.values.city}
          onChange={selectCity}
        >
          {cities.map(({ cityId, cityName }) => (
            <MenuItem key={cityId} value={cityId}>
              {cityName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {formik.touched.city && formik.errors.city ? (
        <div>{formik.errors.city}</div>
      ) : null}
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="sport-label">Sport</InputLabel>
        <Select
          labelId="sport-label"
          id="sport"
          name="sport"
          label="Sport"
          disabled={!sports.length}
          value={formik.values.sport}
          onChange={formik.handleChange}
        >
          {sports.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={0} justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={Object.keys(formik.errors).length > 0 || !formik.dirty}
          type="submit"
        >
          Pick a place
        </Button>
      </Grid>
    </form>
  );
};
