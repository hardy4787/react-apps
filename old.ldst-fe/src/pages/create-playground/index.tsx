import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createMuiTheme,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { PlaygroundArgs } from "../../models/playground-args.model";
import { useEffect, useState } from "react";
import axios from "axios";
import { Sport } from "../../models/sport.model";

export interface City {
  id: number;
  name: string;
}

interface CreatePlaygroundArgs {
  name: string;
  description: string;
  sportId: number;
  address1: string;
  address2: string;
  cityId: number;
  titlePhoto: any;
  state: string;
  zipCode: string;
}

export const CreatePlaygroundForm = () => {
  const [cities, setCities] = useState([] as City[]);
  const [sports, setSports] = useState([] as Sport[]);
  const [titlePhoto, setTitlePhoto] = useState("");
  //   const [citySports, setCitySports] = useState([] as CitySport[]);
  useEffect(() => {
    axios
      .all([
        axios.get("https://localhost:7286/sports"),
        axios.get("https://localhost:7286/locations/1"),
      ])
      .then(([{ data: sports }, { data: cities }]) => {
        setSports(sports);
        setCities(cities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const validationSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    address1: yup.string().required(),
    address2: yup.string(),
    cityId: yup.string().required(),
    sportId: yup.string().required(),
    state: yup.string(),
    zipCode: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      sportId: "",
      address1: "",
      address2: "",
      cityId: "",
      state: "",
      zipCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        cityId: Number(values.cityId),
        sportId: Number(values.sportId),
      } as CreatePlaygroundArgs;
      axios
        .post(
          "https://localhost:7286/playgrounds/hosts/6a80dea6-3c6c-4aa2-b072-060495b04718",
          formData
        )
        .then((response) => {
          const data = new FormData();
          data.append("formFile", titlePhoto);
          data.append("playgroundId", response.data);
          axios.post("https://localhost:7286/playgrounds/title-photo", data);
        });
    },
  });

  function handleImageChange(e: any) {
    setTitlePhoto(e.target.files[0]);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <TextField
        required
        id="description"
        name="description"
        label="Description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}
      <TextField
        required
        id="address1"
        name="address1"
        label="Address 1"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.address1 && formik.errors.address1 ? (
        <div>{formik.errors.address1}</div>
      ) : null}
      <TextField
        id="address2"
        name="address2"
        label="Address 2"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        id="state"
        name="state"
        label="State"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        required
        id="zipCode"
        name="zipCode"
        label="Zip code"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.zipCode && formik.errors.zipCode ? (
        <div>{formik.errors.zipCode}</div>
      ) : null}
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="city-label">City</InputLabel>
        <Select
          required
          labelId="city-label"
          id="cityId"
          name="cityId"
          label="City"
          value={formik.values.cityId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {cities.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {formik.touched.cityId && formik.errors.cityId ? (
        <div>{formik.errors.cityId}</div>
      ) : null}
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="sport-label">Sport</InputLabel>
        <Select
          required
          labelId="sport-label"
          id="sportId"
          name="sportId"
          label="Sport"
          value={formik.values.sportId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {sports.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {formik.touched.sportId && formik.errors.sportId ? (
        <div>{formik.errors.sportId}</div>
      ) : null}
      <Box component="main" className="root" width="auto" height="auto">
        <Box className="formImage">
          <div className="divForm">
            <h1 style={{ margin: 8 }}>Upload an Image</h1>

            <TextField
              id="titlePhoto"
              label="Image Upload"
              style={{ margin: 8 }}
              name="titlePhoto"
              type="file"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleImageChange}
            />
            {titlePhoto.length > 0 && (
              <Card className="paperRoot">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={titlePhoto}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            )}
          </div>
        </Box>
      </Box>
      <Grid container spacing={0} justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          size="large"
          disabled={
            Object.keys(formik.errors).length > 0 ||
            !formik.dirty ||
            !titlePhoto
          }
          type="submit"
        >
          Add a playground
        </Button>
      </Grid>
    </form>
  );
};
