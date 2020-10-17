import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { TooltipedImageEntity } from '../../interfaces';

interface Props {
    image: TooltipedImageEntity;
    handleUpdate: () => void;
}

export const View = ({ image, handleUpdate }: Props) => {
    return <Container maxWidth="md">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <img style={{ width: '100%' }} alt="img" src={image.image} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h6">Tooltip text</Typography>
                <Typography>{image.tooltip.text}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h6">Tooltip position</Typography>
                <Typography>{image.tooltip.position}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Tooltip color</Typography>
                <Typography style={{ color: image.tooltip.color }}>{image.tooltip.color}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={handleUpdate}>Update</Button>
            </Grid>
        </Grid>
    </Container>;
}