import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export default (theme: Theme) => (createStyles({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));
