import React, { SyntheticEvent } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'

import { Tooltip } from '../../../tooltip/components/Tooltip';
import { TooltipedImageEntity } from '../../interfaces';
import styles from './styles';

const useStyles = makeStyles(styles);

interface Props {
  image: TooltipedImageEntity;
  handleRemove: (e: SyntheticEvent, id: number) => void;
  handleClick: (id: number) => void;
}

export const ImageGridElement = ({ image, handleRemove, handleClick }: Props) => {
  const classes = useStyles();

  return <Grid item xs={12} sm={6} md={4}>
    <Tooltip {...image.tooltip} >
      <Card className={classes.card} onClick={() => handleClick(image.id)}>
        <CardMedia
          className={classes.cardMedia}
          image={image.image}
        />
        <CardActions className={classes.cardButtonsGroup}>
          <IconButton onClick={e => handleRemove(e, image.id)} size="small" color="primary">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Tooltip>
  </Grid>
}