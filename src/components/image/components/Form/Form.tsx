import React from "react";
import { useForm, Controller } from "react-hook-form";
import { HexColorPicker } from "react-colorful";
import { yupResolver } from '@hookform/resolvers/yup';
import "react-colorful/dist/index.css";

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

import { ImageInput } from "../ImageInput";
import styles from './style';

const useStyles = makeStyles(styles);

interface Props {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  defaultValues?: {[property: string]: any};
  oldPreview?: string;
  schema: any;
}

export const ImageForm = ({ onSubmit, onCancel, defaultValues = {}, oldPreview, schema }: Props) => {
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <ImageInput oldPreview={oldPreview} register={register} />
            </FormControl>
            <Typography className={classes.errorLabel}>{errors.image?.message}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FormControl fullWidth margin="normal">
              <TextField inputRef={register} name="tooltip.text" label="Toolip text" variant="outlined" />
            </FormControl>
            <Typography className={classes.errorLabel}>{errors.tooltip?.text?.message}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FormControl fullWidth margin="normal">
              <Controller
                name="tooltip.position"
                as={<Select>
                  <MenuItem value="top">Top</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                  <MenuItem value="bottom">Bottom</MenuItem>
                  <MenuItem value="left">Left</MenuItem>
                </Select>}
                control={control}
              />
            </FormControl>
            <Typography className={classes.errorLabel}>{errors.tooltip?.position?.message}</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <Typography>Tooltip Color</Typography>
              <Controller
                name="tooltip.color"
                render={({ value, onChange }) => <HexColorPicker color={value} onChange={onChange} />}
                control={control}
              />
            </FormControl>
            <Typography className={classes.errorLabel}>{errors.tooltip?.color?.message}</Typography>
          </Grid>
          <Grid container item xs={12} className={classes.buttonsContainer}>
            <Button type="button" onClick={onCancel} color="primary" variant="outlined">Back</Button>
            <Button type="submit" color="primary" variant="outlined">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}