import React, { SyntheticEvent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

import { useDestroyImage, useIndexImage } from '../../../components/image/hooks/crud';
import { TooltipedImageEntity } from '../../../components/image/interfaces';
import { ImageGridElement } from '../../../components/image/components/GridElement';
import styles from './styles';

const useStyles = makeStyles(styles);

export const ImageList = () => {
  const history = useHistory();
  const classes = useStyles();

  const { data: images = [], refetch, isFetching } = useIndexImage({ retry: false });
  const [mutate] = useDestroyImage({ onSuccess: refetch });
  const handleRemove = useCallback((e: SyntheticEvent, id: number) => {
    mutate(id);
    e.stopPropagation();
  }, [mutate]);
  const handleClick = useCallback((id: number) => history.push(`/images/${id}`), [history]);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to="/images/create">
                  <Button variant="contained" color="primary">
                    Add image
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        {isFetching ? <Typography>Loading ...</Typography> : (images.length ? <Grid container spacing={4}>
          {images.map((image: TooltipedImageEntity) => <ImageGridElement handleClick={handleClick} key={image.id} image={image} handleRemove={handleRemove} />)}
        </Grid> : 'There is no images. You can add them by pressed on \'Add Image\' button.')}
      </Container>
    </React.Fragment>
  );
}
